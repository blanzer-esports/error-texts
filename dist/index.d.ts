declare const Errors: {
    readonly UNAUTHORIZED: 401;
    readonly REGISTER_EMAIL_USED: 409;
    readonly REGISTER_TOO_MANY_USERS: 409;
    readonly BAD_VERIFICATION_CODE: 400;
    readonly BAD_CREDINTALS: 401;
    readonly BAD_AUTH_PROVIDER: 403;
    readonly EMAIL_NOT_USED: 403;
    readonly BAD_RESET_CODE: 403;
    readonly USED_PASSWORD: 400;
};
export default Errors;
