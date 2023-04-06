import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import "../css/ContactPage/Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section>
        <ContactInfo />
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactPage;
