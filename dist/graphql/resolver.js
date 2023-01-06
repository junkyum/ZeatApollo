"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Member_1 = require("./Member");
const fetch_1 = require("../fetch");
const url = "http://itmsg.iptime.org:38121";
let UserResolver = class UserResolver {
    getAllMember() {
        return (0, fetch_1.get)(`${url}/member`);
    }
    getMember(memberId) {
        return (0, fetch_1.get)(`${url}/member/${encodeURIComponent(memberId)}`);
    }
    async updateLogin(memberId) {
        const member = Object.assign(new Member_1.Member(), {
            id: memberId
        });
        await (0, fetch_1.patch)(`${url}/member/${encodeURIComponent(memberId)}/login`);
        return member;
    }
    gameProfile(member) {
        return (0, fetch_1.get)(`${url}/member/${encodeURIComponent(member.id)}/playGame`);
    }
    clan(member) {
        return (0, fetch_1.get)(`${url}/clan/search/findByUser?${new URLSearchParams({ status: "CM-04", userId: member.id })}`);
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [Member_1.Member], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getAllMember", null);
__decorate([
    (0, type_graphql_1.Query)(returns => Member_1.Member),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getMember", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => Member_1.Member),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateLogin", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Member_1.Member]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "gameProfile", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Member_1.Member]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "clan", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(of => Member_1.Member)
], UserResolver);
exports.default = UserResolver;
