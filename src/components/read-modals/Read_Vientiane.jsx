import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Vientiane() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Vientiane <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Vientiane 
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>

            Vientiane is a city located in Western Laos on the east bank of the Mekong river, just across from Thailand. Although it's a relatively small 
            city of only one million inhabitants, it now makes up a fairly large proportion of Laos's population. As of writing this now in February 2024, I 
            have only been to Laos once in my life. I traveled there in the winter of 2013/2014 as a guest of close family friends, Dewee & Greg, their two 
            children Sierra & Jeffrey, and Dewee's extended family who all originally came from Laos. 
            Dewee's family story is quite harrowing, and I don't think it's appropriate to go into detail about it here. I'll only say that they fled the 
            country in the mid 1970s when the Royal Lao government was toppled by the communist Pathet Lao forces. Dewee & Greg, their mother, and sisters all planned this 
            trip to visit both the country and their relatives who still reside there. For my part, it was really an honor and privilege to be invited along 
            for the journey. I was just a high school student at that time, and it was my first ever trip to Asia, and the farthest I had ever been from home. 
            It was a very long trip, something like 15 hours from Los Angeles to Taipei, 3 hours to Bangkok, then another hour long flight to Vientiane. 
            Stepping out of the airport was complete sensory overload, hammer & sickle flags all around, big communist propaganda billboards, motor scooters zooming every 
            which way, dogs running about, strange plants and buildings, unfamiliar sights and smells, I could go on and on. But it was very surreal and even more so 
            in my sleep deprived state. I could be wrong, but I believe the first night we stayed at Dewee's cousin's home and slept on futon style beds on the floor, as is 
            common there. It's funny looking back on it but I definitely felt very culture shocked, for comfort or security or whatever, I curled up that first night and listened 
            to country music on my ipod. The next day we headed out of Vientiane to go and visit the rest of the country and didn't come back to do sightseeing until two weeks later. 
            It took a bit of time for that feeling of unease to leave me, but once it did I felt very excited and ready to embrace all the new sights and experiences 
            coming from every which way. During our sightseeing in Vientiane in the last days our trip I felt totally comfortable being there. My favorite locations 
            were the <a href='https://maps.app.goo.gl/tdPKYNKRf4dE7eHW8' target='_blank'> Patuxay - Victory Monument</a>, a sort of Southeast Asian style Arc de Triomphe, 
            and <a href='https://maps.app.goo.gl/maVfbzNRynPJ843R8' target='_blank'> Pha That Luang</a>, a Buddhist temple with a very large golden stupa. There were also 
            many great dishes to try like Laap, Khao jee pâté (Lao's version of Banh Mi), grilled salted fish, noodle soups, and always a side of sticky rice of course. If you're touring Laos,
            don't skip some time looking around Vientiane. 
            
            
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Vientiane;