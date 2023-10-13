// //rafce for boilerplate
// import React, { useState } from "react";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { addDoc, collection, doc, setDoc } from "firebase/firestore";
// import { db } from "../../backend/firebase";

// const Success = () => {
//   const [success, setSuccess] = useState(false);
//   const router = useRouter();
//   const { txnid, amount, email, phone, status, easepayid } = router.query;
//   const getStatus = async () => {
//     let apidata = await fetch("/api/easebuzz_transaction", {
//       method: "POST",
//       headers: { "Content-type": "application/json;charset=UTF-8" },
//       body: JSON.stringify({ txnid, amount, email, phone, status, easepayid }),
//     }).then((t) => t.json());
//     setSuccess(apidata.msg.status === "success" ? true : false);
//   };
//   useEffect(() => {
//     getStatus();
//   }, [status]);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if (success) {
//         const cart = JSON.parse(localStorage.getItem("cart"));
//         cart?.map(async (cart) => {
//           const docRef = doc(db, "events", cart.eventId);
//           const colRef = collection(docRef, "teams");
//           await addDoc(colRef, {
//             attended: false,
//             participants: cart.participants,
//           })
//             .then((docRef) => {
//               cart.participants.map(async (participant) => {
//                 await setDoc(
//                   doc(db, "students", participant, "registered", docRef.id),
//                   {
//                     eventId: cart.eventId,
//                     eventName: cart.eventName,
//                     eventType: cart.eventType,
//                     eventFee: cart.eventFee,
//                     eventOrganization: cart.eventOrganization,
//                     eventVenue: cart.eventVenue,
//                     eventDate: cart.eventDate,
//                     eventBanner: cart.eventBanner,
//                     teamId: docRef.id,
//                     participants: cart.participants,
//                     attended: false,
//                   },
//                   { merge: true }
//                 ).then(
//                   setTimeout(() => {
//                     localStorage.removeItem("cart");
//                     router.replace(`/dashboard/${userDb.id}`);
//                   }, 2000)
//                 );
//               });
//             })
//             .catch((error) => {
//               alert(error);
//             });
//         });
//       }
//     }
//   }, [success]);

//   return (
//     <section className="w-full h-screen flex flex-col justify-center items-center font-montserrat min-h-[calc(100vh-330px)] p-4 md:p-16 bg-black text-green-500">
//       <div className="mx-auto my-auto md:w-[550px] h-fit bg-green-700/20 rounded-md px-4 py-10 md:py-15">
//         <svg
//           className="mx-auto flex items-center w-12 h-12 mb-4"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//           />
//         </svg>
//         <h1 className="mb-1 md:text-2xl flex justify-center font-bold">
//           Your Payment was Successful!
//         </h1>
//         <p className="flex justify-center md:text-xl tracking-wide">
//           Thank you for Registering.
//         </p>
//         <p className="text-center text-white mt-8 animate-pulse">
//           You will be redirected to dashboard...
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Success;
