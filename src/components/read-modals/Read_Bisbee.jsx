import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Bisbee() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Bisbee, Arizona <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Bisbee, Arizona
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Bisbee is a small mining town located within the Mule Mountains of Cochise County Arizona, the most southeastern county of Arizona. Bisbee was created in the 1880s due to a boom 
            in copper, silver, and gold mining. Major mining operations declined in the second half of the 20th century and were halted in the 1970s. The miner population was replaced by artists 
            and hippies who revitalized the community which is now a major tourist attraction for Southeastern Arizona. The town features a mine tour, some beautiful Victorian buildings, and many nice restaurants, bars, 
            cafes, and shops selling artwork and antiques. I did most of my growing up in Sierra Vista, Arizona, about a 40 minute drive east so I have visited Bisbee many times, to tour guide 
            for visiting guests, or just somewhere to go on a weekend with my parents. I highly recommend going for the interesting architecture, and to enjoy the walkability, something 
            greatly lacking in most American towns. 
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Bisbee;