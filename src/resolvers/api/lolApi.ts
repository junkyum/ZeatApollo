import { RESTDataSource } from "@apollo/datasource-rest";
import { KeyValueCache } from "apollo-server-core";
import {
  LolSummoner,
  ChallengeInfo,
  Match,
  MatchRecode,
  RankInfo,
} from "../../generated/graphql";
import { returnMatchRecode } from "../util";

const api_key = "RGAPI-dc04903f-3007-4ecc-ba4f-53d0967c3a19";
const header = {
  headers: {
    "X-Riot-Token": api_key,
  },
};
export class LolAPI extends RESTDataSource {
  override baseURL = "https://kr.api.riotgames.com/";
  private token: string;

  constructor(options: { token: string; cache: KeyValueCache }) {
    super(options);
    this.token = options.token;
    this.memoizeGetRequests = false;
  }

  async getSummoner(name): Promise<LolSummoner> {
    return this.get<LolSummoner>(
      `lol/summoner/v4/summoners/by-name/${encodeURIComponent(name)}`,
      header
    );
  }

  async getChallengeInfo(puuid): Promise<ChallengeInfo> {
    return this.get<ChallengeInfo>(
      `lol/challenges/v1/player-data/${encodeURIComponent(puuid)}`,
      header
    );
  }

  async getRankInfo(id): Promise<RankInfo[]> {
    return this.get<RankInfo[]>(
      `lol/league/v4/entries/by-summoner/${encodeURIComponent(id)}`,
      header
    );
  }

  async getMatchList(puuid, cnt): Promise<MatchRecode[]> {
    this.baseURL = "https://asia.api.riotgames.com/";
    return this.get<[string]>(
      `lol/match/v5/matches/by-puuid/${encodeURIComponent(
        puuid
      )}/ids?start=0&count=${cnt}`,
      header
    ).then((res) => {
      let result = [];
      res.forEach((matchId) => {
        result.push(returnMatchRecode(matchId));
      });
      return result;
    });
  }
  async getMatch(matchId: string): Promise<Match> {
    this.baseURL = "https://asia.api.riotgames.com/";
    return await this.get<Match>(
      `lol/match/v5/matches/${encodeURIComponent(matchId)}`,
      header
    );
  }
}
