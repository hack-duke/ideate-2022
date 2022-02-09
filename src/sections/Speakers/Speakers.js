import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import './Speakers.css';
import 'swiper/swiper.scss';

import hans from "../../graphics/speakers/hans.png";
import lava from "../../graphics/speakers/lava.png";
import roger from "../../graphics/speakers/roger.png";
import melvin from "../../graphics/speakers/melvin.png";
import sandra from "../../graphics/speakers/sandra.png";
import daniel from "../../graphics/speakers/david.png";
import cecilia from "../../graphics/speakers/cecilia.png";
import kevin from "../../graphics/speakers/kevin.png";
import aria from "../../graphics/speakers/aria.png";
import marissa from "../../graphics/speakers/marissa.png";
import bonnie from "../../graphics/speakers/bonnie.png";
import augustus from "../../graphics/speakers/augustus.png";
import kaitlyn from "../../graphics/speakers/kaitlyn.png";
import shreya from "../../graphics/speakers/shreya.png";

SwiperCore.use([Autoplay]);

function Speakers() {

    const speakers = [
        {name: 'Aria Chernik', img: aria, title: 'Associate Professor of the Practice,', company: 'I&E Initiative and SSRI, Duke University'},
        {name: 'Augustus E. Wendell', img: augustus, title: 'Associate Professor of the Practice,', company: 'Department of Art, Art History and Visual Studies, Duke University'},
        {name: 'Bonnie Fishel', img: bonnie, title: 'Product Designer,', company: 'Elastic'},
        {name: 'Cici Xie', img: cecilia, title: 'Product Designer'},
        {name: 'Daniel Sieberg', img: daniel, title: 'VP of Technology and Innovation Thought Leadership,', company: 'Huawei USA'},
        {name: 'Kaitlyn Chu', img: kaitlyn, title: 'Product Designer'},
        {name: 'Kevin Hoch', img: kevin, title: 'Co-Founder and Co-Director,', company: 'Duke Open Design Studio'},
        {name: 'Marissa Vergel de Dios', img: marissa, title: 'Main Designer,', company: 'Glimpse'},
        {name: 'Melvin Hines', img: melvin, title: 'Co-Founder and CEO,', company: 'Upswing'},
        {name: 'Roger Zhu', img: roger, title: 'Product Designer,', company: 'Facebook'},
        {name: 'Sandra Bermond', img: sandra, title: 'Program Manager,', company: 'Duke Innovation Co-Lab'},
        {name: 'Shreya Shankar', img: shreya, title: 'Product Designer,', company: 'Uber'},
    ];

    return (
        <div id="speakers">
            <div className={"speakers-container"}>
                <div className={"keynote-speakers"}>
                    <h1 style={{marginBottom: "70px"}}>Last Year's Keynote and Closing Speakers</h1>
                    <div className={"keynote-container"}>
                        <div className={"img-container"}><div className={"keynote-img"}><img className={"hans"} src={hans} alt={"hans"}/></div></div>
                        <div className={"keynote-text"}>
                            <h2>Hans Jørgen Wiberg</h2>
                            <h3>Founder of Be My Eyes</h3>
                            <p>Inventor, craftsman, and seeker of philosophy, Hans Jørgen Wiberg is the founder of what has grown to be the world biggest community of blind and low vision people in the app Be My Eyes. As a TEDx speaker and singularity University Alumni, he is regarded as a leading voice on the movement towards embracing accessibility and inclusivity for those living with vision impairments.</p>
                        </div>
                    </div>
                    <div className={"keynote-container"}>
                        <div className={"img-container"}><div className={"keynote-img"}><img className={"lava"} src={lava} alt={"lava"}/></div></div>
                        <div className={"keynote-text"}>
                            <h2>Lava Sunder</h2>
                            <h3>General Manager of Culdesac</h3>
                            <p>Lava is the General Manager of Culdesac Tempe, the first car-free community built from scratch in the US. Prior to Culdesac, she worked at McKinsey & Company, where she lead digital transformations of companies in traditional industries. Lava is Duke Class of 2016, where she studied Statistics and Computer Science, and is also a former DSG President.</p>
                        </div>
                    </div>
                </div>
                <div className={"judges-speakers"}>
                    <h1 style={{marginBottom: "70px"}}>Last Year's Speakers and Judges</h1>
                    <Swiper
                        spaceBetween={10}
                        autoplay={{
                            delay: 5000,
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
                            }
                        }}
                    >
                        {speakers.map(s => (
                            <SwiperSlide>
                                <div className={"speaker-info"}>
                                    <img src={s.img} alt={s.name}/>
                                    <div className={"speaker-name"}>{s.name}</div>
                                    <div className={"speaker-title"}>{s.title}<br/>{s.company}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Speakers;