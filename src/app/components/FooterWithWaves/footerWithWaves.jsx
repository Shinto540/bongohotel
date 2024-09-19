import React from "react";
import './FooterWithWaves.css'; // Include the custom CSS for animations
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";



const FooterWithWaves = () => {
  return (
    <footer className="bg-blue-400 text-white pt-4">

      {/* Wavy SVG at the top */}
      <div className="p-0">
      <svg
          className="waves w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              href="#gentle-wave"
              className="fill-blue-500"
              style={{ animationDuration: "7s" }}
            />
            <use
              href="#gentle-wave"
              className="fill-blue-400"
              style={{ animationDuration: "10s" }}
            />
            <use
              href="#gentle-wave"
              className="fill-blue-300"
              style={{ animationDuration: "13s" }}
            />
            <use
              href="#gentle-wave"
              className="fill-blue-200"
              style={{ animationDuration: "20s" }}
            />
          </g>
        </svg>
      </div>
      <div className="absolute top-0 w-full overflow-hidden leading-none">
      </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-10">
        {/* About Us and Contact Info */}
        <div>
          <h5 className="font-bold text-lg mb-4">About Us</h5>
          <p className="text-gray-300">
            We offer top-notch hotel booking services globally, ensuring that
            your stay is as comfortable and stress-free as possible.
          </p>
          <p className="mt-4 text-gray-300">Contact Us:</p>
          <p className="text-gray-300">Phone: +1 (800) 123-4567</p>
          <p className="text-gray-300">Email: info@hotelbooking.com</p>
          <p className="text-gray-300">Address: 123 Main Street, City, Country</p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-bold text-lg mb-4">Quick Links</h5>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-300 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/rooms" className="text-gray-300 hover:underline">
                Rooms & Rates
              </a>
            </li>
            <li>
              <a href="/locations" className="text-gray-300 hover:underline">
                Locations
              </a>
            </li>
            <li>
              <a href="/blog" className="text-gray-300 hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/faq" className="text-gray-300 hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Legal and Social Media */}
        <div>
          <h5 className="font-bold text-lg mb-4">Legal & Policies</h5>
          <ul className="space-y-2">
            <li>
              <a href="/terms" className="text-gray-300 hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-gray-300 hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/refund" className="text-gray-300 hover:underline">
                Refund & Cancellation Policy
              </a>
            </li>
          </ul>

          <h5 className="font-bold text-lg mt-8 mb-4">Follow Us</h5>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="text-gray-300 hover:text-white text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="text-gray-300 hover:text-white text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-gray-300 hover:text-white text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-gray-300 hover:text-white text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-700 py-6">
        <div className="container mx-auto text-center">
          <h5 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h5>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg w-full max-w-xs"
            />
            <button className="bg-white text-blue-800 px-6 py-2 rounded-r-lg hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>


      {/* Footer copyright */}
      <div className="text-center py-3 bg-blue-800">
        <h7>© 2024 Copyright: </h7>
        <a href="https://discord.gg/uRqH5UT" className="text-white">
          E-wallet Africa Ltd
        </a>
      </div>
    </footer>
  );
};

export default FooterWithWaves;
