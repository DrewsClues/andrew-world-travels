import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Macau() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Macau <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Macau
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Macau (澳門), is a small city state on the west side of the Pearl River Delta, just about 40km from Hong Kong. Macau sits on the Macau peninsula 
            and includes the nearby Taipa & Coloane islands as part of its territory. Macau is actually not a country but rather a special administrative district of the People's Republic of China. 
            However, it has only been under PRC rule since 1999, has a long separate history, and also some features of a sovereign state such as a degree of self-governance, immigration
            controls, and even separate passports. Most of Macau's modern history was as a Portuguese colony, 442 years to be precise, so there is a significant amount of Portuguese colonial architecture 
            and even a small enduring population of ethnically Portuguese residents. Today, Macau is known for its resorts, and many casinos, akin to an Asian Las Vegas. 
            I took a day trip to Macau in October of 2016 while some University friends and I were on a short vacation to Hong Kong. We spent most of our time wandering around the old city 
            center and visiting famous sites like <a href='https://maps.app.goo.gl/tWqEFYs6SbUynZsR7' target='_blank'> Monte do Forte</a>, <a href='https://maps.app.goo.gl/HdCUvyeeJK4CPRrC9' target='_blank'> Ruins of São Paulo</a>,
            <a href='https://maps.app.goo.gl/PMKzJGcLRckTwuq46' target='_blank'> A-Ma Temple</a>, and <a href='https://maps.app.goo.gl/uhyqKvCaHESJNWs87' target='_blank'> Senado Square</a>. 
            I really enjoyed the narrow streets and many historic buildings of Macau. If you're staying in Hong Kong, I definitely recommend at least a daytrip there!
        
        
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Macau;