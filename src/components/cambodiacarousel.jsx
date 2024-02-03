import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css-sheets/trips-carousel.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { Modal , Card, Carousel } from 'react-bootstrap'
import Read_Angkorwat from './read-modals/Read_angkorwat';



function Cambodiacarousel() {

    
  return (
        <div className='carousel-div'>

            <Carousel fade className='trip-carousel'>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Angkorwat.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                                <Read_Angkorwat/>
                            </Carousel.Caption>
                        </Carousel.Item>


                    </Carousel>
                </div>

  );
}

export default Cambodiacarousel;