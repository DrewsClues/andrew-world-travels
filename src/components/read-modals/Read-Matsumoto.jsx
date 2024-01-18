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
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Matsumoto <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Matsumoto
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Matsumoto (松本市,), is a relatively small city of just under a quarter million people, located in Japan's central Nagano prefecture. I traveled 
            there in the autumn of 2023 with my close friend and we used it as a home base for our trekking trip into the nearby mountains. Though small, the city 
            features several shopping centers, numerous outdoor outfitters, and a bustling central train station surrounded by restaurants and nightlife options. 
            The most worthwhile landmark to visit is Matsumoto Castle, which is surrounded by a shallow moat, and on a clear day one can be treated to panoramic views of 
            the surrounding mountains (unfortunately I was not treated to those views, but there's always next time).
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Matsumoto;