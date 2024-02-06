import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Read_finding_accomodations() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <Nav.Link className='text-dark' onClick={() => setLgShow(true)} >Finding Accomodations</Nav.Link>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Finding Accomodations
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Usually after booking plane tickets people move on to the next logical step which is finding a place to stay for their trip. Personally, 
            I like to use Booking.com, though there are plenty of other options too. Airbnb can be controversial in some places, though I think 
            that's more so in generally overtouristed locations. Anyway, while you're browsing for accomodations make sure to also DO YOUR RESEARCH, 
            look at a map of the city, see what's around, and choose your accomodations accordingly. Find out where the ammenities and things worth 
            seeing are and consider how easily you can reach them from your accomodation. Walking distance? A few stops on the bus or metro? Or 
            does it take an hour with two bus transfers and a train? Access to the airport is also an important consideration. Don't forget to check 
            the neighborhood too, are there cafes and restaurants nearby? Or is it all sterile office parks? My best experiences 
            have been when I've found a relatively quiet neighborhood within a 15-20 minute walk from a major train station with lots of different 
            intersecting lines. Choose according to your preference and budget, but don't blindly book a hotel without looking at a map. 
            
            
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_finding_accomodations;