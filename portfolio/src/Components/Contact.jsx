import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setSuccessMessage(""); // clear success message when user types again
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) tempErrors.email = "Email is required.";
    if (!formData.message.trim()) tempErrors.message = "Message is required.";

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    emailjs
      .sendForm("service_umt1l8j", "template_i28kavi", formRef.current, {
        publicKey: "SrUAVYvg6LHmBMg5E",
      })
      .then(() => {
        setSuccessMessage("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        // Remove message after 5 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSuccessMessage("❌ Something went wrong. Please try again.");

        // Remove error message after 5 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#0f0f0f] border border-gray-800 rounded-[48px] text-white py-16 px-4 flex justify-center items-center mx-auto max-w-5xl mt-15"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Let's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
            Talk
          </span>{" "}
        </h2>
        <p className="text-center text-gray-300 text-lg mb-10">
          Let’s connect and create something bold, functional, and
          unforgettable.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full"
          noValidate
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#0f0f0f] border border-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#0f0f0f] border border-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="w-full">
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#0f0f0f] border border-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-full hover:brightness-110 transition-all duration-300"
            >
              SEND MESSAGE
            </button>
          </div>

          {successMessage && (
            <p className="text-center text-green-500 font-medium mt-4">
              {successMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
