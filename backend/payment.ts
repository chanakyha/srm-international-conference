const initializeEasebuzz = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src =
      "https://ebz-static.s3.ap-south-1.amazonaws.com/easecheckout/easebuzz-checkout.js";

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

export const easebuzzPayment = async (
  amount: number,
  name: any,
  email: any,
  contact: any,
  paperId: any
) => {
  const res = await initializeEasebuzz();
  if (!res) {
    alert("Easebuzz SDK Failed to load");
    return;
  }
  const getRandomPaymentId = async () => {
    const min = 10000000000;
    const max = 99999999999;
    const rand = min + Math.random() * (max - min);
    return `ICpay${Math.round(rand)}`;
  };
  var txnid = await getRandomPaymentId();

  var data = {
    txnid: txnid,
    amount: amount.toFixed(1),
    productinfo: paperId,
    name: name,
    email: email,
    phone: contact,
    // surl: "https://texus.io/api/pay-success",
    // furl: "https://texus.io/api/pay-error",
    surl: "http://localhost:3000/api/payment/pay-success",
    furl: "http://localhost:3000/api/payment/pay-error",
    // surl: "https://test.texus.io/api/pay-success",
    // furl: "https://test.texus.io/api/pay-error",
  };
  // var transaction = require('./easebuzz_transaction.js');
  // transaction.transaction(data, config, res);
  console.log(data);
  function pay(access_key: string, url_main: string, key: any) {
    // if (config.enable_iframe==0) {
    var url = url_main + "pay/" + access_key;
    return (window.location.href = url);
    // } else {

    // res.render("enable_iframe.html", {
    //   'key': key,
    //   'access_key': access_key
    // });

    // }
  }

  const apidata = await fetch("/api/payment/easebuzz", {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({ data }),
  }).then((t) => t.json());
  console.log(apidata);
  if (typeof window !== "undefined") {
    pay(apidata?.data, apidata?.payment_url, apidata?.key);
    // window.location.href = apidata?.paymenturl;
  }
  // var initiateeasebuzz = require('../pages/api/payment/easebuzz.js');
  // initiateeasebuzz.initiate_payment(data, config, res);
};
