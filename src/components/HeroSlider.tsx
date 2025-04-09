import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

function HeroSlider() {
    return (
        <>

            <div className="hero">
                <div className="container">
                    <Swiper
                        loop={true}
                        spaceBetween={30}
                        centeredSlides={true}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }} pagination={{ clickable: true }} modules={[Pagination, Autoplay, Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>Microsoft Xbox <br /> 360 controller</h3>
                                <p>Windows XP 10/7/8 prs3, Tv Box</p>
                                <Link to="/" className='btn'>Shop Now</Link>
                            </div>
                            <img src="/src/img/banner_Hero1.jpg" alt="banner_Hero1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>Microsoft Xbox <br /> 360 controller</h3>
                                <p>Windows XP 10/7/8 prs3, Tv Box</p>
                                <Link to="/" className='btn'>Shop Now</Link>
                            </div>
                            <img src="/src/img/banner_Hero2.jpg" alt="banner_Hero1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content">
                                <h4>Introducing the new</h4>
                                <h3>Microsoft Xbox <br /> 360 controller</h3>
                                <p>Windows XP 10/7/8 prs3, Tv Box</p>
                                <Link to="/" className='btn'>Shop Now</Link>
                            </div>
                            <img src="/src/img/banner_Hero3.jpg" alt="banner_Hero1" />
                        </SwiperSlide>


                    </Swiper>

                </div>
            </div>




        </>

    )
}

export default HeroSlider