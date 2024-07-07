import React from 'react'
import styles from './UserProfile.module.css';
import { useState } from 'react';

export default function PurchaseHistory() {

    const [purchaseHistories, setPurchaseHistory] = useState({})
    const purchaseHistory = {
        courseName: "",
        courseDesc: "",
        duration: "",
        price: "",
    }

    const purchases = [
        {
            courseName: "Beginner's Guide to Python",
            courseDesc: "Learn Python from scratch",
            duration: "2 months",
            price: "$100"
        },
        {
            courseName: "Beginner's Guide to Java",
            courseDesc: "Learn Java from scratch",
            duration: "2 months",
            price: "$100"
        },
        {
            courseName: "Beginner's Guide to C++",
            courseDesc: "Learn C++ from scratch",
            duration: "2 months",
            price: "$100"
        },
        {
            courseName: "Beginner's Guide to C",
            courseDesc: "Learn C from scratch",
            duration: "2 months",
            price: "$100"
        },
        {
            courseName: "Beginner's Guide to JavaScript",
            courseDesc: "Learn JavaScript from scratch",
            duration: "2 months",
            price: "$100"
        },
    ]

    const renderContent = () => {
        return purchases.map((purchase, index) => {
            return (
                <div className="row" key={index}>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src='../../../assets/Gallery/pfp2.png' className={`img-fluid rounded-start ${styles.imgCard}`} alt='Example' />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">{purchase.courseName}</h4>
                                    <p className="card-text">{purchase.courseDesc}</p>
                                    <p className="card-text"><small className="text-body-secondary">{purchase.duration}</small></p>
                                    <p className="card-text"><i><b>{purchase.price}</b></i></p>
                                </div>
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
                <p>Profiles > Purchase History</p>
                <hr />
                <h1 className="text-center">Purchase History</h1>
                <div className={`${styles.displayHistory}`}>
                    <div className="row">
                        {renderContent()}
                        {/* <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src='../../../assets/Gallery/pfp2.png' className={`img-fluid rounded-start ${styles.imgCard}`} alt='Example' />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title">Course Name</h4>
                                        <p className="card-text">Course DESC.</p>
                                        <p className="card-text"><small className="text-body-secondary">Duration</small></p>
                                        <p className="card-text"><i><b>$100</b></i></p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
