'use client'
import React from "react";
import { FaInstagram, FaMailBulk } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import {} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-50 h-1/2 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around items-start p-20">
        <div className="p-5">
          <ul>
            <li className="text-gray-800 font-bold text-3xl pb-6 animate-bounce">
              CONTACT <span className="text-blue-600">US</span>
            </li>

            <div>
              <ul>
                <li>
                  
                    <a className="text-m">
                      <FaSearchLocation className="text-xl cursor-pointer" />
                      Makumbusho Stand, Kijitonyama <br />
                      Dar es Salaam, Tanzania
                    </a>
                  
                </li>
                <li>
                  
                    <a className="text-m">
                      <FaPhone className="text-xl cursor-pointer" />
                      +255 754 323 365
                    </a>
                
                </li>
                <li>
                  
                    <a className="text-m">
                      <FaGoogle className="text-xl cursor-pointer" />
                      adamandrea43@yahoo.com
                    </a>
                  
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <h2 className="text-bold font-bold text-xl ">ACCOUNTS</h2>
            <hr />
            <li className="list-disc text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <a href="#">My Wishlist</a>
            </li>
            <li className="list-disc text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <a href="#">My Cart</a>
            </li>
            <li className="list-disc text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <a href="#">Sign in</a>
            </li>
            <li className="list-disc text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <a href="#">Check out</a>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <h2 className="text-bold font-bold text-xl">SHIPPING</h2>
            <hr />
            <li className="list-disc text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <a href="#">New Products</a>
            </li>
            <li className="list-disc text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <a href="#">Top Sellers</a>
            </li>
            <li className="list-disc text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <a href="#">Manufacturers</a>
            </li>
            <li className="list-disc text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <a href="#">Suppliers</a>
            </li>
            <li className="list-disc text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
              <a href="#">Specials</a>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <h2 className="text-bold font-bold text-xl">EMAIL NEWSLETTER</h2>
            <hr />
            <br />
            <li className="">
              <form action="#">
                <label htmlFor="email"></label>
                <input
                  className="form-control
        block
        w-full
        px-5
        py-2.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                />
                <br />
                <hr />
                <button
                  className=" text-white font-bold py-2 px-4 rounded bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </li>
          </ul>
        </div>
        <hr />
      </div>

      <div className="grid flex-row w-[50] justify-center items-center">
        <div className="flex gap-6">
          <>
           
              <a className="text-m">
                <FaGoogle className="text-2xl cursor-pointer hover:text-blue-600" />
              </a>
            
          </>
          <>
            
              <a className="text-m">
                <FaInstagram className="text-2xl cursor-pointer hover:text-purple-600" />
              </a>
           
          </>
          <>
           
              <a className="text-m">
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              </a>
           
          </>
          <>
            
              <a className="text-m">
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
              </a>
            
          </>
          <>
            
              <a className="text-m">
                <FaLinkedin className="text-2xl cursor-pointer hover:text-yellow-600" />
              </a>
           
          </>
          <>
            
              <a className="text-m">
                <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
              </a>
           
          </>
          <>
            
              <a className="text-m">
                <FaTelegram className="text-2xl cursor-pointer hover:text-blue-600" />
              </a>
         
          </>
          <>
           
              <a className="text-m">
                <FaWhatsapp className="text-2xl cursor-pointer hover:text-green-600" />
              </a>
         
          </>
          <>
            
              <a className="text-m">
                <FaTiktok className="text-2xl cursor-pointer hover:text-black-600" />
              </a>
           
          </>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
