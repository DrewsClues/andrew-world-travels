import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css-sheets/trips-carousel.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { Modal , Card, Carousel } from 'react-bootstrap'

import Read_Macau from './read-modals/Read_macau';

function Macau_carousel() {

    
  return (
        <div className='carousel-div'>

            <Carousel fade className='trip-carousel'>

                        <Carousel.Item interval={5000}>
                            <img
                            className = "travel-image"  src="Macau.jpg"
                            />

                            <Carousel.Caption>
                            <Read_Macau/>
                            </Carousel.Caption>
                        </Carousel.Item>


                    </Carousel>
                </div>

  );
}

export default Macau_carousel;