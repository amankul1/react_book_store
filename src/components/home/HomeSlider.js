import React, {useState} from "react";
import classes from "./css/HomePage.module.css";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/all";

const HomeSlider = (props)=>{
    const [current, setCurrent] = useState(0);
    const length = props.slides.length;

    const nextSlide = () =>{
        setCurrent(current === length-1?0:current+1);
    }

    const prevSlide = ()=>{
    setCurrent(current===0 ?  length-1: current-1);
    }

    if(!Array.isArray(props.slides) || props.slides.length === 0){
        return null
    }

    return (
        <div className={classes.sliderWrapper}>
            <FaArrowAltCircleLeft className={classes.left_arrow} onClick={prevSlide}/>
            <FaArrowAltCircleRight className={classes.right_arrow} onClick={nextSlide} />
            {props.slides.map((slide, index)=>{
                return (
                    <div className={index===current ? classes.slideActive : classes.slide} key={index}>
                        {
                            index===current && (
                                <img className={classes.image} src={slide.image} key={index} alt=""/>
                            )
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default HomeSlider;