"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import { BsChatQuote } from "react-icons/bs";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';


function page() {
  return (
    <>
    <section className='bg-img py-6 px-4 bg-gradient-to-l from-black from-10% via-[#AD8A47] via-60% to-black'>
      <div className="container">
        <h1 className='md:text-2xl select-none text-lg font-bold text-stone-100'>Company Profile</h1>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center py-16 px-4">
          <div><img className='w-full rounded-sm' src="https://mymavenedu.com/wp-content/uploads/2022/02/melbourne-Photo_result.webp" alt="" /></div>
          <div>
            <div className='bg-[#AD8742] w-fit rounded-xl p-1 uppercase px-2 text-white font-semibold text-xs'>Company Profile</div>
              <h2 className='md:text-4xl text-xl capitalize font-bold my-6'>10+ Years of experience in International Education Industry</h2>
              <p className='text-justify md:text-base text-sm'>Maven Consulting Group, founded in 2018, provides a comprehensive solution to students who are looking to pursue higher education and vocational training in Australia, Canada, UK, USA, and NewZealand. With more than 10 years of experience in the International Education Industry, we aim to provide excellent customer service and extensive guidance to our clients. We have our branches in Australia (Melbourne, Sydney, Hobart & Perth), Nepal (Kathmandu, Banepa, Jhapa, Pokhara, Chitwan & Hetauda), and Global Offices in Philippines, Malaysia and Bangladesh.</p>
          </div>
        </div>
      </div>
    </section>
    <section className='py-2'>
      <div className="container">
      <div className='bg-[#AD8742] mx-auto w-fit rounded-full p-1 uppercase px-2 text-white font-semibold text-sm md:text-lg'>Our Teams</div>
        <div className="grid md:grid-cols-3 gap-8 py-8 px-4 md:py-16">
          <div className="box h-[180px] sm:h-[220px] md:h-[250px]">
            <div className="front"><img src="https://mymavenedu.com/wp-content/uploads/2023/01/image3-1200x600.webp" alt="" /></div>
            <div className="back"><div className='text-3xl'>Melbourne Team</div></div>
          </div>
          <div className="box h-[180px] sm:h-[220px] md:h-[250px]">
            <div className="front"><img src="https://mymavenedu.com/wp-content/uploads/2023/01/image5-1200x600.webp" alt="" /></div>
            <div className="back"><div className='text-3xl'>Sydney Team</div></div>
          </div>
          <div className="box h-[180px] sm:h-[220px] md:h-[250px]">
            <div className="front"><img src="https://mymavenedu.com/wp-content/uploads/2023/01/image4-1200x600.webp" alt="" /></div>
            <div className="back"><div className='text-3xl'>Philippines Team</div></div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 px-4 md:px-12">
          <div className="box h-[180px] sm:h-[240px] md:h-[280px]">
            <div className="front"> <img src="https://mymavenedu.com/wp-content/uploads/2024/03/DSC09740_result.webp" alt="" /></div>
            <div className="back text-4xl">Kathmandu Team</div>
          </div>
          <div className="box h-[180px] sm:h-[240px] md:h-[280px]">
            <div className="front"> <img src="https://mymavenedu.com/wp-content/uploads/2022/05/3_result-1.webp" alt="" /></div>
            <div className="back text-4xl text-[#AD8A47] uppercase">Ceos</div>
          </div>
        </div>
      </div>
    </section>
    <section className='py-12'>
      <div className="container">
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
    <section className='py-20 px-12'>
      <div className="bg-gradient-to-r from-[#4c3c1d] to-black/90 md:to-25% to-40% text-white py-2">
        <div className='border-l-[5px] border-[#b38b40] md:px-12 p-4 md:py-6'>
        <h3 className='md:text-4xl font-bold'>We believe international education</h3>
        <p className='uppercase py-4 md:text-sm text-[8px]'>shall provide students with quality education,<br />a global perspective, and international exposure catalyzing their personal and professional growth. Hence, with the help of our experts, we aim to promote internationally recognized educational institutes of Australia to international students and help them earn an internationally recognized degree.</p>
        <iframe className='mx-auto w-full h-[40vh] md:h-[68vh]' src="https://www.youtube.com/embed/Kv5QRcjRASo" title="Company Profile" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <h3 className='md:text-3xl text-xl py-8 font-bold'>Message from the Co-Founders"</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className='shadow-2xl py-16'>
            <div className='flex justify-center'><img src="https://mymavenedu.com/wp-content/uploads/2021/02/anil-242x300.png" alt="" /></div>
            <div className='pt-6'>
              <h4 className='text-xl font-bold text-center'>Anil Twanabasu</h4>
              <p className='text-[#AD8742] text-center'>co-founder & Executive director</p>
            </div>
          </div>
          <div className='shadow-2xl py-16'>
            <div className='flex justify-center'><img src="https://mymavenedu.com/wp-content/uploads/2021/02/laxmi-242x300.png" alt="" /></div>
            <div className='pt-6'>
              <h4 className='text-xl font-bold text-center'>Anil Twanabasu</h4>
              <p className='text-[#AD8742] text-center'>co-founder & Executive director</p>
            </div>
          </div>
        </div>
        <div className='shadow-lg py-8 px-5 text-center bg-slate-200/30 my-32 backdrop-blur-sm rounded-lg'>
          <div className='flex justify-center mb-8 text-3xl'><BsChatQuote /></div>
          <div className='grid gap-6'>
            <p>Maven Consulting Group was founded in November 2018, with a passion to empower International Students and assist them to access abroad study opportunities. Most of our Directors as well as team members have lived a life of international students at one point in their lives.</p>
            <p>We take a pride to be known as one of the Australia’s fastest growing education agencies. At Maven Consulting Group, we continuously strive to provide credible counselling to our clients to assist them further in their academic and professional journey. At the same time, we also commit satisfaction and welfare to our clients.</p>
            <p>Our goals is to go beyond just student recruitment. We thrive to contribute to the success of each international student from their study abroad journey till not only they graduate but also assist them to land into their professional jobs. There is nothing satisfying to us than helping our students achieving success in their academic and career.</p>
            <p>We take pride in our consistent support and guidance to students and invite you to be our next success story!</p>
            <div>
            <span className='text-center font-bold uppercase'>ANIL TWANABASU & LAXMI KAYESTHA</span><br />
            <span className='text-center font-bold uppercase'>CO-FOUNDERS, MAVEN CONSULTING GROUP</span>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* <section className=''>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 px-4 md:px-12">
          <div className="box h-[180px] sm:h-[240px] md:h-[280px]">
            <div className="front text-[#ba9550] text-xl md:text-2xl font-semibold"><span className='inline-flex pt-32 sm:pt-48 md:pt-52 pl-6 stroke-black'>Our Vision</span></div>
            <div className="back">back</div>
          </div>
          <div className="box h-[180px] sm:h-[240px] md:h-[280px]">
            <div className="front text-[#ba9550] text-xl md:text-2xl font-semibold"><span className='inline-flex pt-32 sm:pt-48 md:pt-52 pl-6 stroke-black'>Our Misson</span></div>
            <div className="back">back</div>
          </div>
        </div>
      </div>
</section> */}
    </>
  )
}

export default page
