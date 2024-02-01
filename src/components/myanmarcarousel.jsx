import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css-sheets/trips-carousel.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { Modal , Card, Carousel } from 'react-bootstrap'
import Read_Mandalay from './read-modals/Read_Mandalay';
import Read_Bagan from './read-modals/Read_Bagan';
import Read_Mt_Popa from './read-modals/Read_Mt_Popa';
import Read_Shan_Hills from './read-modals/Read_Shan_hills';


function Myanmarcarousel() {

    
  return (
        <div className='carousel-div'>

            <Carousel fade className='trip-carousel'>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Mandalay.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                                <Read_Mandalay/>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Bagan.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                                <Read_Bagan/>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="MtPopa.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                                <Read_Mt_Popa/>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Shan_hills.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                                <Read_Shan_Hills/>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>

  );
}

export default Myanmarcarousel;