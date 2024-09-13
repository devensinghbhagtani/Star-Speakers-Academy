import React from 'react';
import styles from './UserProfile.module.css'; // Assuming you might have some specific styles in this file

export default function ViewCards() {

    const cards = [
        {
            cardNumber: "1234 5678 9101 1121",
            cardName: "John Doe",
            bankName: "Bank of America",
            expiryDate: "12/23",
            cvv: "123"
        },
        {
            cardNumber: "1234 5678 9101 1121",
            cardName: "John Doe",
            bankName: "Bank of America",
            expiryDate: "12/23",
            cvv: "123"
        },
        {
            cardNumber: "1234 5678 9101 1121",
            cardName: "John Doe",
            bankName: "Bank of America",
            expiryDate: "12/23",
            cvv: "123"
        },
        // Add more card objects as needed
    ];

    const renderCard = (card, index) => {
        return (
            <div className=" bg-white rounded-xl shadow-md overflow-hidden my-4 w-full px-10" key={index}>
    <div className="md:block">
        <div className="p-10">
            <div className="flex justify-between mb-2">
                <div>
                    <h4 className="text-xl font-bold mb-2">Card Number</h4>
                    <p className="text-gray-700 text-base">{card.cardNumber}</p>
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-2">Card Name</h4>
                    <p className="text-gray-700 text-base">{card.cardName}</p>
                </div>
            </div>
            <div className="flex justify-between mb-2">
                <div>
                    <h4 className="text-xl font-bold mb-2">Bank Name</h4>
                    <p className="text-gray-700 text-base">{card.bankName}</p>
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-2">Expiry Date</h4>
                    <p className="text-gray-700 text-base">{card.expiryDate}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <h4 className="text-xl font-bold mb-2">CVV</h4>
                    <p className="text-gray-700 text-base">{card.cvv}</p>
                </div>
            </div>
        </div>
    </div>
</div>
        )
    }

    return (
        <div>
            <div className="container">
                <p>{"Profiles > View Cards"}</p>
                <hr />
                <h1 className="text-center">View Cards / Debit Cards</h1>
                <div className={`${styles.displayHistory} row`}>
                    {renderContent()}
                </div>

            </div>
        </div>
    )
}
