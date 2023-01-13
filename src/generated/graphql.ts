import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BanDto = {
  __typename?: 'BanDto';
  championId?: Maybe<Scalars['Int']>;
  pickTurn?: Maybe<Scalars['Int']>;
};

export type CategoryPoInts = {
  __typename?: 'CategoryPoInts';
  COLLECTION?: Maybe<PoIntObj>;
  EXPERTISE?: Maybe<PoIntObj>;
  IMAGINATION?: Maybe<PoIntObj>;
  TEAMWORK?: Maybe<PoIntObj>;
  VETERANCY?: Maybe<PoIntObj>;
};

export type Challenge = {
  __typename?: 'Challenge';
  achievedTime?: Maybe<Scalars['Float']>;
  challengeId?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['String']>;
  percentile?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Int']>;
};

export type ChallengeInfo = {
  __typename?: 'ChallengeInfo';
  categoryPoInts?: Maybe<CategoryPoInts>;
  challenges: Array<Maybe<Challenge>>;
  preferences?: Maybe<Preferences>;
  totalPoInts?: Maybe<TotalPoInts>;
};

export type Clan = {
  __typename?: 'Clan';
  gameId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  myStatus?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  opened?: Maybe<Scalars['Boolean']>;
};

export type GameProfile = {
  __typename?: 'GameProfile';
  gameId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  seq?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export type LolSummoner = {
  __typename?: 'LolSummoner';
  accountId?: Maybe<Scalars['String']>;
  challengeInfo?: Maybe<ChallengeInfo>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profileIconId?: Maybe<Scalars['Int']>;
  puuid?: Maybe<Scalars['String']>;
  rankInfo: Array<Maybe<RankInfo>>;
  recentMatch?: Maybe<Array<Maybe<MatchRecode>>>;
  revisionDate?: Maybe<Scalars['Float']>;
  summonerLevel?: Maybe<Scalars['Int']>;
};

export type Match = {
  __typename?: 'Match';
  info?: Maybe<MatchInfo>;
  metadata?: Maybe<MatchMetaData>;
};

export type MatchInfo = {
  __typename?: 'MatchInfo';
  gameCreation?: Maybe<Scalars['Float']>;
  gameDuration?: Maybe<Scalars['Float']>;
  gameEndTimestamp?: Maybe<Scalars['Float']>;
  gameId?: Maybe<Scalars['Float']>;
  gameMode?: Maybe<Scalars['String']>;
  gameName?: Maybe<Scalars['String']>;
  gameStartTimestamp?: Maybe<Scalars['Float']>;
  gameType?: Maybe<Scalars['String']>;
  gameVersion?: Maybe<Scalars['String']>;
  mapId?: Maybe<Scalars['Int']>;
  participants?: Maybe<Array<Maybe<Participant>>>;
  platformId?: Maybe<Scalars['String']>;
  queueId?: Maybe<Scalars['Int']>;
  teams?: Maybe<Array<Maybe<TeamDto>>>;
  tournamentCode?: Maybe<Scalars['String']>;
};

export type MatchMetaData = {
  __typename?: 'MatchMetaData';
  dataVersion?: Maybe<Scalars['String']>;
  matchId?: Maybe<Scalars['String']>;
  participants?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MatchRecode = {
  __typename?: 'MatchRecode';
  id?: Maybe<Scalars['String']>;
  match: Match;
};

export type Member = {
  __typename?: 'Member';
  clan: Array<Clan>;
  email?: Maybe<Scalars['String']>;
  gameProfile: Array<GameProfile>;
  id?: Maybe<Scalars['String']>;
  playerName?: Maybe<Scalars['String']>;
};

export type MiniSeries = {
  __typename?: 'MiniSeries';
  losses?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['Int']>;
  wins?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateLogin?: Maybe<Member>;
};


export type MutationUpdateLoginArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type ObjectiveDto = {
  __typename?: 'ObjectiveDto';
  first?: Maybe<Scalars['Boolean']>;
  kills?: Maybe<Scalars['Int']>;
};

export type ObjectivesDto = {
  __typename?: 'ObjectivesDto';
  baron?: Maybe<ObjectiveDto>;
  champion?: Maybe<ObjectiveDto>;
  dragon?: Maybe<ObjectiveDto>;
  inhibitor?: Maybe<ObjectiveDto>;
  riftHerald?: Maybe<ObjectiveDto>;
  tower?: Maybe<ObjectiveDto>;
};

export type Participant = {
  __typename?: 'Participant';
  FloatestTimeSpentLiving?: Maybe<Scalars['Int']>;
  assists?: Maybe<Scalars['Int']>;
  baronKills?: Maybe<Scalars['Int']>;
  bountyLevel?: Maybe<Scalars['Int']>;
  champExperience?: Maybe<Scalars['Int']>;
  champLevel?: Maybe<Scalars['Int']>;
  championId?: Maybe<Scalars['Int']>;
  championName?: Maybe<Scalars['String']>;
  championTransform?: Maybe<Scalars['Int']>;
  consumablesPurchased?: Maybe<Scalars['Int']>;
  damageDealtToBuildings?: Maybe<Scalars['Int']>;
  damageDealtToObjectives?: Maybe<Scalars['Int']>;
  damageDealtToTurrets?: Maybe<Scalars['Int']>;
  damageSelfMitigated?: Maybe<Scalars['Int']>;
  deaths?: Maybe<Scalars['Int']>;
  detectorWardsPlaced?: Maybe<Scalars['Int']>;
  doubleKills?: Maybe<Scalars['Int']>;
  dragonKills?: Maybe<Scalars['Int']>;
  firstBloodAssist?: Maybe<Scalars['Boolean']>;
  firstBloodKill?: Maybe<Scalars['Boolean']>;
  firstTowerAssist?: Maybe<Scalars['Boolean']>;
  firstTowerKill?: Maybe<Scalars['Boolean']>;
  gameEndedInEarlySurrender?: Maybe<Scalars['Boolean']>;
  gameEndedInSurrender?: Maybe<Scalars['Boolean']>;
  goldEarned?: Maybe<Scalars['Int']>;
  goldSpent?: Maybe<Scalars['Int']>;
  individualPosition?: Maybe<Scalars['String']>;
  inhibitorKills?: Maybe<Scalars['Int']>;
  inhibitorTakedowns?: Maybe<Scalars['Int']>;
  inhibitorsLost?: Maybe<Scalars['Int']>;
  item0?: Maybe<Scalars['Int']>;
  item1?: Maybe<Scalars['Int']>;
  item2?: Maybe<Scalars['Int']>;
  item3?: Maybe<Scalars['Int']>;
  item4?: Maybe<Scalars['Int']>;
  item5?: Maybe<Scalars['Int']>;
  item6?: Maybe<Scalars['Int']>;
  itemsPurchased?: Maybe<Scalars['Int']>;
  killingSprees?: Maybe<Scalars['Int']>;
  kills?: Maybe<Scalars['Int']>;
  lane?: Maybe<Scalars['String']>;
  largestCriticalStrike?: Maybe<Scalars['Int']>;
  largestKillingSpree?: Maybe<Scalars['Int']>;
  largestMultiKill?: Maybe<Scalars['Int']>;
  magicDamageDealt?: Maybe<Scalars['Int']>;
  magicDamageDealtToChampions?: Maybe<Scalars['Int']>;
  magicDamageTaken?: Maybe<Scalars['Int']>;
  neutralMinionsKilled?: Maybe<Scalars['Int']>;
  nexusKills?: Maybe<Scalars['Int']>;
  nexusLost?: Maybe<Scalars['Int']>;
  nexusTakedowns?: Maybe<Scalars['Int']>;
  objectivesStolen?: Maybe<Scalars['Int']>;
  objectivesStolenAssists?: Maybe<Scalars['Int']>;
  participantId?: Maybe<Scalars['Int']>;
  pentaKills?: Maybe<Scalars['Int']>;
  perks?: Maybe<Perks>;
  physicalDamageDealt?: Maybe<Scalars['Int']>;
  physicalDamageDealtToChampions?: Maybe<Scalars['Int']>;
  physicalDamageTaken?: Maybe<Scalars['Int']>;
  profileIcon?: Maybe<Scalars['Int']>;
  puuid?: Maybe<Scalars['String']>;
  quadraKills?: Maybe<Scalars['Int']>;
  riotIdName?: Maybe<Scalars['String']>;
  riotIdTagline?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  sightWardsBoughtInGame?: Maybe<Scalars['Int']>;
  spell1Casts?: Maybe<Scalars['Int']>;
  spell2Casts?: Maybe<Scalars['Int']>;
  spell3Casts?: Maybe<Scalars['Int']>;
  spell4Casts?: Maybe<Scalars['Int']>;
  summoner1Casts?: Maybe<Scalars['Int']>;
  summoner1Id?: Maybe<Scalars['Int']>;
  summoner2Casts?: Maybe<Scalars['Int']>;
  summoner2Id?: Maybe<Scalars['Int']>;
  summonerId?: Maybe<Scalars['String']>;
  summonerLevel?: Maybe<Scalars['Int']>;
  summonerName?: Maybe<Scalars['String']>;
  teamEarlySurrendered?: Maybe<Scalars['Boolean']>;
  teamId?: Maybe<Scalars['Int']>;
  teamPosition?: Maybe<Scalars['String']>;
  timeCCingOthers?: Maybe<Scalars['Int']>;
  timePlayed?: Maybe<Scalars['Int']>;
  totalDamageDealt?: Maybe<Scalars['Int']>;
  totalDamageDealtToChampions?: Maybe<Scalars['Int']>;
  totalDamageShieldedOnTeammates?: Maybe<Scalars['Int']>;
  totalDamageTaken?: Maybe<Scalars['Int']>;
  totalHeal?: Maybe<Scalars['Int']>;
  totalHealsOnTeammates?: Maybe<Scalars['Int']>;
  totalMinionsKilled?: Maybe<Scalars['Int']>;
  totalTimeCCDealt?: Maybe<Scalars['Int']>;
  totalTimeSpentDead?: Maybe<Scalars['Int']>;
  totalUnitsHealed?: Maybe<Scalars['Int']>;
  tripleKills?: Maybe<Scalars['Int']>;
  trueDamageDealt?: Maybe<Scalars['Int']>;
  trueDamageDealtToChampions?: Maybe<Scalars['Int']>;
  trueDamageTaken?: Maybe<Scalars['Int']>;
  turretKills?: Maybe<Scalars['Int']>;
  turretTakedowns?: Maybe<Scalars['Int']>;
  turretsLost?: Maybe<Scalars['Int']>;
  unrealKills?: Maybe<Scalars['Int']>;
  visionScore?: Maybe<Scalars['Int']>;
  visionWardsBoughtInGame?: Maybe<Scalars['Int']>;
  wardsKilled?: Maybe<Scalars['Int']>;
  wardsPlaced?: Maybe<Scalars['Int']>;
  win?: Maybe<Scalars['Boolean']>;
};

export type PerkStats = {
  __typename?: 'PerkStats';
  defense?: Maybe<Scalars['Int']>;
  flex?: Maybe<Scalars['Int']>;
  offense?: Maybe<Scalars['Int']>;
};

export type PerkStyle = {
  __typename?: 'PerkStyle';
  description?: Maybe<Scalars['String']>;
  selections?: Maybe<Array<Maybe<PerkStyleSelection>>>;
  style?: Maybe<Scalars['Int']>;
};

export type PerkStyleSelection = {
  __typename?: 'PerkStyleSelection';
  perk?: Maybe<Scalars['Int']>;
  var1?: Maybe<Scalars['Int']>;
  var2?: Maybe<Scalars['Int']>;
  var3?: Maybe<Scalars['Int']>;
};

export type Perks = {
  __typename?: 'Perks';
  statPerks?: Maybe<PerkStats>;
  styles?: Maybe<Array<Maybe<PerkStyle>>>;
};

export type PoIntObj = {
  __typename?: 'PoIntObj';
  current?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Int']>;
  percentile?: Maybe<Scalars['Float']>;
};

export type Preferences = {
  __typename?: 'Preferences';
  bannerAccent: Scalars['String'];
  challengeIds?: Maybe<Array<Scalars['Int']>>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allMember: Array<Member>;
  getMember?: Maybe<Member>;
  getSummoner?: Maybe<LolSummoner>;
};


export type QueryGetMemberArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGetSummonerArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type RankInfo = {
  __typename?: 'RankInfo';
  freshBlood?: Maybe<Scalars['Boolean']>;
  hotStreak?: Maybe<Scalars['Boolean']>;
  inactive?: Maybe<Scalars['Boolean']>;
  leagueId?: Maybe<Scalars['String']>;
  leaguePoInts?: Maybe<Scalars['Int']>;
  losses?: Maybe<Scalars['Int']>;
  miniSeries?: Maybe<MiniSeries>;
  queueType?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['String']>;
  summonerId?: Maybe<Scalars['String']>;
  summonerName?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
  veteran?: Maybe<Scalars['Boolean']>;
  wins?: Maybe<Scalars['Int']>;
};

export type TeamDto = {
  __typename?: 'TeamDto';
  bans?: Maybe<Array<Maybe<BanDto>>>;
  objectives?: Maybe<ObjectivesDto>;
  teamId?: Maybe<Scalars['Int']>;
  win?: Maybe<Scalars['Boolean']>;
};

export type TotalPoInts = {
  __typename?: 'TotalPoInts';
  current?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Int']>;
  percentile?: Maybe<Scalars['Float']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BanDto: ResolverTypeWrapper<BanDto>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CategoryPoInts: ResolverTypeWrapper<CategoryPoInts>;
  Challenge: ResolverTypeWrapper<Challenge>;
  ChallengeInfo: ResolverTypeWrapper<ChallengeInfo>;
  Clan: ResolverTypeWrapper<Clan>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GameProfile: ResolverTypeWrapper<GameProfile>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LolSummoner: ResolverTypeWrapper<LolSummoner>;
  Match: ResolverTypeWrapper<Match>;
  MatchInfo: ResolverTypeWrapper<MatchInfo>;
  MatchMetaData: ResolverTypeWrapper<MatchMetaData>;
  MatchRecode: ResolverTypeWrapper<MatchRecode>;
  Member: ResolverTypeWrapper<Member>;
  MiniSeries: ResolverTypeWrapper<MiniSeries>;
  Mutation: ResolverTypeWrapper<{}>;
  ObjectiveDto: ResolverTypeWrapper<ObjectiveDto>;
  ObjectivesDto: ResolverTypeWrapper<ObjectivesDto>;
  Participant: ResolverTypeWrapper<Participant>;
  PerkStats: ResolverTypeWrapper<PerkStats>;
  PerkStyle: ResolverTypeWrapper<PerkStyle>;
  PerkStyleSelection: ResolverTypeWrapper<PerkStyleSelection>;
  Perks: ResolverTypeWrapper<Perks>;
  PoIntObj: ResolverTypeWrapper<PoIntObj>;
  Preferences: ResolverTypeWrapper<Preferences>;
  Query: ResolverTypeWrapper<{}>;
  RankInfo: ResolverTypeWrapper<RankInfo>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TeamDto: ResolverTypeWrapper<TeamDto>;
  TotalPoInts: ResolverTypeWrapper<TotalPoInts>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BanDto: BanDto;
  Boolean: Scalars['Boolean'];
  CategoryPoInts: CategoryPoInts;
  Challenge: Challenge;
  ChallengeInfo: ChallengeInfo;
  Clan: Clan;
  Float: Scalars['Float'];
  GameProfile: GameProfile;
  Int: Scalars['Int'];
  LolSummoner: LolSummoner;
  Match: Match;
  MatchInfo: MatchInfo;
  MatchMetaData: MatchMetaData;
  MatchRecode: MatchRecode;
  Member: Member;
  MiniSeries: MiniSeries;
  Mutation: {};
  ObjectiveDto: ObjectiveDto;
  ObjectivesDto: ObjectivesDto;
  Participant: Participant;
  PerkStats: PerkStats;
  PerkStyle: PerkStyle;
  PerkStyleSelection: PerkStyleSelection;
  Perks: Perks;
  PoIntObj: PoIntObj;
  Preferences: Preferences;
  Query: {};
  RankInfo: RankInfo;
  String: Scalars['String'];
  TeamDto: TeamDto;
  TotalPoInts: TotalPoInts;
}>;

export type BanDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['BanDto'] = ResolversParentTypes['BanDto']> = ResolversObject<{
  championId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pickTurn?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryPoIntsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryPoInts'] = ResolversParentTypes['CategoryPoInts']> = ResolversObject<{
  COLLECTION?: Resolver<Maybe<ResolversTypes['PoIntObj']>, ParentType, ContextType>;
  EXPERTISE?: Resolver<Maybe<ResolversTypes['PoIntObj']>, ParentType, ContextType>;
  IMAGINATION?: Resolver<Maybe<ResolversTypes['PoIntObj']>, ParentType, ContextType>;
  TEAMWORK?: Resolver<Maybe<ResolversTypes['PoIntObj']>, ParentType, ContextType>;
  VETERANCY?: Resolver<Maybe<ResolversTypes['PoIntObj']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChallengeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Challenge'] = ResolversParentTypes['Challenge']> = ResolversObject<{
  achievedTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  challengeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  percentile?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChallengeInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChallengeInfo'] = ResolversParentTypes['ChallengeInfo']> = ResolversObject<{
  categoryPoInts?: Resolver<Maybe<ResolversTypes['CategoryPoInts']>, ParentType, ContextType>;
  challenges?: Resolver<Array<Maybe<ResolversTypes['Challenge']>>, ParentType, ContextType>;
  preferences?: Resolver<Maybe<ResolversTypes['Preferences']>, ParentType, ContextType>;
  totalPoInts?: Resolver<Maybe<ResolversTypes['TotalPoInts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Clan'] = ResolversParentTypes['Clan']> = ResolversObject<{
  gameId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  myStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  opened?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GameProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['GameProfile'] = ResolversParentTypes['GameProfile']> = ResolversObject<{
  gameId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seq?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LolSummonerResolvers<ContextType = any, ParentType extends ResolversParentTypes['LolSummoner'] = ResolversParentTypes['LolSummoner']> = ResolversObject<{
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  challengeInfo?: Resolver<Maybe<ResolversTypes['ChallengeInfo']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profileIconId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  puuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rankInfo?: Resolver<Array<Maybe<ResolversTypes['RankInfo']>>, ParentType, ContextType>;
  recentMatch?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchRecode']>>>, ParentType, ContextType>;
  revisionDate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  summonerLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Match'] = ResolversParentTypes['Match']> = ResolversObject<{
  info?: Resolver<Maybe<ResolversTypes['MatchInfo']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['MatchMetaData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MatchInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchInfo'] = ResolversParentTypes['MatchInfo']> = ResolversObject<{
  gameCreation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gameDuration?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gameEndTimestamp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gameId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gameMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gameName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gameStartTimestamp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gameType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gameVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mapId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  participants?: Resolver<Maybe<Array<Maybe<ResolversTypes['Participant']>>>, ParentType, ContextType>;
  platformId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  queueId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  teams?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamDto']>>>, ParentType, ContextType>;
  tournamentCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MatchMetaDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchMetaData'] = ResolversParentTypes['MatchMetaData']> = ResolversObject<{
  dataVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  participants?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MatchRecodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchRecode'] = ResolversParentTypes['MatchRecode']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  match?: Resolver<ResolversTypes['Match'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = ResolversObject<{
  clan?: Resolver<Array<ResolversTypes['Clan']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gameProfile?: Resolver<Array<ResolversTypes['GameProfile']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MiniSeriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['MiniSeries'] = ResolversParentTypes['MiniSeries']> = ResolversObject<{
  losses?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  progress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wins?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  updateLogin?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, Partial<MutationUpdateLoginArgs>>;
}>;

export type ObjectiveDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObjectiveDto'] = ResolversParentTypes['ObjectiveDto']> = ResolversObject<{
  first?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  kills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ObjectivesDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObjectivesDto'] = ResolversParentTypes['ObjectivesDto']> = ResolversObject<{
  baron?: Resolver<Maybe<ResolversTypes['ObjectiveDto']>, ParentType, ContextType>;
  champion?: Resolver<Maybe<ResolversTypes['ObjectiveDto']>, ParentType, ContextType>;
  dragon?: Resolver<Maybe<ResolversTypes['ObjectiveDto']>, ParentType, ContextType>;
  inhibitor?: Resolver<Maybe<ResolversTypes['ObjectiveDto']>, ParentType, ContextType>;
  riftHerald?: Resolver<Maybe<ResolversTypes['ObjectiveDto']>, ParentType, ContextType>;
  tower?: Resolver<Maybe<ResolversTypes['ObjectiveDto']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Participant'] = ResolversParentTypes['Participant']> = ResolversObject<{
  FloatestTimeSpentLiving?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  assists?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  baronKills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bountyLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  champExperience?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  champLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  championId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  championName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  championTransform?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  consumablesPurchased?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  damageDealtToBuildings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  damageDealtToObjectives?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  damageDealtToTurrets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  damageSelfMitigated?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deaths?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  detectorWardsPlaced?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  doubleKills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dragonKills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstBloodAssist?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstBloodKill?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstTowerAssist?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstTowerKill?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  gameEndedInEarlySurrender?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  gameEndedInSurrender?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  goldEarned?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goldSpent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  individualPosition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inhibitorKills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  inhibitorTakedowns?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  inhibitorsLost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item0?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item4?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item5?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item6?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  itemsPurchased?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  killingSprees?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  kills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lane?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  largestCriticalStrike?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  largestKillingSpree?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  largestMultiKill?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  magicDamageDealt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  magicDamageDealtToChampions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  magicDamageTaken?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  neutralMinionsKilled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nexusKills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nexusLost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nexusTakedowns?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  objectivesStolen?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  objectivesStolenAssists?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  participantId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pentaKills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  perks?: Resolver<Maybe<ResolversTypes['Perks']>, ParentType, ContextType>;
  physicalDamageDealt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  physicalDamageDealtToChampions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  physicalDamageTaken?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  profileIcon?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  puuid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quadraKills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  riotIdName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  riotIdTagline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sightWardsBoughtInGame?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  spell1Casts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  spell2Casts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  spell3Casts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  spell4Casts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  summoner1Casts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  summoner1Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  summoner2Casts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  summoner2Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  summonerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summonerLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  summonerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  teamEarlySurrendered?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  teamPosition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timeCCingOthers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timePlayed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalDamageDealt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalDamageDealtToChampions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalDamageShieldedOnTeammates?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalDamageTaken?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalHeal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalHealsOnTeammates?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalMinionsKilled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalTimeCCDealt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalTimeSpentDead?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalUnitsHealed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tripleKills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  trueDamageDealt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  trueDamageDealtToChampions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  trueDamageTaken?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  turretKills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  turretTakedowns?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  turretsLost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unrealKills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  visionScore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  visionWardsBoughtInGame?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wardsKilled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wardsPlaced?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  win?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PerkStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PerkStats'] = ResolversParentTypes['PerkStats']> = ResolversObject<{
  defense?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  flex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offense?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PerkStyleResolvers<ContextType = any, ParentType extends ResolversParentTypes['PerkStyle'] = ResolversParentTypes['PerkStyle']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  selections?: Resolver<Maybe<Array<Maybe<ResolversTypes['PerkStyleSelection']>>>, ParentType, ContextType>;
  style?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PerkStyleSelectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PerkStyleSelection'] = ResolversParentTypes['PerkStyleSelection']> = ResolversObject<{
  perk?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  var1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  var2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  var3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PerksResolvers<ContextType = any, ParentType extends ResolversParentTypes['Perks'] = ResolversParentTypes['Perks']> = ResolversObject<{
  statPerks?: Resolver<Maybe<ResolversTypes['PerkStats']>, ParentType, ContextType>;
  styles?: Resolver<Maybe<Array<Maybe<ResolversTypes['PerkStyle']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoIntObjResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoIntObj'] = ResolversParentTypes['PoIntObj']> = ResolversObject<{
  current?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  percentile?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PreferencesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Preferences'] = ResolversParentTypes['Preferences']> = ResolversObject<{
  bannerAccent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  challengeIds?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  allMember?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType>;
  getMember?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, Partial<QueryGetMemberArgs>>;
  getSummoner?: Resolver<Maybe<ResolversTypes['LolSummoner']>, ParentType, ContextType, Partial<QueryGetSummonerArgs>>;
}>;

export type RankInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['RankInfo'] = ResolversParentTypes['RankInfo']> = ResolversObject<{
  freshBlood?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hotStreak?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  inactive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  leagueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  leaguePoInts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  losses?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  miniSeries?: Resolver<Maybe<ResolversTypes['MiniSeries']>, ParentType, ContextType>;
  queueType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summonerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summonerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  veteran?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  wins?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamDto'] = ResolversParentTypes['TeamDto']> = ResolversObject<{
  bans?: Resolver<Maybe<Array<Maybe<ResolversTypes['BanDto']>>>, ParentType, ContextType>;
  objectives?: Resolver<Maybe<ResolversTypes['ObjectivesDto']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  win?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TotalPoIntsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalPoInts'] = ResolversParentTypes['TotalPoInts']> = ResolversObject<{
  current?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  percentile?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  BanDto?: BanDtoResolvers<ContextType>;
  CategoryPoInts?: CategoryPoIntsResolvers<ContextType>;
  Challenge?: ChallengeResolvers<ContextType>;
  ChallengeInfo?: ChallengeInfoResolvers<ContextType>;
  Clan?: ClanResolvers<ContextType>;
  GameProfile?: GameProfileResolvers<ContextType>;
  LolSummoner?: LolSummonerResolvers<ContextType>;
  Match?: MatchResolvers<ContextType>;
  MatchInfo?: MatchInfoResolvers<ContextType>;
  MatchMetaData?: MatchMetaDataResolvers<ContextType>;
  MatchRecode?: MatchRecodeResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  MiniSeries?: MiniSeriesResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ObjectiveDto?: ObjectiveDtoResolvers<ContextType>;
  ObjectivesDto?: ObjectivesDtoResolvers<ContextType>;
  Participant?: ParticipantResolvers<ContextType>;
  PerkStats?: PerkStatsResolvers<ContextType>;
  PerkStyle?: PerkStyleResolvers<ContextType>;
  PerkStyleSelection?: PerkStyleSelectionResolvers<ContextType>;
  Perks?: PerksResolvers<ContextType>;
  PoIntObj?: PoIntObjResolvers<ContextType>;
  Preferences?: PreferencesResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RankInfo?: RankInfoResolvers<ContextType>;
  TeamDto?: TeamDtoResolvers<ContextType>;
  TotalPoInts?: TotalPoIntsResolvers<ContextType>;
}>;

