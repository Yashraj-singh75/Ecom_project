const apiResponse = (statusCode, data = null, message = "") => {
    return {
        success: statusCode < 400,
        statusCode,
        message,
        data
    };
};

module.exports = apiResponse;