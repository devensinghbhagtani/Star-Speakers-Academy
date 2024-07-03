import styles from './UserProfile.module.css';
import { useState } from 'react';

export default function Membership() {

    const [plan, setplan] = useState("Basic plan");

    const getSelectedPlan = (e) => {
        e.preventDefault();
        setplan(e.target.plan.value)
        console.log(plan)
    }

    return (
        <div>
            <div className="container">
                <p>Profiles > Membership</p>
                <hr />
                <h1 className="text-center">Membership</h1>

                <div className="row">
                    <div className="col-md-4">
                        <div className={`card ${styles.planCard}`}>
                            <div className="card-body">
                                <h4 className="card-title">Basic Plan</h4>
                                <p className="card-text">Get access to all the basic courses</p>
                                <p>Yaha tujhe sab free view wala milega</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${styles.planCard}`}>
                            <div className="card-body">
                                <h4 className="card-title">Standard Plan</h4>
                                <p className="card-text">Get access to all the standard courses</p>
                                <p>Middle class afforable hai</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${styles.planCard}`}>
                            <div className="card-body">
                                <h4 className="card-title">Premium Plan</h4>
                                <p className="card-text">Get access to all the premium courses</p>
                                <p>Aukaat ke bahar hai</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='my-3' />
                <form onSubmit={getSelectedPlan}>
                    <div className="form-group">
                        <label htmlFor="plan">Select Plan:</label>
                        <select className="form-control my-3" id="plan">
                            <option value={"Basic plan"}>Basic Plan</option>
                            <option value={"Standard plan"}>Standard Plan</option>
                            <option value={"Premium plan"}>Premium Plan</option>
                        </select>
                    </div>
                    <button type="submit" className={`btn btn-primary ${styles.changeBtn} my-2 ${styles.updateBtn}`}>Submit</button>
                </form>
            </div>
        </div>
    )
}