import styles from './UserProfile.module.css';
import { useState } from 'react';

export default function EditProfile() {

    const [userDetail, setUserDetails] = useState({})

    const userDetails = {
        name: "",
        dob: "",
        phone: "",
        email: "",
        link: "",
        gender: "",
        address: "",
    }

    const updateDetails = (e) => {
        e.preventDefault();
        // check if the user has entered all the details
        // if (!e.target.name.value || !e.target.dob.value || !e.target.phone.value || !e.target.email.value || !e.target.link.value || !e.target.gender.value || !e.target.address.value) {
        //     alert("Please enter all the details")
        //     return
        // }

        // check if the user has entered the correct mobile number
        if (e.target.phone.value.length !== 10) {
            alert("Please enter a valid mobile number")
            return
        }
        // check if the user has entered the correct gender 
        if (e.target.gender.value !== "Male" || e.target.gender.value !== "Female") {
            alert("Please enter a valid gender")
            return
        }

        console.log("Updating details..")

        setUserDetails({
            name: e.target.name.value,
            dob: e.target.dob.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            link: e.target.link.value,
            gender: e.target.gender.value,
            address: e.target.address.value,
        })
        console.log(userDetail)
    }

    return (
        <div className='container'>
            <p>Profiles > Edit</p>
            <hr />
            <h1 className='text-center'>Edit Profile</h1>
            <form className="form-control" onSubmit={updateDetails}>
                <div className="form-group row my-4">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                </div>
                <div className="form-group row my-4">
                    <label htmlFor="dob" className="col-sm-2 col-form-label">DOB</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" id="dob" placeholder="Enter your date of birth" />
                    </div>
                </div>
                <div className="form-group row my-4">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="phone" placeholder="Enter your phone" />
                    </div>
                </div>
                <div className="form-group row my-4">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                </div>
                <div className="form-group row my-4">
                    <label htmlFor="link" className="col-sm-2 col-form-label">Link</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="link" placeholder="Enter your link" />
                    </div>
                </div>
                <div className="form-group row my-4">
                    <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="gender" placeholder="Enter your gender: " />
                    </div>
                </div>
                <div className="form-group row my-4">
                    <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="address" placeholder="Enter your address: "></textarea>
                    </div>
                </div>
                <hr />
                <div className="form-group row my-4">
                    <div className="col-sm-10">
                        <button type="submit" className={`btn btn-primary ${styles.updateBtn} ${styles.changeBtn}`}>Update</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
