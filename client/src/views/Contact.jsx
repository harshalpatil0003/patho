import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [attachment, setAttachment] = useState(null);
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    if (attachment) {
      formDataToSend.append("attachment", attachment);
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Form submitted successfully!");
      console.log(response.data);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setAttachment(null);
    } catch (error) {
      toast.error("Error submitting the form. Please try again.");
      console.error(error);
    } finally {
      setStatus("");
    }
  };

  return (
    <div className="contact-form">
      <h1 id='Contact' className='m-3 text-center text-3xl font-bold lg:text-5xl mt-10'>Contact</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select a subject</option>
            <option value="Booking Assistance">Booking Assistance</option>
            <option value="Test Information">Test Information</option>
            <option value="Billing Inquiry">Billing Inquiry</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="attachment">Attachment (Optional)</label>
          <input
            type="file"
            id="attachment"
            name="attachment"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Submit</button>
        <p>{status}</p>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
      />
    </div>
  );
};

export default ContactForm;