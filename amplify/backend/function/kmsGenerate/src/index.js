
exports.handler = async (event) => {
    // TODO implement
    var p12 = require('node-openssl-p12').createClientSSL;
    var p12options = {
        bitSize: 2048,
        clientFileName: 'client001',
        C: 'EX',
        ST: 'Example',
        L: 'Example',
        O: 'Example',
        OU: 'Example',
        CN: 'Example',
        emailAddress: 'example@example.ex',
        clientPass: 'q1w2e3r4t5y6',
        caFileName: 'ca',
        serial: '01',
        days: 365
    };

    p12(p12options).done(function (options, sha1fingerprint) {
        console.log('SHA-1 fingerprint:', sha1fingerprint);
    }).fail(function (err) {
        console.log(err);
    });

    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
