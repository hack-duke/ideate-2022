import React from "react";
import './Purpose.css';

import ideate1 from '../../graphics/Ideate_1.jpg';
import ideate2 from '../../graphics/Ideate_2.jpg';
import ideate3 from '../../graphics/Ideate_3.jpg';
import ideate4 from '../../graphics/Ideate_4.jpg';
import ideate5 from '../../graphics/Ideate_5.jpg';
import ideate6 from '../../graphics/Ideate_6.jpg';
import ideate7 from '../../graphics/5_hello ideate.jpg';
import ideate8 from '../../graphics/6_ideate.jpg';
import ideate9 from '../../graphics/7_virtual ideate.jpg';
import ideate10 from '../../graphics/Ideate 2 (edited).jpg';
import ideate11 from '../../graphics/virtual ideate 2.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

function Purpose() {

    const pics = [ideate1, ideate2, ideate3, ideate4, ideate5, ideate6, ideate7, ideate8, ideate9, ideate10, ideate11]

    return (
        <div id="purpose">
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                centeredSlides
                autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
                loop
                breakpoints={{
                320: {
                    slidesPerView: 1,
                },

                480: {
                    slidesPerView: 3,
                },

                1000: {
                    slidesPerView: 5,
                },
                1600: {
                    slidesPerView: 7,
                }
            }}>
                {pics.map(s => (
                <SwiperSlide>
                    <div className={"speaker-info"}>
                        <img className={"purpose-img"} src={s} alt={"purpose-slideshow"}/>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            <div className={"purpose-container"}>
                <h1>Purpose</h1>
                <p><h3 className={"red"}>We hope that Ideate will inspire students from all backgrounds to incorporate design thinking as part of their innovation process and to use it as a tool in their everyday lives. As Duke's annual design-thinking conference, we want to show that design isn’t just related to art and technology. It is a problem-solving method for creating intuitive, meaningful, and ethical solutions that affect all communities and environments.</h3></p>
                <p><h3 className={"red"}>Our theme of “discover” is meant to celebrate curiosity for learning. As a result, we are emphasizing our speaker sessions, discussions, and workshops. Our conference is meant to be beginner-friendly, and if we can inspire a handful of participants to incorporate design-thinking into their everyday lies, we can call our conference a success.</h3></p>
            </div>
        </div>
    )
}

export default Purpose;

