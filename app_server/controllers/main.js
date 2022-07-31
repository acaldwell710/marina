//homepage
const request = require('request');
const apiOptions = {
    server: 'http://localhost:8080'
}

const renderBoatSlipsList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Slips';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No slips exist in database!';
        }
    }

    res.render('index', {
        title: pageTitle,
        slips: responseBody,
        message
    });
};

const boatSlipsList = (req, res) => {
    const path = '/api/boat-slips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };

    console.info('>> controller.boatSlipsList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, {statusCode } , body) => {
            if (err) {
                console.error(err);
            }
            renderBoatSlipsList(req, res, body);
            
        }
    )
}

module.exports = {
    boatSlipsList
};