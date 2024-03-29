import React, {useState, useEffect} from 'react'
import ButtonSlider from './ButtonSlider.js';
import sridhar from "../../graphics/speakers/sridhar.jpeg";
import skapek from "../../graphics/speakers/skapek.png";
import nina from "../../graphics/speakers/nina.jpeg";
import diego from "../../graphics/speakers/diego.jpeg";
import koehn from "../../graphics/speakers/koehn.jpeg";
import winter from "../../graphics/speakers/winter.jpeg";

import './Speakers.css';

function Speakers(){

    const speakers = [
        {id : 0, name: 'Sridhar Ramaswamy', img: sridhar, title: 'CEO & Co-Founder, Neeva', description: 'todo'},
        {id : 1, name: 'Tim Skapek', img: skapek, title: 'CTO & Co-Founder, PROTECT3D', description: 'todo'},
        {id : 2, name: 'Nina Polson', img: nina, title: 'Designing Manager, Google Maps', description: 'todo'},
        {id : 3, name: 'Christina Koehn', img: koehn, title: 'Principal Creative Director for Windows + Devices at Microsoft, Co-Founder of Women in Design at Microsoft', description: 'todo'},
        {id : 4, name: 'Diego Baca', img: diego, title: 'Partner Director of Design for Windows', description: 'todo'},
        {id : 4, name: 'Sharon Winter', img: winter, title: 'Vice President, Atomic VC', description: 'todo'}
    ];

    let speakerLength = speakers.length;

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== speakers.length){
            setSlideIndex(slideIndex + 1);
        } 
        else if (slideIndex === speakers.length){
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1);
        }
        else if (slideIndex === 1){
            setSlideIndex(speakers.length);
        }
    }

    const moveDot = index => {
        setSlideIndex(index);
    }

    return(
        <>
            <div id="speakers">
                <h1>SPEAKERS</h1>
                <div id="speakers-container">
                    <ButtonSlider moveSlide={prevSlide} direction={"prev"}/>
                        {speakers.map((obj, index) => {
                            return (
                                <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>

                                    {slideIndex === index + 1  && (
                                        <> 
                                            <img src={obj.img}/>
                                            <h3>{obj.name}</h3>
                                            <h4>{obj.title}</h4>
                                            {/* <p>{obj.description}</p> */}
                                        </>
                                    )} 
                                </div>
                            )
                        })}
                        <ButtonSlider moveSlide={nextSlide} direction={"next"}/>
                </div>
                <div className="container-dots">
                            {Array.from({length: speakerLength}).map((item, index) => (
                                <div 
                                onClick={() => moveDot(index + 1)}
                                className={slideIndex === index + 1 ? "dot active" : "dot"}
                                ></div>
                            ))}
                </div>
            </div>
        </>
        
    )
}

export default Speakers;