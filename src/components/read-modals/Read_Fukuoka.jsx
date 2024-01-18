import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Fukuoka() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Fukuoka <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Fukuoka
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Fukuoka (福岡市), is a city of around 5 million people located on the west coast on Japan's southern island of Kyushu. I traveled there by myself in late December of 2023 after having to 
            cancel my trip to visit family in the USA due to a blizzard. Due to the sudden nature of my trip, I had done little to no research, and hadn't made any plans. However, everything worked out 
            and I had a great time nonetheless. I stayed in a dorm room at hostel called <a href='https://maps.app.goo.gl/BgsXCasCyATtbpoL9' target='blank'>HafH Fukuoka THE LIFE</a> located just a few
            blocks west of Hakata Station. This turned out to be a great spot because within easy walking distance are some worthwhile locations like <a href='https://maps.app.goo.gl/oC8d22zZy7vHcYKZA' target='blank'>Canal City Shopping Center</a>, 
             <a href='https://maps.app.goo.gl/9wz9L4VRzJCTgmYe6' target='blank'> Kushida Shrine</a>, <a href='https://maps.app.goo.gl/PSSZ7zbqohwfrT2S7' target='blank'>Kawabata Shopping Arcade</a>, and just to the south is the island of 
            <a href='https://maps.app.goo.gl/4Sum5THu4PPySXg4A' target='blank'> Nakasu</a>, which features clubs, restaurants, and a night market. On my first day there, I basically meandered the length of the city just taking in everything. 
            I passed by <a href='https://maps.app.goo.gl/qsu818EQmvNkGvWt9' target='blank'>Kihinkan Hall,</a> a historical 19th century Western building. Then sat for a while in <a href='https://maps.app.goo.gl/pZhcv9UnCQcoberTA' target='blank'>Tenjin Central Park</a> which is overlooked by
            Fukuoka Symphony Hall, a structure that gives off a modern Gardens of Babylon vibe. After that, I stopped for coffee in <a href='https://maps.app.goo.gl/PLnxPGfn6mZrfmat9' target='blank'> Shintencho shopping district</a>, followed by a climb up to the top of 
            <a href='https://maps.app.goo.gl/JnJDb43Z4jqU9i8j9' target='blank'> Fukuoka Castle ruins</a>. Following my not quite birds' eye view of the city, I made it to<a href='https://maps.app.goo.gl/JnJDb43Z4jqU9i8j9' target='blank'> Ohori Park</a>, just as the sun was starting to set. 
            The temperature was perfect, flowers were blooming, and the park was alive with joggers, cyclists, dog walkers, children playing, and people paddle boating out on the lake. I finished off the day with a matcha ice cream by the lake, then had conveyor belt sushi for dinner.  The rest of the week
            I spent hanging out with people from the hostel, going out for foods like ramen and mostsunabe, and a half-day trip out to see the many shrines of <a href='https://maps.app.goo.gl/F34fXP7kiqiM5Ao37' target='blank'> Dazaifu</a>. Highly recommend Fukuoka! I would 100% go visit again! 
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Fukuoka;