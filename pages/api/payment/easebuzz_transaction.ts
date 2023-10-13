// var sha512 = require("js-sha512");
// var util = require("./easebuzz_utils.js");

// export default async function handler(req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): any; new(): any; }; }; json: (arg0: { message: string; status: number; }) => void; }) {
//   var data = req.body;
//   var key = process.env.NEXT_PUBLIC_EASEBUZZ_KEY;
//   var salt = process.env.NEXT_PUBLIC_EASEBUZZ_SALT;

//   function generateHash_transaction() {
//     var hashstring =
//       key +
//       "|" +
//       data.txnid +
//       "|" +
//       data.amount +
//       "|" +
//       data.email +
//       "|" +
//       data.phone +
//       "|" +
//       salt;
//     var hash_key = sha512.sha512(hashstring);
//     return hash_key;
//   }

//   let form = {
//     key: key,
//     txnid: data.txnid,
//     amount: data.amount,
//     email: data.email,
//     phone: data.phone,
//     hash: generateHash_transaction(),
//   };
//   let base_url = util.get_base_url(process.env.NEXT_PUBLIC_EASEBUZZ_ENV);
//   if (base_url !== "") {
//     let call_url = base_url + "transaction/v1/retrieve";
//     util.call(call_url, form).then(function (data: any) {
//       return res.status(200).json(data);
//     });
//   } else {
//     res.json({
//       message: "Environment not supported",
//       status: 0,
//     });
//   }
// }
