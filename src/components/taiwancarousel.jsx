import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css-sheets/trips-carousel.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { Modal , Card, Carousel } from 'react-bootstrap'


function Taiwancarousel() {

    
  return (
        <div className='carousel-div'>

            <Carousel fade className='trip-carousel'>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Jiufen.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                            <h3 className='home_caption'>Jiufen, Taiwan</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Taipei.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                            <h3 className='home_caption'>Taipei, Taiwan</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

  );
}

export default Taiwancarousel;