import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Vat_Phou() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Vat Phou <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Vat Phou 
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Vat Phou is a UNESCO World heritage site located about 20km south of the city of Pakse in southern Laos. The site dates back to the 
            11th century AD and was originally a Hindu Temple of the Khmer Empire (Famous for the much larger Angor Wat site in Cambodia). 
            Although, Vat Phou is much smaller than Angkor Wat, it is quite beautiful and includes much of the same architecture and iconography. 
            I traveled there in December of 2013 for my trip to Laos along with close family friends. It was my first time visitng any kind of large temple 
            in Asia before. The grand architecture, religious symbols and figures, and the the intricate stoneworking on every surface is extremely impressive 
            and fascinating. I was largely ignorant of Khmer history and culture back then, so I had many questions about basically everything. Particularly 
            the many Buddhas with Nagas, or hoods of serpents around them, sparked my curiosity. As I understand it, the Nagas are semi-divine beings that 
            protect the Buddhas. Buddhism in Southeast Asia tends be a rich blending of elements from Animism and Hinduism  which leaves a lot to learn. 
            If you're visiting southern Laos, definitely visit Vat Phou for its Khmer architecture and hopefully also a lesson in history and local religion. Please 
            also be extra respectful if you go, it is not only an archaeological site but still a place of religious significance with many shrines where people continue 
            to pray.  
            
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Vat_Phou;