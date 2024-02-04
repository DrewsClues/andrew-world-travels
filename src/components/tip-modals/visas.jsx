import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Read_visa() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <Nav.Link href="#home" onClick={() => setLgShow(true)} >Visas</Nav.Link>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            About Visas
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            I'm sure most people are familiar with the term Visa, it's quite a common term. However, many people, particularly those with more 
            powerful passports, can neglect to take them into account when making travel plans. With an American passport for example, there are many countries such
            as Japan where you are free to visit at a moments notice and stay in for up to 90 days visa free. However, there are many other countries where this is 
            not the case. There are many other countries where tourist visas are required. This can range from simple visa on arrival, to a more drawn out formal process
            of sending your passport and documents to your desired country's consulate and waiting for a response. Whenever you're planning a trip to a new country, always 
            make sure to do your research about visa requirements in advance, otherwise you can be in the awkward position of arriving at the airport and being informed you 
            won't be allowed on your plane because you lack a visa. This recently happened to a friend of mine when she tried to take a trip to Vietnam. It's an extra chore 
            to deal with, but most of the time it's really not such a big deal. For most countries, there's a plethora of online agencies through which you can apply for a tourist 
            visa. It's always better to do this sooner than later because most of the time a few business days is required for processing. Luckily in a pinch there's usually 
            expedited processing options available which can take you down to less than an hour, but this can come with a steep fee. In my experience, once your visa is processed, 
            you receive a couple of documents via email to print out, then you just present them to the relevant officer once you arrive at customs. Another important thing to note, 
            these visas always cost money and it's usually paid at customs when you arrive, so for convenience it's always best to arrive with the cash in hand, preferably in USD. 
            Another thing to note, passport photos are also often required when doing your visa at customs, so again for your convenience, just get it done in your own country 
            and bring a few copies to avoid wasted time and extra fees at customs. 

            
            
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_visa;