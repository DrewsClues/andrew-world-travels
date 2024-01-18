import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Nagoya() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Nagoya <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Nagoya
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Nagoya (名古屋市), is a city located on Japan's Pacific coast in the Chūbu region. It is a city of some 2.3 million people with a greater metropolitan 
            area of just about 9.5 million. I traveled to Nagoya for the first time in the autumn of 2023 with my close friend. We used it as a jumping off point for 
            a trekking trip to the Japanese Alps of Nagano Prefecture. Luckily, we were able to spend the last two days of our trip in Nagoya and were able to tour the city. Some notable places 
            from my trip that I highly recommend are Endoji Shotengai Shopping Street, 
            Nagoya Castle, Hisaya Ōdōri Park, and the "Space Ship" above Oasis 21 Mall, which has a great view of Mirai Tower. 
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Nagoya;