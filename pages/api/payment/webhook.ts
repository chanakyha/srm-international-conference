import { db } from "@/backend/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export default async function handler(req:any, res:any) {
    if (req.body.status === "success") {
      const data = await req.body;
      var amount = data.amount;
      var txnid = data.txnid;
      // var net_amount_debit = data.net_amount_debit;
      var status = data.status;
        if(status === "success"){
            var txnid = data.txnid;
            var easypayid = data.easepayid;
            var payment_mode = data.mode;
            var paperId = data.productinfo;
            var bankrefnum = data.bank_ref_num;
            var net_amount_debit = data.net_amount_debit;

            // update doc paper with payment details
            const docRef = doc(db, "papers", paperId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const docRef = doc(db, "papers", paperId);
                await updateDoc(docRef, {
                    paid: true,
                    txnid: txnid,
                    easypayid: easypayid,
                    payment_mode: payment_mode,
                    bankrefnum: bankrefnum,
                    net_amount_debit: net_amount_debit,
                });
                const paydocRef = doc(db, "payments", txnid);
                await setDoc(paydocRef, {
                    paid: true,
                    txnid: txnid,
                    easypayid: easypayid,
                    payment_mode: payment_mode,
                    bankrefnum: bankrefnum,
                    net_amount_debit: net_amount_debit,
                    paperId: paperId,
                });
            }
            // alert("Payment Successful");
        } 
    }
    res.status(200).json({message: "OK"});
    //   res.redirect(
    //     302,
    //     "/success/easebuzz?amount=" +
    //       amount +
    //       "&txnid=" +
    //       txnid +
    //       "&email=" +
    //       email +
    //       "&phone=" +
    //       phone +
    //       "&status=" +
    //       status +
    //       "&easepayid=" +
    //       easypayid
    //   );
}
  