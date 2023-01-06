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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clan = exports.GameProfile = exports.Member = void 0;
const type_graphql_1 = require("type-graphql");
let Clan = class Clan {
};
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.ID),
    __metadata("design:type", String)
], Clan.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Clan.prototype, "gameId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Clan.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Clan.prototype, "myStatus", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], Clan.prototype, "opened", void 0);
Clan = __decorate([
    (0, type_graphql_1.ObjectType)()
], Clan);
exports.Clan = Clan;
let GameProfile = class GameProfile {
};
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.ID),
    __metadata("design:type", String)
], GameProfile.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], GameProfile.prototype, "gameId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], GameProfile.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], GameProfile.prototype, "seq", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], GameProfile.prototype, "profile", void 0);
GameProfile = __decorate([
    (0, type_graphql_1.ObjectType)()
], GameProfile);
exports.GameProfile = GameProfile;
let Member = class Member {
};
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.ID),
    __metadata("design:type", String)
], Member.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "playerName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [GameProfile], { nullable: true }),
    __metadata("design:type", Array)
], Member.prototype, "gameProfile", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [Clan], { nullable: true }),
    __metadata("design:type", Array)
], Member.prototype, "clan", void 0);
Member = __decorate([
    (0, type_graphql_1.ObjectType)()
], Member);
exports.Member = Member;
