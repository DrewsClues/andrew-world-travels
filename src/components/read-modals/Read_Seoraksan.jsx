import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Seoraksan() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Seoraksan National Park <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Seoraksan National Park
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Seoraksan National Park (설악산국립공원), is located on Korea's east coast nearby the small port city of Sokcho (속초). Sokcho can easily be accessed by express bus from Seoul and is a great place for a homebase while visiting the park. Seoraksan is a large mountain made of jagged granite and features both casual and difficult hikes. 
            The main park entrance sits in a large valley on the east side of the mountains. There are a few hotels, guesthouses, restaurants, and giftshops nearby. There is also a cable car which you ride up to a scenic viewpoint where you can be treated to beautiful views of the park's peaks and ridges, the valley below, 
            and the East Sea beyond. Seoraksan is also home to several Buddhist temples and a giant Buddha statue as well. The park is beautiful in all four seasons, though Fall and Spring are by far the most pleasant. 
            Summer is quite hot and humid, and winter can be brutally cold, windy, and downright perilous without adequate planning (as I learned for myself in January 2021). I've traveled there several times throughout my years living in Korea and I highly recommend it 
            to both those who like hiking and those who just want a scenic view and a coffee. 
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Seoraksan;