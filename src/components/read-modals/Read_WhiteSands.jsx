import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_WhiteSands() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >White Sands, New Mexico <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            White Sands, New Mexico
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            White Sands National Park, is located in southern New Mexico, about a 30-40 minutes drive north of Alamagordo. The Sand is true to its name as it is composed of pure gypsum. 
            The minerals are dissolved in nearby mountains and carried by rain and snowmelt into the Tularosa Basin below where they are deposited as evaporites and then feed into the dune field. 
            The national park is not particularly big, you drive in by car and after about 25 minutes of driving you reach a turnaround. But along the road there are numerous cleared out parking lots, and
            pulloffs. The park features some marked hikes through the dunes, campsites, places for picnicking, and even sand sledding if you bring or buy a sled from the visitors' center. I would definitely 
            recommend a visit to White Sands if you're in the area, just make sure to bring shades, sunscreen, and plenty of water, especially you plan on going for a hike. 

        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_WhiteSands;