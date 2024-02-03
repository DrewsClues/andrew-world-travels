import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Seoul() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Seoul <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Seoul
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Seoul (서울), is the capital and largest city of South Korea. I came here for the first time in 2016 as an exchange student at Korea University (고려대학교) and have loved Seoul ever since. 
            As it has now been years that I've lived here, I have come to know the city quite well. 
            That being said, it's hard to know where to begin as there is so much... too much to be said about Seoul. 
            The city is sprawling and has something to offer for almost everyone. 
            I'll start off by saying that it's a very convenient and safe place to be, both if you live here or are just visiting. There's an extensive and low cost public transporation network, petty crime is quite low, and there are convenience stores everywhere. The city is composed of 25 unique districts that 
            offer their own shopping, nightlife, sightseeing, entertainment, and culinary experiences. For young people, some (not all) of the more popular areas are Sinchon, Hongdae, Itaewon, Gangnam, Seongsu, and Apgujeong. Some popular areas for tourists are Myeongdong for shopping and street food, Gwanghwamun for easy access to Gyeongbokgung palace, the Hanok village and Deoksugung Palace. 
            Another popular spot for tourists is Namsan mountain, located in the center of Seoul and perfect for a panoramic view of the city. Another great spot for a bird's eye view of the city is the observation deck of Lotte tower in Jamsil. Frankly though, Seoul is not the most photogenic city in the world, don't expect anything like an old European city center. Much of the city is copy paste grey/white high rises and this 
            is made even worse on days when air pollution is higher. Seoul is more somewhere to experience than something to look at. Going to karaoke, visiting unique cafes (there's a sea of them), gaming at a PC room, trying out the Korean cinema experience, going to a Korean spa, and of course the FOOD!! Korean food is great on its own, but there's also loads of options if you want Western food, or dishes from other Asian countries. 
            Last, the people can appear a bit stiff and serious at times, but most of them are extremely kind and friendly if you break the ice. So definitely check out Seoul! 
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Seoul;