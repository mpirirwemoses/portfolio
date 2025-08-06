"use client";

import React, { useState } from "react";
import { X, Mail, Phone, Linkedin, Instagram, MessageCircle, Send, Smartphone } from "lucide-react";
import Navbar from "./Navbar";
import image67 from "../assets/images/developer_setup_grayscale.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(""); // "success" | "error"
    const [success, setSuccess] = useState(false); // "success" | "error"
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: "a582f06f-73be-4c90-b026-ccfde08d6d72", // Get from Web3Forms
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
  
        const data = await response.json();
        if (data.success) {
          setSubmitStatus("success");
          setFormData({ name: "", phone: "", message: "" }); // Reset form
          setSuccess(true);
        } else {
          setSubmitStatus("error");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(""), 4000); // Reset status after 4s
      }
    };

  const contactMethods = [
    {
      label: "Email",
      icon: <Mail className="w-7 h-7 text-blue-600" />,
      color: "from-blue-100 to-blue-200",
      value: "mpirirwemoses2@gmail.com",
      href: "mailto:mpirirwemoses2@gmail.com",
    },
    {
      label: "Phone",
      icon: <Smartphone className="w-7 h-7 text-green-600" />,
      color: "from-green-100 to-green-200",
      value: "+(256) 758295130",
      href: "tel:+256758595130",
    },
    {
      label: "WhatsApp",
      icon: <MessageCircle className="w-7 h-7 text-green-600" />,
      color: "from-green-100 to-green-200",
      value: "Message Us",
      href: "https://wa.me/+256758295130",
    },
    {
      label: "LinkedIn",
      icon: <Linkedin className="w-7 h-7 text-blue-600" />,
      color: "from-blue-100 to-blue-200",
      value: "Connect with us",
      href: "https://linkedin.com/in/mpirirwe-moses-989a72301/",
    },
    {
      label: "Instagram",
      icon: <Instagram className="w-7 h-7 text-pink-500" />,
      color: "from-pink-100 to-pink-200",
      value: "Follow us",
      href: "https://instagram.com/mortzy289/",
    },
    {
      label: "X (Twitter)",
      icon: <X className="w-7 h-7 text-gray-600" />,
      color: "from-gray-100 to-gray-200",
      value: "Follow us",
      href: "https://x.com/MMpirirwe67599",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-blue-900 to-pink-700 py-12 px-4 flex flex-col justify-center">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Contact Me</h1>
          <p className="text-lg text-purple-100">I'd love to hear from you! Reach out through any channel or send a message below.</p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
          {contactMethods.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-gradient-to-br ${item.color} rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex flex-col items-center`}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/70 mb-4 shadow-lg group-hover:bg-white/90 transition">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h3>
              <span className="text-lg text-blue-900 group-hover:text-purple-700 font-semibold">{item.value}</span>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl relative rounded-2xl shadow-2xl p-8 bg-white/30 backdrop-blur-md border border-white/40">
            {/* Cancel Button */}
            <button
              className="absolute top-4 right-4 text-purple-700 hover:text-purple-900 transition"
              onClick={() => window.history.back()}
              aria-label="Close"
            >
              <X size={28} />
            </button>

            <h2 className="text-3xl font-bold text-purple-800 text-center mb-6 mt-2 drop-shadow">Send a Message</h2>

            {success && (
              <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-800 text-center font-semibold animate-fade-in">
                Thank you! Your message has been sent.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
        type="hidden"
        name="access_key"
        value="a582f06f-73be-4c90-b026-ccfde08d6d72" // Same as above
      />
             
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="block w-full px-4 py-3 text-gray-900 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/80 placeholder-transparent peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute text-sm text-purple-700 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white/80 px-2 
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
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full px-4 py-3 text-gray-900 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/80 placeholder-transparent peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-purple-700 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white/80 px-2 
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
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="block w-full px-4 py-3 text-gray-900 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/80 placeholder-transparent peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute text-sm text-purple-700 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white/80 px-2 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3.5 
                peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 left-2"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:via-blue-700 hover:to-pink-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 flex items-center justify-center gap-2 text-lg font-semibold shadow-lg"
              >
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
