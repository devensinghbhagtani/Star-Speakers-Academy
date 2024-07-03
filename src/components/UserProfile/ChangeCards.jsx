import React from 'react'
import styles from './UserProfile.module.css';
import { useState } from 'react';

export default function ChangeCards() {

    const [userCards, setUserCards] = useState({})
    const userCard = {
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: "",
    }

    const addUserCard = (e) => {
        e.preventDefault();
        if (!e.target.cardNumber.value || !e.target.cardName.value || !e.target.expiryDate.value || !e.target.cvv.value) {
            alert("Please enter all the details")
            return
        }

        // if (e.target.cardNumber.value.length !== 16) {
        //     alert("Please enter a valid card number")
        //     return
        // }

        if (e.target.cvv.value.length !== 3) {
            alert("Please enter a valid cvv")
            return
        }

        console.log("Adding card..")
        setUserCards({
            cardNumber: e.target.cardNumber.value,
            cardName: e.target.cardName.value,
            expiryDate: e.target.expiryDate.value,
            cvv: e.target.cvv.value,
        })

        console.log(userCards)
    }

    return (
        <div>
            <div className="container">
                <p>Profiles > Add Cards</p>
                <hr />
                <h1 className="text-center">Add Cards / Debit Cards</h1>
                {/* form to input card details */}
                <form className="form-control" onSubmit={addUserCard}>
                    <div className="form-group row my-4">
                        <label htmlFor="cardNumber" className="col-sm-2 col-form-label">Number:</label>
                        <div className="col-sm-10">
                            <input type="text   " className="form-control" id="cardNumber" placeholder="Enter your card number" />
                        </div>
                    </div>
                    <div className="form-group row my-4">
                        <label htmlFor="cardName" className="col-sm-2 col-form-label">Name:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="cardName" placeholder="Enter your card name" />
                        </div>
                    </div>
                    <div className="form-group row my-4">
                        <label htmlFor="expiryDate" className="col-sm-2 col-form-label">Expiry:</label>
                        <div className="col-sm-10">
                            <input type="year" className="form-control" id="expiryDate" placeholder="yyyy-mm format" />
                        </div>
                    </div>
                    <div className="form-group row my-4">
                        <label htmlFor="cvv" className="col-sm-2 col-form-label">CVV:</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" id="cvv" placeholder="Enter your cvv" />
                        </div>
                    </div>
                    <div className="form-group row my-4">
                        <label htmlFor="bankName" className="col-sm-2 col-form-label">Bank:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="bankName" placeholder="Enter your bank name" />
                        </div>
                    </div>
                    <button type="submit" className={`btn btn-primary ${styles.changeBtn} my-2 ${styles.updateBtn}`}>Submit</button>
                </form>

            </div>
        </div>
    )
}
