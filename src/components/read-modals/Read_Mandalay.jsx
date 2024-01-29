import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Mandalay() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Mandalay <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Mandalay
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>

        Mandalay, is a city located in north central Myanmar and the second largest city in the country after Yangon to the south. 
        I traveled there in August of 2017 as part of a solo backpacking trip during my summer break when I was a university student. 
        Back then the country was relatively much more stable and under democratic rule. However in February 2021, the democratic government was overthrown 
        by the military in a coup and since then a Junta has ruled the country. This led to mass protests, police crackdowns, and an ever 
        intensifying war of resistance by the people that as of writing this on January 29th, 2024 appears to be gaining ground and may soon 
        toppled the Junta. My experience in Myanmar is therefore of a bygone era and many things are outdated. 
        However, I want to share them anyway, hopefully one day the country will once again be stable, democratic, and at peace. When I flew to Mandalay I had 
        already traveled to neighboring countries like Laos, Cambodia, Vietnman, and Thailand, so I was expecting something similar. However from the moment
        I arrived, I was totally charmed with how different the country was and it probably helped even more that my van ride to my hostel and first introduction was during 
        the golden hour. The street were so alive with activity, families walking around, motorbikes packed with comically large loads of rice sacks or chicken cages, 
        and lots of Brahman cattle walking along the road which was quite exotic for me as well. TO BE CONTINUED..............
            
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Mandalay;