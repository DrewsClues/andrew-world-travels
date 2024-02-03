import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Read_About() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <Nav.Link href="#home" onClick={() => setLgShow(true)} >About Me</Nav.Link>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            About Me
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            My name is Andrew Thomas and I'm an American based out of Seoul, South Korea. I spent a year here on exchange at Korea Univeristy in 2016, and really 
            fell in love with the place. After graduating from Northern Arizona University with a Bachelor's in Geology in May, 2019 I returned to Seoul as a teacher. 
            Teaching has been both a difficult and very rewarding profession, I never expected to learn so much about patience, communication, and time management. 
            It also turns out that even working as a teacher involves a fair bit of Microsoft Excel. Long story short, I became very interested in optimizing admin work with 
            Excel which led to me learning Python, to then earning a diploma from a 32 week MIT Full Stack Developer program. I then switched gears to studying Korean with 
            a tutor for several months in order to pass the TOPIK 2 Korean exam which then allowed me to get an F-2 Residency Visa for South Korea. I enjoy my job teaching, and 
            it has afforded me many opportunities and benefits, but I feel ready to take my passion in programming further and become a software developer full time. I'm always
            looking for project ideas to hone my programming skills and add to my portfolio, so I created this webpage with that purpose in mind. I grew up in a military family 
            which meant moving all over the USA and the world. From 4th grade to 6th grade my family was lucky enough to live in Hessen, Germany which made it very easy for us to 
            travel around Europe. Those years in Europe were some of the best in my life and gave me a deep interest in traveling and experiencing other cultures which I've carried on into my adulthood. 
            Thanks largely to my family and friends, I've been fortunate to have many opportunities to travel throughout my childhood, University years, and even now as a worker when I have time off. 
            I thought it would be fun to make a webpage to show some of my favorite travel pictures, but that morphed into also giving basic information, to then telling my personal stories 
            here and there about where I've been. As I started digging through photos, memories really started flooding in. Memories I fear will become lost to time if I don't write them down 
            while I can. I'm not some travel guru and there's lots of information about everywhere and everything on the internet only a click away. But for what it's worth, 
            these are some places I've been, and some of my thoughts and experiences related to them. Also, I'm using my own pictures for these posts so the quality can vary 
            depending on what phone or camera I had access to at the time :) 
            
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_About;