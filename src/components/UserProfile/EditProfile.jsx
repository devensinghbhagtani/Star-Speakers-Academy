import styles from "./UserProfile.module.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function EditProfile(props) {
  //  console.log(props.user);
  const [userDetail, setUserDetails] = useState({});

  const userDetails = {
    name: "",
    dob: "",
    phone: "",
    email: "",
    link: "",
    gender: "",
    address: "",
  };

  async function sendupdatedetails(data) {
    //  console.log(data);
    const url = `${
      import.meta.env.VITE_SERVER_URL
    }/masterclass/updateuserdetails`;
    try {
      const response = await axios.post(
        url,
        data,
        { withCredentials: true },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //  console.log(response.data.userData);
      Swal.fire({
        title: "Success",
        text: "Details updated successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error sending course data:", error);
    }
  }

  const updateDetails = (e) => {
    e.preventDefault();

    // check if the user has entered the correct mobile number
    const formdata = new FormData(e.target);
    sendupdatedetails({
      email: props.user.email.S,
      name: formdata.get("name"),
      phone: formdata.get("phone"),
    });
    if (e.target.phone.value.length !== 10) {
      // alert("Please enter a valid mobile number")
      Swal.fire({
        title: "Error",
        text: "Please enter a valid mobile number",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    setUserDetails({
      name: e.target.name.value,
      dob: e.target.dob.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      link: e.target.link.value,
      gender: e.target.gender.value,
      address: e.target.address.value,
    });
  };

  return (
    <div className="md:border-l-2 py-10 md:p-10">
      <h1 className="text-2xl font-semibold pl-0 mb-6">Edit Profile</h1>
      <form className="space-y-6" onSubmit={updateDetails}>
        <div className="flex flex-wrap items-center mb-4">
          <label
            htmlFor="name"
            className="w-full md:w-1/3 text-md  text-gray-700"
          >
            Name
          </label>
          <div className="w-full md:w-2/3">
            <input
              type="text"
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              name="name"
              id="name"
              required
              placeholder={
                props.user && props.user.Name && props.user.Name.S
                  ? props.user.Name.S
                  : "Enter your name"
              }
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center mb-4">
          <label
            htmlFor="phone"
            className="w-full md:w-1/3 text-md  text-gray-700"
          >
            Phone
          </label>
          <div className="w-full md:w-2/3">
            <input
              type="text"
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              id="phone"
              required
              placeholder={
                props.user && props.user.phone && props.user.phone.S
                  ? props.user.phone.S
                  : "Enter your phone"
              }
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <label
            htmlFor="email"
            className="w-full md:w-1/3 text-md  text-gray-700"
          >
            Email
          </label>
          <div className="w-full md:w-2/3">
            <input
              type="email"
              disabled
              className="block w-full p-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed shadow-sm"
              id="email"
              placeholder={
                props.user && props.user.email && props.user.email.S
                  ? props.user.email.S
                  : "Enter your email"
              }
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className={`bg-custom-green text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#0d865f] transition-all duration-300 ${styles.updateBtn} ${styles.changeBtn}`}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
