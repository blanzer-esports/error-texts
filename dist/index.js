"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Errors = {
    UNAUTHORIZED: 401,
    REGISTER_EMAIL_USED: 409,
    REGISTER_TOO_MANY_USERS: 409,
    BAD_VERIFICATION_CODE: 400,
    BAD_CREDINTALS: 401,
    BAD_AUTH_PROVIDER: 403,
    EMAIL_NOT_USED: 403,
    BAD_RESET_CODE: 403,
    USED_PASSWORD: 400,
    GAME_NOT_FOUND: 404,
    GAME_ACCOUNT_NOT_FOUND: 404,
    GAME_ALREADY_LINKED: 409,
    TEAM_EXISTS: 409,
    ALREADY_IN_TEAM: 409,
    TEAM_NOT_FOUND: 404,
    INVITE_NOT_FOUND: 404,
    NOT_ENOUGH_BALANCE: 422,
    TEAM_SELF_LEADER: 400,
    USER_NOT_FOUND: 404,
    USER_SELF_TRANSFER: 400,
    USER_ALREADY_VERIFIED: 409,
    BAD_REQUEST: 400,
    NOT_TEAM_MEMBER: 400,
    INVITE_LINK_NOT_FOUND: 404,
    REQUEST_NOT_FOUND: 404,
};
exports.default = Errors;
