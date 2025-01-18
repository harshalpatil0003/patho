import React, { useState } from "react";
import axios from "axios";
import { Card, Button } from 'flowbite-react'

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
      <h1 id='Contact' className='m-3 text-center text-3xl font-bold lg:text-5xl'>Contact</h1>
      <div className="lg:grid  lg:grid-cols-12">
        <section className="p-7 mb-20 h-32  lg:col-span-5 lg:h-full xl:col-span-6">

          <p className="text-justify  lg:text-xl  " >&emsp; Need assistance or have a question? We're here to help! Whether you’re looking to book a test, understand your results, or learn more about our services, feel free to reach out. Your health is our priority.</p>
          <p className="text-justify  lg:text-xl "> &emsp;Fill out the form beside, and our team will get back to you as soon as possible. For urgent inquiries, please use the contact details provided.</p>

          <Card className="max-w-sm mt-6">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Connect with us
      </h5>
      <p className="font-semibold text-gray-700 dark:text-gray-400">
      Speak to a Representative
      <Button gradientMonochrome="teal" className="font-bold" href="tel:8767887013">Call</Button>
      </p>
      <p className="font-semibold text-gray-700 dark:text-gray-400">Reach Out via Email
      <Button gradientMonochrome="teal" className="" href="mailto:harshalpatilcsn2020@gmail.com">Email</Button>
      </p>
    </Card>

        </section>
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-2 xl:col-span-6 border border-red-600">
          <div className="max-w-xl mt-10 lg:max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} encType="multipart/form-data" className=" grid grid-cols-6 gap-6 ">
              <div className="col-span-6">
                <label htmlFor="name" className="block text-xl font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-[100%] text-xl mt-1 rounded-md border-gray-200 bg-white text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="email" className="block text-xl font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-xl mt-1 w-full rounded-md border-gray-200 bg-white text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="subject" className="block text-xl font-medium text-gray-700">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="text-xl mt-1 w-full rounded-md border-gray-200 bg-white text-gray-700 shadow-sm"
                >
                  <option value="">Select a subject</option>
                  <option value="Booking Assistance">Booking Assistance</option>
                  <option value="Test Information">Test Information</option>
                  <option value="Billing Inquiry">Billing Inquiry</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-span-6">
                <label htmlFor="message" className="block text-xl font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="text-xl mt-1 w-full rounded-md border-gray-200 bg-white text-gray-700 shadow-sm"
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
        </main>

      </div>
    </div >

  );
};

export default ContactForm;