"use client";
import React, { useEffect, useState } from 'react'
import { FaPhone } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import Link from 'next/link';


function Header() {
  const [searchVisible, setSearchVisible] = useState(false);
  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };
  const [navVisible, setNavVisible] = useState(false);
  const handNav = () =>{
    setNavVisible(!navVisible);
  }
  const [shows, setShows] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        document.querySelector('.scrolup').classList.remove('hidden');
      }
      else {
        document.querySelector('.scrolup').classList.add('hidden');
      }
    })
  }, [])
  return (
    <>
      <header className='relative top'>
        <div className='bg-[#262832] text-nowrap md:block hidden'>
          <div className="container  flex flex-nowrap items-center justify-between text-white">
            <div className='flex flex-nowrap gap-3 text-xl w-[10%]'>
              <AiFillFacebook />
              <FaInstagram />
              <FaLinkedin />
            </div>
            <div className='w-[90%] gap-4 items-center flex'>
              <ul className='flex flex-wrap text-xs justify-end gap-4'>
                <li><a href="tel: +61 3 9602 5683"><FaPhone className='inline-flex' /> +61 3 9602 5683 (Melbourne HO)</a></li>
                <li><a href="tel: +61 2 8677 8829"><FaPhone className='inline-flex' /> +61 2 8677 8829 (Sydney)</a></li>
                <li><a href="tel: +01-5908411"><FaPhone className='inline-flex ' /> +01-5908411 (Kathmandu)</a></li>
                <li><a href="tel: +63 917 174 2302"><FaPhone className='inline-flex ' /> +63 917 174 2302 (Philippines)</a></li>
                <li><a href="mailto: admissions@mymavenedu.com"><MdOutgoingMail className='inline-flex text-[1.2vw]' /> admissions@mymavenedu.com</a></li>
              </ul>
              <button className='bg-[#AD8742] uppercase w-fit p-4 rounded-b-xl rounded-t-md font-semibold text-sm mb-4'><a href="">Book an Appointment</a></button>
            </div>
          </div>
        </div>
        <div className='bg-black py-6'>
          <div className="container flex flex-nowrap justify-between items-center">
            <div className='w-[12%]'><Link href="/"><img src="https://mymavenedu.com/wp-content/uploads/2020/07/maven_logo-2.png" alt="logo" className='w-full' /></Link></div>
            <div className='w-fit p-4'>
              <ul className='md:flex hidden text-nowrap text-white font-[600] lg:text-sm text-xs gap-6'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li><a href="">Services</a></li>
                <li><a href="">Resources</a></li>
                <li><a href="">News and Announcements</a></li>
                <li><a href="">Maven Associates</a></li>
                <li><a href="">Gallery</a></li>
                <li><a href="">Contact Us</a></li>
                <li className='s-parent hover:text-white'>
                  <div className="relative">
                    <IoIosSearch className='inline-flex text-xl lg:text-2xl hover:text-[#7B6F10] transition duration-1000' onClick={handleSearchClick} />
                    {/* The code starts with {searchVisible && (...)}. This is a conditional statement that checks the value of searchVisible. If searchVisible is true, the code inside the parentheses will be rendered. If it's false, the code will not be rendered.
                    if (searchVisible) {
                    return (...);
                    } else {
                    return null;
                    } */}
                    {searchVisible && (
                      <div className='s-box absolute top-10 right-0 shadow-md w-fit p-6 backdrop-blur-xl bg-white/40 z-10'>
                        <div><form><input type="search" placeholder='Search...' className='focus:outline-none rounded-lg py-2 px-4 text-black shadow-2xl mr-1' /><button className='text-sm inline-flex bg-black p-2 hover:text-white rounded-lg'>search</button></form></div>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
              <div className='relative'>
                <TiThMenu className='text-[#AD8742] shadow-2xl md:hidden text-xl inline-flex' onClick={handNav} />
                {navVisible && (
                  <div className='absolute text-white/90 bg-black rounded z-40 top-0 -right-4 p-4'>
                  <div className='relative'>
                    <ImCross className='text-sm text-[#AD8742] absolute top-0 right-0' onClick={handNav} />
                    <ul className='text-xs py-4 grid text-nowrap gap-2'>
                      <li><a href="/">Home</a></li>
                      <li><a href="">About Us</a></li>
                      <li><a href="">Services</a></li>
                      <li><a href="">Resources</a></li>
                      <li><a href="">News and Announcements</a></li>
                      <li><a href="">Maven Associates</a></li>
                      <li><a href="">Gallery</a></li>
                      <li><a href="">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='fixed select-none bg-[#AD8742] outline outline-1 mr-1 outline-white rounded-2xl text-white sm:text-base text-[2.5vw] p-1 px-6 uppercase -rotate-90 top-96 -right-12 z-10' onClick={() => setShows(!shows)}>Enquire Now</div>
        <div className='fixed top-[90vh] left-4 z-50 scrolup py-2 px-4 rounded-md outline outline-white/10 w-fit bg-black text-white/80 text-lg hover:-translate-y-4 transition duration-700 hidden'><a href="#top">↑</a></div>
        {shows && (
          <div className='h-[100vh] w-[340px] bg-black fixed z-[999] top-0 right-0 slide-left py-6 px-4'>
              <div className='scrolup flex items-center justify-between'>
                <img className='md:w-36 w-28' src="https://mymavenedu.com/wp-content/uploads/2020/07/maven_logo-2.png " alt="logo" />
                <ImCross className='inline-flex text-white text-sm md:text-base' onClick={() => setShows(!shows)} />
                </div>
              <div className='scrolup py-20 px-3'>
              <form action="#" className='grid grid-cols-1 gap-6 text-xs md:text-sm'>
              <input type="text" placeholder='Your Name*' required className='py-2 px-3 w-full focus:outline-none border border-slate-200 rounded-xl' />
              <input type="email" placeholder='Your Email*' required className='py-2 px-3 w-full focus:outline-none border border-slate-200 rounded-xl' />
              <input type="tel" placeholder='Your Phone*' required className='py-2 px-3 w-full focus:outline-none border border-slate-200 rounded-xl' />
              <input type="text" placeholder='Your City' className='py-2 px-3 w-full focus:outline-none border border-slate-200 rounded-xl' />
              <textarea placeholder='Your Message...' className='py-2 h-[120px] px-3 w-full focus:outline-none border border-slate-200 rounded-xl' />
              <button className='bg-[#AD8742] py-2 px-6 w-fit text-white rounded-md'>Submit</button>
              </form>
              </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header