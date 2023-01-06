import { Arg, FieldResolver, Mutation, Query,Resolver, Root } from 'type-graphql';
import { Member,GameProfile, Clan } from './Member';
import { post,get, patch} from "../fetch";

const url = "http://itmsg.iptime.org:38121"
@Resolver(of => Member)
class UserResolver {
    @Query(returns => [Member],{nullable :true})
    getAllMember():Promise<Member> {
        return get(`${url}/member`);
    }

    @Query(returns => Member)
    getMember(
        @Arg("id") memberId:string
    ):Promise<Member>{
        return get(`${url}/member/${encodeURIComponent(memberId)}`);
    }

    @Mutation(returns => Member)
    async updateLogin(
        @Arg("id") memberId:string
    ):Promise<Member>{
        const member = Object.assign(new Member(),{
            id:memberId
        })
        await patch(`${url}/member/${encodeURIComponent(memberId)}/login`);
        return member;
    }

    @FieldResolver()
    gameProfile(
        @Root() member: Member
    ):Promise<[GameProfile]>{
        return get(`${url}/member/${encodeURIComponent(member.id)}/playGame`);
    }
 

    @FieldResolver()
    clan(
        @Root() member:Member
    ):Promise<[Clan]>{
        return get(`${url}/clan/search/findByUser?${new URLSearchParams({ status:"CM-04", userId : member.id})}`);
    }
}

export default UserResolver