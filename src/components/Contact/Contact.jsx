import React, { useState } from "react";
import Img1 from "../../assets/blog/contact.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "eac23fe1-6496-41dd-a0b1-623f200532c9");

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
          <h1 className="text-6xl font-bold text-white">Explore Our Services</h1>
          <p className="text-xl text-gray-200 mt-4 mb-6">
            Get in Touch With us to elavate your business.
          </p>
          <a
            href="#contact"
            className="bg-[#6153CD] hover:bg-[#5147B8] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            View Contact
          </a>
        </div>
      </div>

      <div id="contact" className="bg-gray-100 w-full dark:bg-gray-900 text-black dark:text-white py-10 px-5 md:px-20">
        <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-6">
          <div className="relative flex flex-col md:flex-row backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-7xl">
            {/* Left Side: Map and Address */}
            <div className="flex-1 md:mr-8 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>

              {/* Map Section */}
              <div id="/contact#contact-form" className="w-full h-64 md:h-96 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.181685950981!2d56.050326374861555!3d25.929258501662236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef6656d56c8fdc3%3A0xce5e9421d77c4fd5!2sRAKEZ%20Al%20Hulaila%20Industrial%20Zone!5e0!3m2!1sen!2sin!4v1738680476139!5m2!1sen!2sin"
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
<p className="text-base sm:text-lg">
  VUPR0816 <br className="sm:hidden" /> 
  Compass building - <span className="whitespace-nowrap">AL Hulaila</span>, 
  <br className="hidden sm:inline" />
  Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates
</p>

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
                    className="w-full p-3 rounded-lg bg-white/20 dark:bg-white/20 placeholder-grey-200 dark:placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full p-3 rounded-lg bg-white/20 dark:bg-white/20 placeholder-grey-200 dark:placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Your Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your number"
                    required
                    className="w-full p-3 rounded-lg bg-white/20 dark:bg-white/20 placeholder-grey-200 dark:placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Write your message..."
                    required
                    className="w-full p-3 rounded-lg bg-white/20 dark:bg-white/20 placeholder-grey-200 dark:placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918925691574"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
      </a>
    </div>
  );
};

export default Contact;