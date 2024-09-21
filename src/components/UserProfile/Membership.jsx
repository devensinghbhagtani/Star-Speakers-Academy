import styles from './UserProfile.module.css';
import { useState } from 'react';

export default function Membership() {

    const [plan, setplan] = useState("Basic plan");

    const getSelectedPlan = (e) => {
        e.preventDefault();
        setplan(e.target.plan.value)
        //  console.log(plan)
    }

    return (
        <div className="container mx-auto px-4">
    <div className="py-4">
        <p className="text-gray-600">Profiles &gt; Membership</p>
        <hr className="my-4 border-gray-300" />
        <h1 className="text-3xl font-bold text-center">Membership</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white hover:bg-[#EAEAEA] transition-all duration-300 shadow-lg rounded-lg p-6 hover:scale-105">
                <h4 className="text-xl font-semibold">Basic Plan</h4>
                <p className="text-gray-700 mt-2">Get access to all the basic courses</p>
                <p className="mt-2 text-gray-600">Yaha tujhe sab free view wala milega</p>
            </div>
            <div className="bg-white hover:bg-[#EAEAEA] transition-all duration-300 shadow-lg rounded-lg p-6 hover:scale-105">
                <h4 className="text-xl font-semibold">Standard Plan</h4>
                <p className="text-gray-700 mt-2">Get access to all the standard courses</p>
                <p className="mt-2 text-gray-600">Middle class afforable hai</p>
            </div>
            <div className="bg-white hover:bg-[#EAEAEA] transition-all duration-300 shadow-lg rounded-lg p-6 hover:scale-105">
                <h4 className="text-xl font-semibold">Premium Plan</h4>
                <p className="text-gray-700 mt-2">Get access to all the premium courses</p>
                <p className="mt-2 text-gray-600">Aukaat ke bahar hai</p>
            </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <form onSubmit={getSelectedPlan} className="mt-4">
            <div className="mb-4">
                <label htmlFor="plan" className="block text-gray-700 font-medium">Select Plan:</label>
                <select className="mt-1 block w-full p-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" id="plan">
                    <option value="Basic plan">Basic Plan</option>
                    <option value="Standard plan">Standard Plan</option>
                    <option value="Premium plan">Premium Plan</option>
                </select>
            </div>
            <button type="submit" className={`mt-4 inline-block bg-custom-green text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#0d865f] transition-all duration-300 ${styles.updateBtn} ${styles.changeBtn}`}>
                Submit
            </button>
        </form>
    </div>
</div>

    )
}