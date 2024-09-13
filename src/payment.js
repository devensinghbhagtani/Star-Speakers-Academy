import React from "react";
import { BadgePercent } from "lucide-react";
import axios from "axios";

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

async function displayRazorpay(email, folder, amount) {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    const result = await axios.post("http://localhost:8081/payment/orders", {
        folder: folder,
        email: email,
        amount: amount.toString(),
    });

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    const { id: order_id, currency } = result.data;

    const options = {
        key: "rzp_live_d5ZVQOUIw3XRX6",
        amount: amount.toString(),
        currency: currency,

        description: "Test Transaction",

        order_id: order_id,
        handler: async function(response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
                coursename: folder,
                email: email,
                amount: amount.toString(),
            };

            const result = await axios.post(
                "http://localhost:8081/payment/success",
                data, { withCredentials: true }
            );

            alert(result.data.message);
            window.location.reload();
            console.log(result);
            return result.status;
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}

function takeemail() {
    const email = prompt("Enter your email:");
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email == null || email == "" || !reg.test(email)) {
        alert("Please enter a valid email");
        return null;
    } else {
        console.log(email);
        return email;
    }
}



// async function buymasterclass(amount, enrolllink) {
//     const email = prompt("Enter your email:");
//     console.log(email);
//     const res = await loadScript(
//         "https://checkout.razorpay.com/v1/checkout.js"
//     );

//     if (!res) {
//         alert("Razorpay SDK failed to load. Are you online?");
//         return;
//     }

//     const result = await axios.post("http://localhost:8081/payment/orders", {
//         type: "masterclass",
//         email: email,
//         amount: amount.toString(),
//     });

//     if (!result) {
//         alert("Server error. Are you online?");
//         return;
//     }

//     const { id: order_id, currency } = result.data;

//     const options = {
//         key: "rzp_live_d5ZVQOUIw3XRX6",
//         amount: amount.toString(),
//         currency: currency,
//         email: email,

//         description: "Test Transaction",

//         order_id: order_id,
//         handler: async function(response) {
//             const data = {
//                 orderCreationId: order_id,
//                 razorpayPaymentId: response.razorpay_payment_id,
//                 razorpayOrderId: response.razorpay_order_id,
//                 razorpaySignature: response.razorpay_signature,
//                 type: "masterclass",
//                 email: email,
//                 enrolllink: enrolllink,
//                 amount: amount.toString(),
//             };

//             const result = await axios.post(
//                 "http://localhost:8081/payment/buymasterclasssucess",
//                 data,
//             );

//             alert(result.data.status);
//             return result.status;
//         },
//         theme: {
//             color: "#61dafb",
//         },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
// }

export { displayRazorpay, takeemail };