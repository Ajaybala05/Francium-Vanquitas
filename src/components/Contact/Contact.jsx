import React, { useState } from "react";
import Img1 from "../../assets/blog/contact.jpg";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9a437efb-0a02-4033-9949-25de57f497b5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSuccessMessage("Thank you! Your message has been sent.");
      event.target.reset(); // Clear the form after submission
    } else {
      setSuccessMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-center">
        <img
          src={Img1}
          alt="Services Header"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center p-5">
          <h1 className="text-6xl font-bold">Explore Our Services</h1>
          <p className="text-xl text-gray-400 mt-4 mb-6">
            Unlock your business potential with our expert solutions.
          </p>
          <a
            href="#services"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            View Services
          </a>
        </div>
      </div>

      <div className="bg-gray-100 w-full dark:bg-gray-900 text-black dark:text-white py-10 px-5 md:px-20">
        <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-6">
          <div className="relative flex flex-col md:flex-row backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-7xl">
            {/* Left Side: Map and Address */}
            <div className="flex-1 md:mr-8 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>

              {/* Map Section */}
              <div className="w-full h-64 md:h-96 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7919629566036!2d80.07288927454778!3d13.0489101131797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261c68a9f3031%3A0xab41c8bdcf32ad47!2sPanimalar%20Engineering%20College!5e0!3m2!1sen!2sin!4v1738239267984!5m2!1sen!2sin"
                  className="w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold">Our Office</h3>
                <p className="text-lg">123 Business Street, City, Country</p>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

              {successMessage && (
                <p className="text-green-500 text-center mb-4">{successMessage}</p>
              )}

              <form className="space-y-5" onSubmit={onSubmit}>
                <div>
                  <label className="block text-sm mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full p-3 rounded-lg bg-white/20 dark:bg-white/20 placeholder-black dark:placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full p-3 rounded-lg bg-white/20 dark:bg-white/20 placeholder-black dark:placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Your Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your number"
                    required
                    className="w-full p-3 rounded-lg bg-white/20 dark:bg-white/20 placeholder-black dark:placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Write your message..."
                    required
                    className="w-full p-3 rounded-lg bg-white/20 dark:bg-white/20 placeholder-black dark:placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Contact;
