// import React from "react";
// import "./ContactForm.css";
// import { Outlet } from "react-router-dom";

// const Contact = ({ onSubmit }) => {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [message, setMessage] = React.useState("");
//   const [formData, setFormData] = React.useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormData({ name, email, message });
//     // Add your form submission logic here
//     console.log("Form submitted:", formData);
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <>
//     <div className="info">
//           <p>If you have Questions or just want to get in touch, use the form. We look forward to hearing from you!!!!😊</p>
//         </div>
//       <div className="image-container">
//         <img src="https://ideogram.ai/api/images/direct/uv0-VRTiRWiE8hRf7HCunA.jpg" alt="Contact Us" />
        
//         <div className="input-container">
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

//             <label htmlFor="message">Message:</label>
//             <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />

//             <button type="submit">Send</button>
//           </form>
//         </div>
//         <Outlet/>
//       </div></>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import "./ContactForm.css"; // Import the CSS file

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [subject, setSubject] = useState(""); // State for subject line
  const [rating, setRating] = useState(0); // State for rating (0 for no selection)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name, email, message, subject, rating });

    // Replace with your actual form submission logic (e.g., using a form submission service)
    console.log("Form submitted:", formData);
    setFormSubmitted(true); // Indicate successful submission
    setShowSuccessPopup(true);

    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
    setRating(0);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
   
    <div className="contact-container">
      
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Enhance your reading experience! Share your feedback or ask questions – we value your input</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
         
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="">Choose a category...</option>
              <option value="bug-report">Bug Report</option>
              <option value="feature-request">Feature Request</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="form-group rating">
            <label htmlFor="rating">Rate your experience (1-5 stars):</label>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star}>
                  <input
                    type="radio"
                    name="rating"
                    value={star}
                    checked={rating === star}
                    onChange={(e) => setRating(parseInt(e.target.value))}
                  />
                  <span className={star <= rating ? "star-rated" : ""}>&#9733;</span>
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
        {formSubmitted && showSuccessPopup && (
          <div className="success-popup">
            <p className="success-message">
              Thank you for your message! We'll get back to you soon.
            </p>
            <button onClick={closeSuccessPopup}>Close</button>
          </div>
        )}
      </div>
      <div className="contact-image">
        <img
          src="https://ideogram.ai/assets/image/list/response/YWW_NxaHR26VDnMNnwo5Uw"
          alt="Contact Us"
        />
      </div>
    </div>
  );
};

export default Contact;
