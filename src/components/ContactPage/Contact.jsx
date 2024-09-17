import React from "react";
import CommonHero from "../CommonHero";
import ContactDetails from "./ContactDetails";
function Contact() {
  return (
    <>
      <CommonHero heading={"Contact section"} />
      <br /><br />
      <ContactDetails />
    </>
  );
}

export default Contact;
