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
  const [changePage, setchangePage] = useState("Edit Profile");

  const gotoEditProfile = () => {
    setchangePage("Edit Profile");
  };

  const gotoMembership = () => {
    setchangePage("Membership");
  };

  const gotoPurchaseHistory = () => {
    setchangePage("Purchase History");
  };

  const gotoCreditDebitCard = () => {
    setchangePage("Credit / Debit Card");
  };

  const viewCards = () => {
    setchangePage("View Credit / Debit Card");
  };

  return (
    <>
      <Navigation />
      <div className="py-20 px-6 md:px-10">
        <div className=" mt-12 md:mt-16">
          <div className="md:flex">
            <div className="w-full md:w-[50%] md:px-10">
              <div className="flex flex-wrap justify-center">
                <div className="md:w-[500px] w-full md:p-2">
                  <div className="bg-white shadow-md rounded-lg p-4">
                    <h4 className="text-xl font-semibold">Edit Profile</h4>
                    <p className="mt-2 text-gray-600">
                      Update your user profile here
                    </p>
                    <a
                      href="#"
                      className={`mt-4 inline-block bg-custom-green text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#0d865f] transition-all duration-300 ${styles.updateBtn} ${styles.changeBtn}`}
                      onClick={gotoEditProfile}
                    >
                      Edit
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-wrap mt-6 justify-center"
                id="PurchaseHistory"
              >
                <div className="md:w-[500px] w-full md:p-2">
                  <div className="bg-white shadow-md rounded-lg p-4">
                    <h4 className="text-xl font-semibold">Purchase History</h4>
                    <p className="mt-2 text-gray-600">
                      View all your total spending's here
                    </p>
                    <a
                      href="#"
                      className={`mt-4 inline-block bg-custom-green text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#0d865f] transition-all duration-300 ${styles.updateBtn} ${styles.changeBtn}`}
                      onClick={gotoPurchaseHistory}
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`md:w-[50%] w-full`}>
              {changePage === "Edit Profile" && (
                <EditProfile user={props.user} />
              )}
              {changePage === "Purchase History" && (
                <PurchaseHistory user={props.user} />
              )}
              {changePage === "View Credit / Debit Card" && <ViewCards />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
