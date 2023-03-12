import React, { useState, useEffect } from 'react'
import './Slider.css'
import dataSlider from './dataSlider'


export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        
        if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
        else {
            setSlideIndex(slideIndex + 1)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            nextSlide()
        }, 2000)
        return () => {
            clearTimeout(timeout)
        }
    }, [slideIndex])

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={obj.image}
                        />
                        <p className='slidepara'>{obj.subTitle}</p>
                        <p className='slidetitle'>{obj.title}</p>
                    </div>
                )
            })}
            <div className="container-dots">
                {Array.from({ length: 3 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
