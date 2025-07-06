"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add API submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Get in touch with us through any of the following channels or fill out the form below.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {[
          {
            label: "Email",
            icon: "fas fa-envelope",
            color: "blue",
            value: "contact@example.com",
            href: "mailto:contact@example.com",
          },
          {
            label: "Phone",
            icon: "fas fa-phone",
            color: "green",
            value: "+1 (234) 567-8900",
            href: "tel:+1234567890",
          },
          {
            label: "WhatsApp",
            icon: "fab fa-whatsapp",
            color: "green",
            value: "Message Us",
            href: "https://wa.me/1234567890",
          },
          {
            label: "LinkedIn",
            icon: "fab fa-linkedin",
            color: "blue",
            value: "Connect with us",
            href: "https://linkedin.com/company/yourcompany",
          },
          {
            label: "Instagram",
            icon: "fab fa-instagram",
            color: "pink",
            value: "Follow us",
            href: "https://instagram.com/yourhandle",
          },
          {
            label: "X (Twitter)",
            icon: "fab fa-x-twitter",
            color: "gray",
            value: "Follow us",
            href: "https://x.com/yourhandle",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div
              className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <i className={`${item.icon} text-2xl text-${item.color}-600`}></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.label}
            </h3>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-${item.color}-600 hover:text-${item.color}-800 transition-colors`}
            >
              {item.value}
            </a>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="flex justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 relative">
          {/* Cancel Button */}
          <button
            className="absolute top-4 right-4 text-purple-700 hover:text-purple-900 transition"
            onClick={() => window.history.back()}
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <h2 className="text-3xl font-bold text-purple-700 text-center mb-6 mt-2">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="block w-full px-4 py-3 text-gray-800 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-purple-500 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3.5 
                peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 left-2"
              >
                Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="block w-full px-4 py-3 text-gray-800 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-purple-500 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3.5 
                peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 left-2"
              >
                Email
              </label>
            </div>

            {/* Message Input */}
            <div className="relative">
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="block w-full px-4 py-3 text-gray-800 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="message"
                className="absolute text-sm text-purple-500 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3.5 
                peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 left-2"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
