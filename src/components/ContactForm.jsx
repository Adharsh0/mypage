import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContractForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailStatus("");

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`, // Combine first and last name
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
      to_name: "Adharsh",
    };

    emailjs
      .send(
        "service_v7yxncf", // Service ID
        "template_8ggh0o7", // Template ID
        templateParams,
        "6W6q0q44srJqVQkxS" // User ID
      )
      .then(
        () => {
          setIsSubmitting(false);
          setEmailStatus("The message has been successfully sent to Adharsh!");
          setFormData({ firstName: "", lastName: "", email: "", mobile: "", message: "" });
        },
        (error) => {
          setIsSubmitting(false);
          setEmailStatus("Failed to send email. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div id="contact" className="contact-form-container">
      <div className="contact-info">
        <h3>Contact Info</h3>
        <p>Alappuzha, India</p>
        <p>adarshudayakumar30@gmail.com</p>
        <p>+91 7907605176</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="http://4.bp.blogspot.com/-Rm3giw7mj_8/VQLP1ZWAVwI/AAAAAAAAXw0/WPoJhWJu_aY/s1600/facebook-iOS-icon.png"  />
          </a>
          <a href="https://github.com/Adharsh0" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-dpporae2.png"  />
          </a>
          <a href="https://www.instagram.com/__.adharsh.____/profilecard/?igsh=ZzRjcGMzOXFkZGFk" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="https://cdn.pixabay.com/photo/2021/06/15/12/17/instagram-6338401_1280.png"  />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/pinterest-1024.png"  />
          </a>
          <a href="https://www.linkedin.com/in/adharsh-udayakumar-4b6a39255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="http://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png"  />
          </a>
        </div>
      </div>
      <div className="send-message-form">
        <h3>Send a Message</h3>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Write Your Message Here"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
        {emailStatus && (
          <p
            className={`email-status ${
              emailStatus.includes("Failed") ? "error" : "success"
            }`}
          >
            {emailStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
