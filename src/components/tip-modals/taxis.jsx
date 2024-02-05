import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Read_taxis() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <Nav.Link className='text-dark' onClick={() => setLgShow(true)} >Taxis</Nav.Link>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            About Taxis
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Depending on where you're visiting, taxis can be a very big part of travel or something you don't bother with. This usually depends on local 
            infrastructure, and costs. For example, in Tokyo, there's an extensive network of trains and buses, so taking a very expensive cab is usually kind 
            of a waste of money. However, in somewhere like Bangkok it can be far more reasonable to take a cab. Usually the first place this will come into play is at the airport 
            of your arrival. It's a good idea to research the transport situation in advance and see what your options are before you arrive. Better designed airports 
            have an integrated train or subway network, others have city bus stops, and some have shared van services that will drop every passenger off at their respective 
            accomodation. Additionally, many countries have services like GRAB and UBER which can be a great option too. 
            However, we're here to talk about taxis, so let's assume you've chosen that. In many countries, airports are a fantastic place to get SCAMMED. In many countries 
            expect to be greeted immediately by soliciting cab drivers, or absolutely mobbed in some cases, as happened to me in Kathmandu, Nepal. 
            Either way, you're a foreigner and many drivers will assume you're ignorant and therefore easily taken advantage of. Many times, after hearing where you're 
            going they'll quote you a flat rate significantly higher than what you should be paying for the distance, maybe double, triple or worse. If the taxi has a meter, many drivers will refuse 
            to use it, and just stubbornly repeat their rate. To make matters worse, it's hard to negotiate around this when you don't know how much you should be paying anyway. 
            Luckily, most airports have information desks in the arrival hall, go to one, show them where you want to go 
            and they can give you an informed answer as to how much you should expect to pay for a cab. Once you're armed with that information you can go out and begin looking for 
            a driver. Confidence is key, don't be rude to anyone, but be firm. Insist on the taxi meter, and failing that, haggle them down to within a comfortable range 
            of what you should be paying, maybe a couple of dollars difference. Also, always be willing to walk away, or at least pretend that you are. I've gotten plenty of drivers 
            to give me a better rate after saying something like "You can have a customer right now, or one of those other drivers will". Indeed, there are usually more drivers at any time 
            than there are waiting customers so drawing attention to that can help your cause. One more thing, it's best to do a bit of homework so you have a decent idea 
            of where it is you're going. I've heard of plenty of cab drivers take tourists in all sorts of circles to dramatically inflate the meter. Anyway, again be polite, be
            reasonable, but be assertive. 
            
            
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_taxis;