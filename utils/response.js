const makeResponse = ({res, status, message, data}) => {
    const responseData = {data, message};
    if (!data) {
        delete responseData.data;
    }
    res.status(status).json(responseData);
}

module.exports = {
    makeResponse,
}