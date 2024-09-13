import { useState } from "react";
import Navigation from "../Navigation";
import EditProfile from "./EditProfile";
import styles from "./UserProfile.module.css";
import Membership from "./Membership";
import Footer from "../Footer";
import PurchaseHistory from "./PurchaseHistory";
import ChangeCards from "./ChangeCards";
import ViewCards from "./ViewCards";

export default function DisplayProfile(props) {
    console.log(props.user);
    // i want state to change to edit profile or membership or purchase history or credit/debit card
    
    const [changePage, setchangePage] = useState("Edit Profile");

    const gotoEditProfile = () => {
        setchangePage("Edit Profile");
    }

    const gotoMembership = () => {
        setchangePage("Membership");
    }

    const gotoPurchaseHistory = () => {
        setchangePage("Purchase History");
    }

    const gotoCreditDebitCard = () => {
        setchangePage("Credit / Debit Card");
    }

    const viewCards = () => {
        setchangePage("View Credit / Debit Card");
    }


    return (
        <>
            <Navigation />
            <br /><br /><br />
            <br />
            <div className="container">
                <h1 className="text-center">User Profile</h1>
                <hr />
                <br />
                <div className="row">
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-6 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Edit Profile</h4>
                                        <p className="card-text">Update your user profile here..</p>
                                        {/* <a href="#" className={`btn btn-primary ${styles.changeBtn}`}>View 👀</a> */}
                                        <a href="#" className={`btn btn-primary ${styles.changeBtn}`} onClick={gotoEditProfile}>Edit ✏️</a>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-6 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Membership</h4>
                                        <p className="card-text">Buy our Membership here..</p>
                                        <a href="#" className={`btn btn-primary ${styles.changeBtn}`} onClick={gotoMembership}>View 👀</a>
                                        <a href="#" className={`btn btn-primary ${styles.changeBtn}`} onClick={gotoMembership}>Edit ✏️</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="row">
                            <div className="col-md-6 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Purchase History</h4>
                                        <p className="card-text">View all your total spending's here..</p>
                                        <a href="#" className={`btn btn-primary ${styles.changeBtn}`} onClick={gotoPurchaseHistory}>View 👀</a>
                                        {/* <a href="#" className={`btn btn-primary ${styles.changeBtn}`}>Edit ✏️</a> */}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-6 my-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Credit / Debit Card</h4>
                                        <p className="card-text">Change your bank details here..</p>
                                        <a href="#" className={`btn btn-primary ${styles.changeBtn}`} onClick={viewCards}>View 👀</a>
                                        <a href="#" className={`btn btn-primary ${styles.changeBtn}`} onClick={gotoCreditDebitCard}>Add ✏️</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full md:w-1/2 p-2">
                            <div className="bg-white shadow-md rounded-lg p-4">
                                <h4 className="text-xl font-semibold">Purchase History</h4>
                                <p className="mt-2 text-gray-600">View all your total spending's here..</p>
                                <a href="#" className={`mt-4 inline-block bg-custom-green text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#0d865f] transition-all duration-300 ${styles.updateBtn} ${styles.changeBtn}`} onClick={gotoPurchaseHistory}>View 👀</a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-2">
                            <div className="bg-white shadow-md rounded-lg p-4">
                                <h4 className="text-xl font-semibold">Credit / Debit Card</h4>
                                <p className="mt-2 text-gray-600">Change your bank details here..</p>
                                <a href="#" className={`mt-4 inline-block bg-custom-green text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#0d865f] transition-all duration-300 ${styles.updateBtn} ${styles.changeBtn}`} onClick={viewCards}>View 👀</a>
                                <a href="#" className={`mt-2 inline-block bg-custom-green text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#0d865f] transition-all duration-300 ${styles.updateBtn} ${styles.changeBtn}`} onClick={gotoCreditDebitCard}>Add ✏️</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`w-full md:w-5/12 right-0 top-0 ${styles.verticleLine}`}>
                    <hr />
                    {/* based on state i want to display the pages */}
                    {changePage === "Edit Profile" && <EditProfile user={props.user}/>}
                    {changePage === "Membership" && <Membership />}
                    {changePage === "Purchase History" && <PurchaseHistory user={props.user} />}
                    {changePage === "Credit / Debit Card" && <ChangeCards />}
                    {changePage === "View Credit / Debit Card" && <ViewCards />}
                </div>
            </div>
          </>  

    );
}
