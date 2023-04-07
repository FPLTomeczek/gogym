import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import "../css/ContactPage/Contact.css";
import SecondaryHero from "../components/SecondaryHero";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <SecondaryHero text="Contact Us" />
      <div className="contact-container">
        <section>
          <ContactInfo />
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
