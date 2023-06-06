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
    USED_PASSWORD: 400
};
exports.default = Errors;
