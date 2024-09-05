import styles from './UserProfile.module.css';
import { useState } from 'react';
import axios from 'axios';

export default function EditProfile(props) {
    console.log(props.user);
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

    async function sendupdatedetails(data) {
        console.log(data);
        const url = 'http://localhost:8081/masterclass/updateuserdetails';
        try {
            const response = await axios.post(url, data, {withCredentials: true},{
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data.userData);
        } catch (error) {
            console.error('Error sending course data:', error);
        }
    }

    const updateDetails = (e) => {
        e.preventDefault();
        // check if the user has entered all the details
        // if (!e.target.name.value || !e.target.dob.value || !e.target.phone.value || !e.target.email.value || !e.target.link.value || !e.target.gender.value || !e.target.address.value) {
        //     alert("Please enter all the details")
        //     return
        // }

        // check if the user has entered the correct mobile number
        const formdata=new FormData(e.target)
        sendupdatedetails({
            email: props.user.email.S,
            name: formdata.get('name'),
            phone: formdata.get('phone'),
        })
        if (e.target.phone.value.length !== 10) {
            alert("Please enter a valid mobile number")
            return
        }
        // if (e.target.gender.value !== "Male" || e.target.gender.value !== "Female") {
        //     alert("Please enter a valid gender")
        //     return
        // }

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
            <p>{"Profiles >  Edit"}</p>
            <hr />
            <h1 className='text-center'>Edit Profile</h1>
            <form className="form-control" onSubmit={updateDetails}>
                <div className="form-group row my-4">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" name='name' id="name" placeholder={props.user && props.user.Name && props.user.Name.S ? props.user.Name.S : 'Enter your name'} />
                    </div>
                </div>
                {/* <div className="form-group row my-4">
                    <label htmlFor="dob" className="col-sm-2 col-form-label">DOB</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" id="dob" placeholder="Enter your date of birth" />
                    </div>
                </div> */}
                <div className="form-group row my-4">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="phone" placeholder={props.user && props.user.phone && props.user.phone.S ? props.user.phone.S : 'Enter your phone'} name='phone'/>
                    </div>
                </div>
                <div className="form-group row my-4">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" disabled className="form-control" id="email" placeholder={props.user && props.user.email && props.user.email.S ? props.user.email.S : 'Enter your email'} />
                    </div>
                </div>
                {/* <div className="form-group row my-4">
                    <label htmlFor="link" className="col-sm-2 col-form-label">Link</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="link" placeholder="Enter your link" />
                    </div>
                </div> */}
                {/* <div className="form-group row my-4">
                    <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>
                    <div className="col-sm-10">
                        <select className="form-control" id="gender">
                            <option value="" disabled>Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                    </div>
                </div> */}
                {/* <div className="form-group row my-4">
                    <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="address" placeholder="Enter your address: "></textarea>
                    </div>
                </div> */}
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
