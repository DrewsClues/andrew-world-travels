import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Read_MobileData() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <Nav.Link className='text-dark' onClick={() => setLgShow(true)} >Mobile Data</Nav.Link>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
             Mobile Data
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            I have major respect for my great aunts who backpacked Europe for six month in the 1950s, crossing the Atlantic in a passenger ship armed 
            with a travel book. However, these days we have far more conveniences that they never did back then. The most useful tool in my opinion is of course 
            the smart phone! Now it should be obvious to everyone that wifi is all over the place, many cafes, hotels and restaurants have it. However, I am a very strong 
            proponent of getting mobile data. I've traveled with and without mobile data, having it is always way easier than not.  

            
            
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_MobileData;