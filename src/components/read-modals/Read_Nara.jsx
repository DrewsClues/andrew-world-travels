import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Nara() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Nara <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Nara
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
        Nara (奈良市), is a relatively small city of around 360,000 people located in Japan’s Kansai region. Nara is around an hour by train from both Osaka to the west, and Kyoto to the north which makes it an ideal place for day trips if you’re staying in either city.  The main attraction of Nara is the very famous Nara park which sits on the western edge of Mt. Kasuga Primeval Forest. The park and forest are filled with numerous temples and shrines but the most unique thing to see are Nara’s sacred deer. As I understand it, people believe the deer are messengers of the gods and therefore under their protection. There are over 1,000 Nara deer who wander the park, and readily approach people to ask for food. They have learned to ask for food by politely bowing. They don’t always do it immediately but will follow your lead if you bow to them first. There are numerous vendors in the park who sell stacks of crackers to feed to the deer. If exchanging bows with deer among trees and moss covered shrines sounds like your thing, you should make a stop in Nara for a very memorable experience.  


        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Nara;