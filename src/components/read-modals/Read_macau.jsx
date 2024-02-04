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
            Macau (澳門), is a city state and actually not a country but rather a special administrative district of the People's Republic of China. However, it has only
            been under PRC rule since 1999, has a long separate history, and also some features of a sovereign state such as some self-governance, immigration
            controls, and even separate passports. 
        
        
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Macau;