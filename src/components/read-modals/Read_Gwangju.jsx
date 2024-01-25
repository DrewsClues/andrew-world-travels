import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Gwangju() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Gwangju <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Gwangju
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
        Gwangju (광주), is a city located  in Korea’s southwest Jeolla region and is South Korea’s 6th largest metropolitan area. The city is fairly small compared to Seoul, standing at only about 1.5 million people. I traveled there in the late summer of 2021 for a short trip with friends, as it was only a couple of days my experience is fairly limited. My impression coming from Seoul is that Gwangju is a much more laid back place and at least in fashion, things are behind Seoul by a few years. While there in 2021, the style that students were wearing strongly reminded me of Seoul’s in 2016. Gwangju is known for its food, one of the best was duck stew (오리탕) which is served with lots of minari (미나리) which is a type of water celery. Two of the more popular areas for entertainment are Geumnam-ro Street (금남로거리), and Dongmyeong-dong Street (동명동 거리) which have numerous cafes, restaurants, and places to shop.  A great place for getting outdoors is the nearby Mudeungsan National Park (무등산 국립공원). Hikes there begin in dense forests that eventually give way to open grassland once you reach higher elevations. It’s a relatively gentle hike compared to some other mountains in Korea, but it’s long and has many false summits. It feels especially long in the heat and humidity of late summer, but the views once you clear the forest are quite breathtaking. I would be remiss in not mentioning, that Gwangju is the site of a very tragic event in South Korea’s modern history, in the West often referred to as the Gwangju Uprising and as May 18, in Korea. The photo I used for this blog is actually from the memorial for that event. I won’t describe the Gwangju Uprising in detail but it was a sad moment in the Democratization struggle of the nation, you can read more for yourself <a href='https://en.wikipedia.org/wiki/Gwangju_Uprising' target='blank'>here.</a> If you’re looking to see more of Korea than Seoul, and want good food and a laid back setting, I definitely recommend Gwangju. 
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Gwangju;