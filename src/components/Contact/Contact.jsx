import React, { useState } from "react";
import "./Contact.css";
import { MdOutlineMessage } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handlewhatsapp = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const phonenum = 919562465095;
    const text = encodeURIComponent(
      `Hello, my name is ${name}\nEmail: ${email}\nMessage: ${message}`,
    );

    window.open(`https://wa.me/${phonenum}?text=${text}`, "_blank");
  };

  return (
    <div className="contact-container">
      <span className="getinTouch">get in touch</span>
      <h1>
        Contact <span className="me">Me</span>
      </h1>
      <p className="contact-Para">
        Let’s collaborate to build something amazing. <br />
        I'm always open to new ideas and challenges.
      </p>
      <form onSubmit={handlewhatsapp} className="contact-form">
        <div className="input-box-wrapper">
          <label htmlFor="name">Full Name</label>
          <input
            value={formData.name}
            type="text"
            id="name"
            placeholder="Enter name"
            onChange={handleChange}
          />
        </div>
        <div className="input-box-wrapper">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            value={formData.email}
            id="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="input-box-wrapper">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            value={formData.message}
            id="message"
            placeholder="Enter message"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Send Message </button>
      </form>
    </div>
  );
};

export default Contact;
