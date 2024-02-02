import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css-sheets/trips-carousel.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { Modal , Card, Carousel } from 'react-bootstrap'
import Read_Lao_Jungle from './read-modals/Read_Lao_jungle';
import Read_Vat_Phou from './read-modals/Read_VatPhou';

function Laoscarousel() {

    
  return (
        <div className='carousel-div'>

            <Carousel fade className='trip-carousel'>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Lao_jungle.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                                <Read_Lao_Jungle/>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Wat_phou.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                                <Read_Vat_Phou/>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>

  );
}

export default Laoscarousel;