import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css-sheets/trips-carousel.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { Modal , Card, Carousel } from 'react-bootstrap'

import Read_Nagoya from './read-modals/Read_Nagoya';
import Read_Matsumoto from './read-modals/Read-Matsumoto';
import Read_Kamikochi from './read-modals/Read-Kamikochi';
import Read_Osaka from './read-modals/Read_Osaka';


function Koreacarousel() {

    
  return (
        <div className='carousel-div'>

            <Carousel fade className='trip-carousel'>
                    
                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Seoul.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                            <h3 className='home_caption'>Seoul</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Busan.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                            <h3 className='home_caption'>Busan</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Bukhansan.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                            <h3 className='home_caption'>Bukhansan National Park</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Seoraksan.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                            <h3 className='home_caption'>Seoraksan National Park</h3>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Gwangju.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                            <h3 className='home_caption'>Gwangju</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>

  );
}

export default Koreacarousel;