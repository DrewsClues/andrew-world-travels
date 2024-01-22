import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css-sheets/trips-carousel.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { Modal , Card, Carousel } from 'react-bootstrap'
import Read_Bisbee from './read-modals/Read_Bisbee';
import Read_WhiteSands from './read-modals/Read_WhiteSands';

function USAcarousel() {

    
  return (
        <div className='carousel-div'>

            <Carousel fade className='trip-carousel'>
                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Bisbee.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                                <Read_Bisbee/>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="White-Sands.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                                <Read_WhiteSands/>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

  );
}

export default USAcarousel;