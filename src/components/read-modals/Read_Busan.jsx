import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Busan() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Busan <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Busan
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
        Busan (부산), is located in South Korea's most southeast corner on the coast of the South Sea. With a population of over 3 million people it's the country's second most populous city. It’s a major port city and due to its beaches is a very popular spot for Koreans to go on vacation. The most famous beach in the city if called Haeundae (해운대), and is a great place to get street food, sit in air conditioned cafes, and enjoy an ocean view. You can also take yacht rides for a great view of the city, this is especially beautiful at sunset. On a day, you can actually see the Japanese island of Tsushima across the water. Of course being by the ocean, there is an abundance of seafood in Busan. If you’re looking for a getaway from Seoul, some time by the sea, and great fish, checkout Busan, it can easily be reached by plane, express bus, and KTX/SRT trains. 
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Busan;