import React from 'react'

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { SiMessenger } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className='text-[#AD8742] bg-black py-12'>
        <div className='container grid md:grid-cols-5 gap-6'>
          <div>
            <div className='w-28'><img className='w-full' src="https://mymavenedu.com/wp-content/uploads/2020/07/maven_logo-2.png" alt="logo" />
            <div className=' grid grid-cols-5 g-2 text-xl py-6'>
              <FaFacebookSquare className='inline-flex' />
              <FaLinkedin className='inline-flex' />
              <FaSquareInstagram className='inline-flex' />
              <FaSquareYoutube className='inline-flex' />
              <SiMessenger className='inline-flex' />
            </div>
          </div>
          </div>
          <div>
            <h6 className='text-lg font-bold uppercase py-4'>Australia (H/O)</h6>
            <ul className='text-xs md:text-sm grid gap-4'>
              <li><MdLocationOn className='inline-flex' /> Suite 1, Level 2, 85 Queen Street, Melbourne 3000</li>
              <li><FaPhone className='inline-flex' /> +61 3 9602 5683</li>
              <li><FaTelegramPlane className='inline-flex' /> admissions@mymavenedu.com</li>
            </ul>
          </div>
          <div>
            <h6 className='text-lg font-bold uppercase py-4'>Nepal (H/O)</h6>
            <ul className='text-xs md:text-sm grid gap-4'>
              <li><MdLocationOn className='inline-flex' /> Suite 1, Level 2, 85 Queen Street, Melbourne 3000</li>
              <li><FaPhone className='inline-flex' /> +61 3 9602 5683</li>
              <li><FaTelegramPlane className='inline-flex' /> admissions@mymavenedu.com</li>
            </ul>
          </div>
          <div className='text-stone-300/90'>
            <h6 className='text-lg font-bold uppercase py-4'>Quick Links</h6>
            <ul className='text-xs grid gap-4'>
              <li>Company Profile</li>
              <li>Corporate Social Responsibility</li>
              <li>Become Our Franchise Partner</li>
              <li>Become Our Franchise Partner</li>
              <li>Partner Institutions</li>
              <li>Maven Associates</li>
              <li>Gallery</li>
              <li>Careers at Maven</li>
            </ul>
          </div>
          <div className='text-stone-300/90'>
          <h6 className='text-lg font-bold uppercase py-4'>Helpful Links</h6>
          <ul className='text-xs grid gap-4'>
            <li>Fair Work Ombudsman</li>
            <li>Medical Booking Appointment</li>
            <li>IMMI Account</li>
            <li>Australian Federal Police Check</li>
            <li>Search Education Providers</li>
            <li>CRICOS Provider</li>
            <li>Search Education Providers</li>
            <li><a href="https://www.xe.com/currencyconverter/" target='_blank'>Currency Converter ←</a></li>
            <li>Email Login</li>
          </ul>
          </div>
        </div>
      </footer>
      <div className='bg-black text-slate-300/60 md:text-xs text-[8px] text-center border-t border-slate-300/15 p-4 shadow-xl'>Copyright © 2023 All Rights Reserved | Develop By Pasa</div>
    </>
  )
}

export default Footer
