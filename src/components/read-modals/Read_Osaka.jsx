import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Osaka() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Osaka <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Osaka
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Osaka (大阪市), is located in the Kansai region of Japan, and is one of the country's largest cities. I have visited Osaka twice, once in July of 2019 by myself, and again in May of 2022 with my mother and sister. 
            I have high regards for Osaka, it's a very modern city with a lot of great places to experience on its own, and also easy access to other iconcic cities like Kobe, Nara, and Kyoto. During my most recent trip, I visited 
            some of the popular tourist spots like Osaka Castle, and the  Dōtonbori shopping disctrict, famous for Takoyaki. The bustling areas of the city are exciting of course, and I highly recommend them. But my favorite part of Osaka was visiting 
            quieter locations nearby to our hotel, some great Izakaya, ramen, and a Japanese BBQ shop. Most memorably for me was a busy little Gyoza shop called <a href="https://maps.app.goo.gl/8ZUDhdiZEsyvgWAE6" target="_blank">Nanyakana (なんやかんや)</a>, where the staff was extremely polite and welcoming and the food and drinks were quite delicious. My Mom was quite touched when 
            the cook came out to bow to us as we left, it was my Mother's first visit to Japan so I really appreciate people being so kind and making it extra special for her. Definitely recommend Osaka for a visit! 

        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Osaka;