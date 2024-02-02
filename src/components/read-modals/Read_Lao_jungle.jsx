import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Lao_Jungle() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Tiger Waterfall <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Tiger Waterfall
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Tiger Waterfall is located within a km wide gorge on the western rim of Laos's Danyai Bolaven Plateau within the Dong Hua Sao National Bio-Diversity Conservation Area
            about 40km east of the city of Pakse. I traveled there in December of 2013 along with a group of my close family friends who originally came from Laos. What took 
            us to this remote corner of the country was a ziplining excursion we signed up for. TO BE CONTINUED......
            
    
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Lao_Jungle;