import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Kyoto() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Kyoto <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Kyoto
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
        Kyoto (京都), is a city of around 1.5 million people and was actually the Imperial Capital of the nation until 1868 when the Imperial seat of power was moved to Edo, now Tokyo. As the city of Kyoto was the Imperial capital for centuries, it is a major center of Japanese culture and is home to many popular tourist attractions. I have traveled to Kyoto twice, the first time was by myself for a couple of days in July of 2019 and the second time was in May of 2023 with my mother and sister for a day trip.  I saw significantly more during my 2019 trip, however I really don’t recommend visiting in summer. Most of the attractions involve being outdoors so the heat and humidity can make you quite miserable, even if the sights are beautiful. May is a far more pleasant season to be touring there, though even then it was a bit warm. I can’t overstate how many temples and shrines there are in the city, they make up a bulk of the popular tourist attractions such as Fushimi Inari Shrine (a whole mountain of red Torii gates), Tenryu-ji temple, Yasaka Jinja, Higashiyama Jisho-ji, Kinkaku-ji, and the Heian Shrine to name a few. Some other popular sites are Nijō Castle, the Kyoto Imperial Palace, Arashiyama Bamboo Forest, Kyoto Tower, and the Gion area where you can see Geisha walking about in their traditional clothing and makeup. If you’re looking for a great place to learn about Japanese history and culture, or just take great pictures of quintessential Japanese architecture, then Kyoto is a great place to check out. You can spend a few nights there, or stay in Osaka and easily take a day trip as it's only about an hour by train. 
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Kyoto;