import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Bukhansan() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Bukhansan National Park <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Bukhansan National Park
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Bukhansan National Park (북한산국립공원), is a fairly large national park located just to the north of Seoul. Due to its proximity to such a large population center, it receives about 5 million visits per year. The park can be accessed on all sides, by bus, subway, and car. The park entrances tend to be 
            very well developed and are packed with various convenience stores, restaurants, cafes, outdoor gear shops, and oldschool market stalls selling traditional food and gear too. One can easily arrive there empty handed and be fully stocked with food, drinks, and missing equipment for the mountain within 20 minutes. 
            From my years both studying and living in Seoul, I've lost track of how many times I've visited this park. It's beautiful in all four seasons, and is especially nice on a clear day. If you have the time and energy, a sunrise hike up to the highest peak (백운대) is well worth it. 
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Bukhansan;