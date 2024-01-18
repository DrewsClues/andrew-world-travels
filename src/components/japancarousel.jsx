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
import Read_Fukuoka from './read-modals/Read_Fukuoka';


function Japancarousel() {

    
  return (
        <div className='carousel-div'>

            <Carousel fade className='trip-carousel'>
                        <Carousel.Item interval={5000}>
                            <img
                            className = "travel-image"  src="Matsumoto.jpg"
                            />
                            <Carousel.Caption>

                            <Read_Matsumoto/>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className = "travel-image"  src="Nagoya.jpg"
                            />

                            <Carousel.Caption>

                            <Read_Nagoya/>

                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Kamikochi.jpg"></img> 
                            </div>
                            <Carousel.Caption>

                            <Read_Kamikochi/>

                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Fukuoka.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                                <Read_Fukuoka/>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={5000}>
                            <div>
                            <img className = "travel-image" src="Osaka.jpg"></img> 
                            </div>
                            <Carousel.Caption>
                                <Read_Osaka/>
                            </Carousel.Caption>
                        </Carousel.Item>

                        


                    </Carousel>
                </div>

  );
}

export default Japancarousel;