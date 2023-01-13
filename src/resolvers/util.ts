import { MatchRecode, Member } from "../generated/graphql";
function returnMember(id: string): Member {
  return {
    id: id,
    clan: [],
    email: "",
    gameProfile: [],
    playerName: "",
  };
}
function returnMatchRecode(id: string): MatchRecode {
  return {
    id: id,
    match: null,
  };
}
export { returnMember, returnMatchRecode };
