import React from 'react';
import styles from './UserProfile.module.css';


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
        {
            cardNumber: "1234 5678 9101 1121",
            cardName: "John Doe",
            bankName: "Bank of America",
            expiryDate: "12/23",
            cvv: "123"
        },
    ]

    const renderContent = () => {
        return cards.map((card, index) => {
            return (
                <div className="row" key={index}>
                    <div className="col-md-12">
                        <div className="card mb-3">
                            {/* display details */}
                            <div className="card-body">
                                <h4 className="card-title">Card Number: {card.cardNumber}</h4>
                                <p className="card-text">Card Name: {card.cardName}</p>
                                <p className='card-text'>Bank Name: {card.bankName}</p>
                                <p className="card-text">Expiry Date: {card.expiryDate}</p>
                                <p className="card-text">CVV: {card.cvv}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
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