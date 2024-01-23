import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css-sheets/trips-carousel.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { Modal , Card, Carousel } from 'react-bootstrap'

import Read_Seoraksan from './read-modals/Read_Seoraksan';
import Read_Bukhansan from './read-modals/Read_Bukhansan';
import Read_Seoul from './read-modals/Read_Seoul';



function Koreacarousel() {

    
  return (
        <div className='carousel-div'>

            <Carousel fade className='trip-carousel'>
                    
                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Seoul.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                                <Read_Seoul/>
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
                                <Read_Bukhansan/>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Seoraksan.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                                <Read_Seoraksan/>
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