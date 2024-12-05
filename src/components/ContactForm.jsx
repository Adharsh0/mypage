import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContractForm.css"; // Include the CSS file for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState("");

  // Handle form data changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailStatus(""); // Reset status message on new submit

    // Explicitly pass the required fields to the template
    const templateParams = {
      from_name: formData.name,  // Name of the sender
      to_name: "Adharsh",        // Recipient's name (you can replace with the actual recipient name)
      message: formData.message, // The message from the form
      email: formData.email,     // The sender's email (optional, depending on template)
    };

    emailjs
      .send(
        "service_v7yxncf", // Your EmailJS Service ID
        "template_8ggh0o7", // Your EmailJS Template ID
        templateParams,     // Passing the templateParams with the form data
        "6W6q0q44srJqVQkxS" // Your EmailJS Public Key
      )
      .then(
        () => {
          setIsSubmitting(false);
          setEmailStatus("The Message has been successfully sent to Adharsh!");
          setFormData({ name: "", email: "", message: "" }); // Reset form fields after successful submission
        },
        (error) => {
          setIsSubmitting(false);
          setEmailStatus("Failed to send email. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div id="contact" className="contact-form">
      <h3>Contact Me</h3>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
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
  );
};

export default ContactForm;
