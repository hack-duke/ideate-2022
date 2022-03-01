import React, {useState, useEffect} from 'react'
import ButtonSlider from './ButtonSlider.js';
import beltramelli from "../../graphics/speakers/beltramelli.jpeg";
import aria from "../../graphics/speakers/aria.png";
import kaitlyn from "../../graphics/speakers/kaitlyn.png";
import shreya from "../../graphics/speakers/shreya.png";
import roger from "../../graphics/speakers/roger.png";
import './Speakers.css';

function Speakers(){

    const speakers = [
        {id : 0, name: 'Tony Beltramelli', img: beltramelli, title: 'CEO, UIZard', description: 'Tony Beltramelli is the co-founder and CEO of Uizard Technologies, a startup developing AI-powered tools to revolutionize the way people build software. He got into machine intelligence during his graduate studies at the IT University of Copenhagen and ETH Zurich. His research work on applications of deep learning has been recognized globally and featured in international media such as WIRED, Forbes, The Huffington Post and The Next Web. He was recently shortlisted in Forbes’ 30 under 30 2019 list.'},
        {id : 1, name: 'Augustus E. Wendell', img: aria, title: 'CEO, UIZard', description: 'Tony Beltramelli is the co-founder and CEO of Uizard Technologies, a startup developing AI-powered tools to revolutionize the way people build software. He got into machine intelligence during his graduate studies at the IT University of Copenhagen and ETH Zurich. His research work on applications of deep learning has been recognized globally and featured in international media such as WIRED, Forbes, The Huffington Post and The Next Web. He was recently shortlisted in Forbes’ 30 under 30 2019 list.'},
        {id : 2, name: 'Bonnie Fishel', img: shreya, title: 'CEO, UIZard', description: 'Tony Beltramelli is the co-founder and CEO of Uizard Technologies, a startup developing AI-powered tools to revolutionize the way people build software. He got into machine intelligence during his graduate studies at the IT University of Copenhagen and ETH Zurich. His research work on applications of deep learning has been recognized globally and featured in international media such as WIRED, Forbes, The Huffington Post and The Next Web. He was recently shortlisted in Forbes’ 30 under 30 2019 list.'},
        {id : 3, name: 'Cici Xie', img: roger, title: 'CEO, UIZard', description: 'Tony Beltramelli is the co-founder and CEO of Uizard Technologies, a startup developing AI-powered tools to revolutionize the way people build software. He got into machine intelligence during his graduate studies at the IT University of Copenhagen and ETH Zurich. His research work on applications of deep learning has been recognized globally and featured in international media such as WIRED, Forbes, The Huffington Post and The Next Web. He was recently shortlisted in Forbes’ 30 under 30 2019 list.'},
        {id : 4, name: 'Daniel Sieberg', img: kaitlyn , title: 'CEO, UIZard', description: 'Tony Beltramelli is the co-founder and CEO of Uizard Technologies, a startup developing AI-powered tools to revolutionize the way people build software. He got into machine intelligence during his graduate studies at the IT University of Copenhagen and ETH Zurich. His research work on applications of deep learning has been recognized globally and featured in international media such as WIRED, Forbes, The Huffington Post and The Next Web. He was recently shortlisted in Forbes’ 30 under 30 2019 list.'}
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
                                        <p>{obj.description}</p>
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
    )
}

export default Speakers;