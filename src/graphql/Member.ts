import { Field, ID, ObjectType, Int } from 'type-graphql';


@ObjectType()
class Clan{
    @Field(type => ID)
    id:string;
    @Field({nullable : true})
    gameId:string;
    @Field()
    name:string;
    @Field()
    myStatus:string;
    @Field()
    opened:boolean;
}

@ObjectType()
class GameProfile{
    @Field(type => ID)
    id:string;
    @Field({nullable : true})
    gameId:string;
    @Field()
    userId:string;
    @Field(type => Int)
    seq:number;
    @Field()
    profile:string;
}

@ObjectType()
 class Member {
    @Field(type => ID)
    id:string;
    @Field({nullable : true})
    playerName:string;
    @Field({nullable : true})
    email:string;
    @Field(type => [GameProfile],{nullable : true})
    gameProfile:GameProfile[];
    @Field(type => [Clan],{nullable : true})
    clan:Clan[];
}

export { Member , GameProfile, Clan}
