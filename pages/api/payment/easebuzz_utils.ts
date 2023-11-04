let curl_call = function (url: any, data: any, method = 'POST') {

    var request = require('request');
    var options = {
        'method': method,
        'url': url,
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'mode': 'no-cors',
        },
        form: data,
    };
    return new Promise(function (resolve, reject) {
        request(options, function (error: any, response: { body: string; }) {
            if (response) {
                var data = JSON.parse(response.body)
                return resolve(data);
            } else
                return reject(error);
        })
    })
}


let validate_email = function (mail: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return true;
}

let validate_phone = function (number: string | any[]) {
    if ((number.length === 10)) {
        return false;
    }

    return true;
}
let generateHash = function (data: { txnid: string; amount: string; productinfo: string; name: string; email: string; udf1: string; udf2: string; udf3: string; udf4: string; udf5: string; udf6: string; udf7: string; udf8: string; udf9: string; udf10: string; hash: any; }, config: { key: string; salt: string; }) {
    var sha512 = require("js-sha512");
    var hashstring = config.key + "|" + data.txnid + "|" + data.amount + "|" + data.productinfo + "|" + data.name + "|" + data.email +
        "|" + data.udf1 + "|" + data.udf2 + "|" + data.udf3 + "|" + data.udf4 + "|" + data.udf5 + "|" + data.udf6 + "|" + data.udf7 + "|" + data.udf8 + "|" + data.udf9 + "|" + data.udf10;
    hashstring += "|" + config.salt;
    data.hash = sha512.sha512(hashstring);
    return (data.hash);
}

let validate_float = function (number:any) {
    return parseFloat(number) === number
}

function get_query_url(env:any) {
    let url_link = '';
    if (env == 'prod') {
        url_link = "https://dashboard.easebuzz.in/";
    } else {
        url_link = "https://testdashboard.easebuzz.in/";
    }

    return url_link;
}


exports.validate_mail = validate_email;
exports.validate_phone = validate_phone;
exports.generateHash = generateHash;
exports.validate_float = validate_float;
exports.call = curl_call;
exports.get_base_url = get_query_url;