import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Matsumoto() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Kamikochi <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Kamikochi
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Kamikochi (上高地), is a highland valley located in Nagaon Prefecture's Hida Mountains. The valley is accessible via an express bus from Matsumoto. I traveled there in Autumn 2023 with my friend for a four day trekking & camping trip. 
            Frankly, Kamikochi valley is among one of the most beautiful places that I have ever visited in my life. The air is extremely clean, and the forests are lush with ferns and moss. The valley is also 
            inhabited by wildlife such as bears and Snow Monkeys (Very exotic for me). There are numerous trails in the valley and surrounding mountains ranging from easy to high difficulties. There's also a wide range of lodging available, from luxury hotels, 
            mountain lodges, and camp sites, whatever you do, bring cash becaue card options are limited or non-existent in most places. Unfortunately due to a recovering knee injury, I wasn't able to do much of the intended trek and after about 2-3 hours into a steep climb 
            I was forced to part ways with my friend and turn back. However, I was able to do some easier hikes by myself, and spent a night in the lovely Tokusawa-En Lodge which features a traditional Japanese bath, pub, and a nice dining room. 
            
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Matsumoto;