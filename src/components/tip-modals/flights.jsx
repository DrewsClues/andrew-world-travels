import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Read_flights() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <Nav.Link className='text-dark' onClick={() => setLgShow(true)} >Flights</Nav.Link>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            About Flights
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            For many people browsing flights is the first step of planning any trip. If you have a single non-negotiable destination like going to a 
            wedding, or visiting relatives then it's obviously very straightforward, just book that. However, if you're flexible with your destination  
            things can be much more interesting. For most people, money is an object, so deciding where to go on a trip is closely related to cost. 
            Most of the time, though not always, flying somewhere nearby is cheaper than going to the other side of the world. As a rule of thumb, flying into 
            large airports will always be cheaper and offer better and more numerous itineraries than trying to fly to a 2nd or 3rd tier city. For example, 
            I recently traveled to Buffalo, NY, to visit family for Christmas. Searching for flights to Buffalo from Seoul brought up nothing but awful itineraries 
            involving razor thin layovers that would surely mean missing my connection. However, just two hours north of Buffalo is Toronto, Canada where I was able to 
            get a direct flight through Korean air for a lower price too! So what I'm saying is, don't just browse flights, but also it helps to look at the map too!
            The most popular website I know for finding flights is Skyscanner.com, they have an explore option that can let you see which destinations 
            have the best deals for your dates. Speaking of, it's much harder as a worker than as a student, but if you can fly on days like Tuesdays 
            or Wednesdays you're almost guaranteed to get much cheaper tickets. Anyway, Skycanner.com can help you find decent destinations and then you 
            can either book through the services they link you to, or just go directly to the airline webpages and book there. Particularly if you're taking a longer trip, 
            it can be fun to book a multi city ticket, this can allow you to fly to destination A, then B, then C etc. or fly into airport A, then travel overland 
            to a different city and depart from airport B. This is great for countries like Japan that have multiple large cities worth visiting. If you are doing this for one country, it's really no issue. However, if you intend to fly into one 
            country then out another, problems can arise, particularly if the first country is sensitive to illegal immigration. Even if you have a ticket proving 
            you're flying home eventually, the airline may require specific proof that you intend to leave the first country. Back in 2018, I had a flight to Singapore from Tokyo
            and later intended to travel overland to Kuala Lumpur, Malaysia and then fly elsewhere. The staff at the check-in counter refused me my boarding pass, until I booked 
            a bus ticket out of Singapore and showed them the receipt on my phone. So, make sure you take these things into account to avoid any delays or extra stress and hassle. 
 
            
            
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_flights;