export default async function handler(req:any, res:any) {
//   if (req.body.status === "success") {
//     const data = await req.body;
//     var amount = data.amount;
//     var txnid = data.txnid;
//     // var net_amount_debit = data.net_amount_debit;
//     var email = data.email;
//     var phone = data.phone;
//     var status = data.status;
//     var easypayid = data.easepayid;

//     res.redirect(
//       302,
//       "/success/easebuzz?amount=" +
//         amount +
//         "&txnid=" +
//         txnid +
//         "&email=" +
//         email +
//         "&phone=" +
//         phone +
//         "&status=" +
//         status +
//         "&easepayid=" +
//         easypayid
//     );
//   }
  if (req.body.status === "success") {
res.redirect(302, "/dashboard");
  }
}
