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

            if (result.status === 200) {
                alert("Payment Successful check your email for payment details");

            };
            window.location.reload();
            console.log(result);
            return result.status;
        },
        theme: {
            color: "#61dafb",
        },
    };
    console.log(folder);
    console.log(amount);
    console.log(typeof amount)
    if (folder === "masterclass" && amount === 0) {
        alert("You have successfully enrolled for the Masterclass check your email for further details");
    }
    if (amount !== 0) {
        console.log("inside");
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
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


export { displayRazorpay, takeemail };