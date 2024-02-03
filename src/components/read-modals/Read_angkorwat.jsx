import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Angkorwat() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Angkor Wat <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Angkor Wat
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Angkor Wat is a massive Hindu-Buddhist temple complex located near the city of Siem Reap in Northwest Cambodia. The temples
            were part of the city of Angkor, the capital city of the Khmer Empire which mainly covered Cambodia, Laos, and Thailand, but also parts of Vietnam and Myanmar. 
            Angkor Wat was originally built in the 11th century AD as a Hindu temple 
            but was over time converted to Buddhism. Like most Khmer temples, a mix of Buddhist and Hindu iconographies are incorporated. 
            It's hard to describe the scale of this archaelogical site, there's simply so many sites to look at and most of them are multi leveled and 
            feature many different rooms and passages. Nature has penetrated a number of the sites over time, and although the trees and vines are not good for the structures,
            they certainly do add their own beauty to them. The temples are large and imposing but also very intricate when you get close enough to see 
            how almost every surface is adorned with carvings of humans, gods, and creatures of myth. I had wanted to visit Angkor Wat since I was a kid and finally 
            had the opportunity to go while I was on a backpacking trip of Southeast Asia in summer of 2016. The place really does overload your senses, everwhere you look 
            there's something screaming for your attention. No picture, or written description could do the place justice. It's really somewhere you need to experience 
            in person. If you're doing a trip of southeast Asia, definitely don't skip Cambodia's Angkor Wat!

            
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Angkorwat;