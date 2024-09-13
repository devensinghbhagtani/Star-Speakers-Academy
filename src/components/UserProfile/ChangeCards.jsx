import React, { useState } from 'react';
import styles from './UserProfile.module.css';

export default function ChangeCards() {

    const [userCards, setUserCards] = useState({
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: "",
        bankName: ""
    });

    const addUserCard = (e) => {
        e.preventDefault();
        const { cardNumber, cardName, expiryDate, cvv, bankName } = e.target.elements;

        if (!cardNumber.value || !cardName.value || !expiryDate.value || !cvv.value || !bankName.value) {
            alert("Please enter all the details");
            return;
        }

        if (cvv.value.length !== 3) {
            alert("Please enter a valid CVV");
            return;
        }

        // Set the state with the new card details
        setUserCards({
            cardNumber: cardNumber.value,
            cardName: cardName.value,
            expiryDate: expiryDate.value,
            cvv: cvv.value,
            bankName: bankName.value
        });

        // Show an alert with the card details
        alert(`
            Card Number: ${cardNumber.value}
            Card Name: ${cardName.value}
            Expiry Date: ${expiryDate.value}
            CVV: ${cvv.value}
            Bank Name: ${bankName.value}
        `);
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <p className="text-gray-600">Profiles &gt; Add Cards</p>
            <hr className="my-4 border-gray-300" />
            <h1 className="text-3xl font-bold text-center">Add Cards / Debit Cards</h1>

            {/* Form to input card details */}
            <form className="mt-6 space-y-6" onSubmit={addUserCard}>
                <div className="flex flex-col md:flex-row gap-4">
                    <label htmlFor="cardNumber" className="w-full md:w-1/3 text-gray-700 font-medium">Number:</label>
                    <input
                        type="text"
                        className="w-full md:w-2/3 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="Enter your card number"
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <label htmlFor="cardName" className="w-full md:w-1/3 text-gray-700 font-medium">Name:</label>
                    <input
                        type="text"
                        className="w-full md:w-2/3 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        id="cardName"
                        name="cardName"
                        placeholder="Enter your card name"
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <label htmlFor="expiryDate" className="w-full md:w-1/3 text-gray-700 font-medium">Expiry:</label>
                    <input
                        type="text"
                        className="w-full md:w-2/3 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="yyyy-mm format"
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <label htmlFor="cvv" className="w-full md:w-1/3 text-gray-700 font-medium">CVV:</label>
                    <input
                        type="password"
                        className="w-full md:w-2/3 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        id="cvv"
                        name="cvv"
                        placeholder="Enter your CVV"
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <label htmlFor="bankName" className="w-full md:w-1/3 text-gray-700 font-medium">Bank:</label>
                    <input
                        type="text"
                        className="w-full md:w-2/3 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        id="bankName"
                        name="bankName"
                        placeholder="Enter your bank name"
                    />
                </div>
                <button
                    type="submit"
                    className={`bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${styles.changeBtn} ${styles.updateBtn}`}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
