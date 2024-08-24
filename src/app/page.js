"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// import required modules
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaPeoplePulling } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa6";
import { GiRibbonMedal } from "react-icons/gi";
import { IoPersonCircle } from "react-icons/io5";
import CountUp from 'react-countup';


export default function Home() {
const [show, setShow]=useState(false);
const [show1, setShow1]=useState(false);
const [show2, setShow2]=useState(false);
const [show3, setShow3]=useState(false);
const [show4, setShow4]=useState(false);
const [show5, setShow5]=useState(false);
  const showDetail =()=>{
    setShow(!show);
  }

  return (
    <>
      <section>
        <div className='md:px-8'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full' src="https://mymavenedu.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-11-at-12.54.34.jpeg" alt="slide1" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="https://mymavenedu.com/wp-content/uploads/2023/01/banner-1.webp" alt="slide2" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="https://mymavenedu.com/wp-content/uploads/2023/01/refer-and-earn-banner.png" alt="slide3" /></SwiperSlide>
      </Swiper>
          <div className='h-box flex flex-wrap text-white md:text-lg text-xs text-center justify-center gap-4 uppercase font-semibold md:py-0 py-4 md:relative bottom-6'>
            <div className='bg-[#AD8742] px-6 py-4 md:w-[25%] w-full rounded-md hover:bg-[#9a7839] md:hover:-translate-y-6 transition duration-1000'><div className='justify-center flex text-2xl p-1 md:text-6xl'><FaPeoplePulling /></div>Expert Guidance</div>
            <div className='bg-[#AD8742] px-6 py-4 md:w-[25%] w-full rounded-md hover:bg-[#9a7839] md:hover:-translate-y-6 transition duration-1000'><div className='justify-center flex text-2xl p-1 md:text-6xl'><FaRegHandshake /></div>Partnership with Reputed Institutions</div>
            <div className='bg-[#AD8742] px-6 py-4 md:w-[25%] w-full rounded-md hover:bg-[#9a7839] md:hover:-translate-y-6 transition duration-1000'><div className='justify-center flex text-2xl p-1 md:text-6xl'><GiRibbonMedal /></div>Decade of Experience</div>
          </div>
        </div>
        <div className='infos container mt-20'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-6 items-center px-4'>
            <div className='grid md:grid-rows-2 grid-rows-1 gap-1'>
              <div><img className='w-full rounded-tl-[80px] rounded-br-[80px]' src="https://mymavenedu.com/wp-content/uploads/2023/03/2_result.webp" alt="" /><h3 className='text-center font-bold text-xl p-2'>Parramatta Team
              </h3></div>
              <div><img className='w-full rounded-tl-[80px] rounded-br-[80px]' src="https://mymavenedu.com/wp-content/uploads/2024/01/DSC09740-scaled.jpg" alt="" /><h3 className='text-center font-bold text-xl p-2'>Melbourne Team
              </h3></div>
            </div>
            <div>
              <div className='bg-[#AD8742] uppercase p-2 rounded-2xl w-fit text-xs font-semibold text-white'>about company</div>
              <h2 className='text-3xl capitalize font-bold my-6'>10+ Years of experience in International Education Industry</h2>
              <p className='text-justify'>Maven Consulting Group, founded in 2018, provides a comprehensive solution to students who are looking to pursue higher education and vocational training in Australia, Canada, UK, USA, and NewZealand. With more than 10 years of experience in the International Education Industry, we aim to provide excellent customer service and extensive guidance to our clients. We have our branches in Australia (Melbourne, Sydney, Hobart & Perth), Nepal (Kathmandu, Banepa, Jhapa, Pokhara, Chitwan & Hetauda), and Global Offices in Philippines, Malaysia and Bangladesh.<br /><br />
              We believe international education shall provide students with quality education, a global perspective, and international exposure catalyzing their personal and professional growth. Hence, with the help of our experts, we aim to promote internationally recognized educational institutes of Australia to international students and help them earn an internationally recognized degree.</p>
              <div className='bg-black text-white py-2 px-4 w-fit font-semibold mt-4'>Explore More</div>
            </div>
          </div>
        </div>
        <div className='w-full infos2 mt-10'>
          <div className="container grid md:grid-cols-2 grid-cols-1 md:gap-40 gap-10">
            <div>
              <div className='bg-transparent border border-[#ac8c54] w-fit p-1 px-2 text-[10px] text-[#9f814e] font-semibold uppercase rounded-2xl'>Core Values</div>
              <div>
                <h3 className='text-4xl font-semibold text-white py-4 '>Our Non-Negotiable Virtue</h3>
                <div className='grid grid-cols-1 mt-4 gap-4'>
                <div> 
                  <div className='py-3 px-6 font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-sm rounded-sm hover:bg-white/15' onClick={showDetail}>Commitment to Clients' Satisfaction</div>
                  {show && (
                  <div className='p-4 text-white/60 font-extralight'>We make sure our clients are best served and are provided with the best hospitality.</div>
                  )}
                </div>
                <div> 
                  <div className='py-3 px-6 font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-sm rounded-sm hover:bg-white/15' onClick={() => setShow1(!show1)}>Credibility</div>
                  {show1 && (
                  <div className='p-4 text-white/60 font-extralight'>Winning trust of our clients is our first and foremost priority. </div>
                  )}
                </div>
                <div> 
                  <div className='py-3 px-6 font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-sm rounded-sm hover:bg-white/15'  onClick={() => setShow2(!show2)}>Integrity</div>
                  {show2 && (
                  <div className='p-4 text-white/60 font-extralight'>We adhere to strong practices of moral and ethical principles and values.</div>
                  )}
                </div>
                <div> 
                  <div className='py-3 px-6 font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-sm rounded-sm hover:bg-white/15'  onClick={() => setShow3(!show3)}>Respect</div>
                  {show3 && (
                  <div className='p-4 text-white/60 font-extralight'>We value and respect everyone, regardless of their background, abilities, or beliefs.</div>
                  )}
                </div>
                <div> 
                  <div className='py-3 px-6 font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-sm rounded-sm hover:bg-white/15'  onClick={() => setShow4(!show4)}>Loyalty</div>
                  {show4 && (
                  <div className='p-4 text-white/60 font-extralight'>With great determination and dedication, we devote ourselves to our clients.</div>
                  )}
                </div>
                <div> 
                  <div className='py-3 px-6 font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-sm rounded-sm hover:bg-white/15'  onClick={() => setShow5(!show5)}>Continuous Improvement</div>
                  {show5 && (
                  <div className='p-4 text-white/60 font-extralight'>With great determination and dedication, we devote ourselves to our clients.</div>
                  )}
                </div>
                </div>
              </div>
            </div>
            <div><img className='w-full rounded-md' src="https://mymavenedu.com/wp-content/uploads/2024/01/IMG_5587_result-2048x1909.webp" alt="" /></div>
          </div>
        </div>
      </section>
      <section className='mt-4'>
        <div className="container text-center">
          <h4 className='font-bold text-4xl py-4'>Our Partner Institutions</h4>
          <div className='bg-[#ac8c54] w-fit p-1 px-2 text-[12px] text-white font-semibold uppercase rounded-2xl mx-auto mt-4'>Partners</div>
          <div className='p-4'>
          <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper w-full h-fit"
      >
        <SwiperSlide>
          <img src="https://mymavenedu.com/wp-content/uploads/2022/06/edvantage-institute.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mymavenedu.com/wp-content/uploads/2022/05/ttttttt.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mymavenedu.com/wp-content/uploads/2022/03/IIBT-FEDERATION-UNI.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mymavenedu.com/wp-content/uploads/2022/03/University-of-Canada.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mymavenedu.com/wp-content/uploads/2022/07/IMC.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mymavenedu.com/wp-content/uploads/2022/03/KENT.png" />
        </SwiperSlide>
      </Swiper>
          </div>
          <div className='bg-[#ac8c54] w-fit p-1 px-2 text-[12px] text-white font-semibold uppercase rounded-2xl mx-auto mt-6'>ASSOCIATIONS</div>
          <div className='p-4'>
          <Swiper 
          watchSlidesProgress={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} 
          slidesPerView={4} 
          modules={[Autoplay]}
          className="mySwiper w-full h-[150px] flex items-center">
        <SwiperSlide>
          <img className='object-contain aspect-[3/2] h-full' src="https://mymavenedu.com/wp-content/uploads/2022/03/7-300x172.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='object-contain aspect-[3/2] h-full' src="https://mymavenedu.com/wp-content/uploads/2023/05/download-7-e1683261194685.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='object-contain aspect-[3/2] h-full' src="https://mymavenedu.com/wp-content/uploads/2023/05/download-6.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='object-contain aspect-[3/2] h-full' src="https://mymavenedu.com/wp-content/uploads/2022/03/3-300x172.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='object-contain aspect-[3/2] h-full' src="https://mymavenedu.com/wp-content/uploads/2022/07/294885796_1055746648664561_5611675606916938036_n-300x48.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='object-contain aspect-[3/2] h-full' src="https://mymavenedu.com/wp-content/uploads/2022/03/6-300x172.webp" />
        </SwiperSlide>
      </Swiper>
          </div>
        </div>
      </section>
      <section className='p-8 mt-4'>
        <div className="container">
          <h4 className='font-bold text-center py-4 md:py-8 md:text-4xl'>Check Out Our New & Unique TVC</h4>
        <iframe className='w-full h-[250px] md:h-[650px]' src="https://www.youtube.com/embed/sB5dsk7Ia-I" title="Maven Consulting Group, the most trusted consultancy for Study Abroad." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
      <section className='bg-black py-20 mt-20'>
      <div className="container grid md:grid-cols-5 gap-16 text-white font-semibold text-center">
        <div className='flex-row'>
        <CountUp end={5000} duration="3" delay={0} suffix='+' />
        <br />
        <span className='uppercase'>Satisfied <br /> Clients</span>
        </div>
        <div className='flex-row'>
        <CountUp end={1000} duration="3" delay={0} suffix='+' />
        <br />
        <span className='uppercase'>Visa <br /> Success</span>
        </div>
        <div className='flex-row'>
        <CountUp end={200} duration="3" delay={0} suffix='+' />
        <br />
        <span className='uppercase'>Partnered <br /> Institutions</span>
        </div>
        <div className='flex-row'>
        <CountUp end={50} duration="3" delay={0} suffix='+' />
        <br />
        <span className='uppercase'>Different Nationality <br /> Clients</span>
        </div>
        <div className='flex-row'>
        <CountUp end={1000} duration="3" suffix="+"  />
        <br />
        <span className='uppercase'>Individuals <br /> Coached</span>
        </div>
      </div>
      </section>
      <section className='mt-12'>
      <div className="container">
      <div className='bg-[#ac8c54] w-fit p-1 px-2 text-[12px] text-white font-semibold uppercase rounded-2xl mx-auto mt-4'>testimonials</div>
        <h5 className='text-4xl font-bold text-center pt-4'>What People Say About Us</h5>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='py-28'>
          <div className='border border-black shadow-lg rounded-2xl'>
            <p className='p-8 text-justify'>"My experience with Maven Consulting Group was great honestly speaking, we were kept updated and had quick follow-ups at any time, I dealt with a friendly and professional team, very satisfied with their service."</p>
            <div className='flex flex-nowrap p-4 mt-4 border-t border-slate-300'>
              <div><IoPersonCircle className='inline-flex w-[80px] h-[80px] opacity-80' /></div>
              <div className='p-2 font-bold text-2xl'>Pasa ..... <br /> <span className='text-sm font-[500] uppercase'>Nepal</span></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='py-28'>
          <div className='border border-black shadow-lg rounded-2xl'>
            <p className='p-8 text-justify'>"My experience with Maven Consulting Group was great honestly speaking, we were kept updated and had quick follow-ups at any time, I dealt with a friendly and professional team, very satisfied with their service."</p>
            <div className='flex flex-nowrap p-4 mt-4 border-t border-slate-300'>
              <div><IoPersonCircle className='inline-flex w-[80px] h-[80px] opacity-80' /></div>
              <div className='p-2 font-bold text-2xl'>Pasa ..... <br /> <span className='text-sm font-[500] uppercase'>Nepal</span></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='py-28'>
          <div className='border border-black shadow-lg rounded-2xl'>
            <p className='p-8 text-justify'>"My experience with Maven Consulting Group was great honestly speaking, we were kept updated and had quick follow-ups at any time, I dealt with a friendly and professional team, very satisfied with their service."</p>
            <div className='flex flex-nowrap p-4 mt-4 border-t border-slate-300'>
              <div><IoPersonCircle className='inline-flex w-[80px] h-[80px] opacity-80' /></div>
              <div className='p-2 font-bold text-2xl'>Pasa ..... <br /> <span className='text-sm font-[500] uppercase'>Nepal</span></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='py-28'>
          <div className='border border-black shadow-lg rounded-2xl'>
            <p className='p-8 text-justify'>"My experience with Maven Consulting Group was great honestly speaking, we were kept updated and had quick follow-ups at any time, I dealt with a friendly and professional team, very satisfied with their service."</p>
            <div className='flex flex-nowrap p-4 mt-4 border-t border-slate-300'>
              <div><IoPersonCircle className='inline-flex w-[80px] h-[80px] opacity-80' /></div>
              <div className='p-2 font-bold text-2xl'>Pasa ..... <br /> <span className='text-sm font-[500] uppercase'>Nepal</span></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      </section>
      <section className='infos2'>
        <div className='container grid md:grid-cols-2 gap-2 text-[#F5FEFD]'>
        <div>
              <h6 className='text-4xl font-bold'>Planning To Study Abroad?</h6>
              <p className='font-normal py-4 text-justify'>Our expert counselors are here to guide you to find the best educational experience and international exposure.</p>
              <div className='mt-4 bg-black py-2 px-4 w-fit uppercase font-semibold'>Get in Touch</div>
        </div>
          <div className='opacity-0 hidden md:block'>empty....</div>
        </div>
      </section>
      <section className='my-12'>
        <div className="container">
          <div className='border border-slate-100 shadow-2xl md:px-28 bg-slate-200/30 backdrop-blur-sm'>
            <h6 className='font-semibold text-3xl py-12 text-center'>Book a free appointment with us</h6>
            <div className='p-12'>
              <form action="#" className='grid grid-cols-1 gap-6'>
              <input type="text" placeholder='Your Name*' required className='py-3 px-4 w-full focus:outline-none border border-slate-200 rounded-xl' />
              <input type="email" placeholder='Your Email*' required className='py-3 px-4 w-full focus:outline-none border border-slate-200 rounded-xl' />
              <input type="tel" placeholder='Your Phone*' required className='py-3 px-4 w-full focus:outline-none border border-slate-200 rounded-xl' />
              <input type="text" placeholder='Your City' className='py-3 px-4 w-full focus:outline-none border border-slate-200 rounded-xl' />
              <textarea placeholder='Your Message...' className='py-2 h-[120px] px-4 w-full focus:outline-none border border-slate-200 rounded-xl' />
              <button className='bg-[#AD8742] py-2 px-6 w-fit text-white rounded-md'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}  