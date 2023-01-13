import { RESTDataSource } from "@apollo/datasource-rest";
import { KeyValueCache } from "apollo-server-core";
import { Clan, GameProfile, Member } from "../../generated/graphql";
import { returnMember } from "../util";

export class MemberAPI extends RESTDataSource {
  override baseURL = "http://itmsg.iptime.org:38121/";
  private token: string;

  constructor(options: { token: string; cache: KeyValueCache }) {
    super(options);
    this.token = options.token;
    this.memoizeGetRequests = false;
  }

  async allMember(): Promise<Member[]> {
    return this.get<Member[]>(`member`);
  }

  async getMember(id): Promise<Member> {
    return this.get<Member>(`member/${encodeURIComponent(id)}`);
  }

  async getGameProfile(id): Promise<GameProfile[]> {
    return this.get<GameProfile[]>(`member/${encodeURIComponent(id)}/playGame`);
  }

  async getUserClan(id): Promise<Clan[]> {
    return this.get<Clan[]>(
      `clan/search/findByUser?${new URLSearchParams({
        status: "CM-04",
        userId: id,
      })}`
    );
  }

  async updateLogin(id): Promise<Member> {
    await this.patch(`member/${encodeURIComponent(id)}/login`);
    return returnMember(id);
  }
}
