const DB_URL = process.env.MONGO_URI

const httpCode = {
    SUCCESS: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    TOKEN_EXPIRED: 409,
    UNKNOWN_ERROR: 520,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401,
    ADMIN_REQUIRE: 406
}
module.exports = {
    DB_URL,
    httpCode
}