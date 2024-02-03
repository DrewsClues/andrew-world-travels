import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_LuangPrabang() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Luang Prabang <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Luang Prabang
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
        Luang Prabang is a relatively small city in North central Laos. It's the former royal capital of Laos as well as the capital of the 
        historic kingdom of Luang Prabang. The city is very small but picturesque and a large portion is designated as a UNESCO world heritage site. 
        I traveled there in December of 2013 as part of my tour of Laos along with family friends. It's a very charming little city on the Mekong river, 
        and features both Laotian and French colonial architecture. Some notable places to visit in and near the city are <a href='https://maps.app.goo.gl/WJNmtGHg9VUteRPB7' target='_blank'>Phousi Hill</a>, where you 
        can get panoramic views of the city and valley, <a href='https://maps.app.goo.gl/pghLFxBUSo7NfPcT6' target='_blank'> Luang Prabang Night Market</a>, 
        <a href='https://maps.app.goo.gl/EpU2CmY6a3nEXcfJ9' target='_blank'> The Luang Prabang National museum</a>, formerly a royal palace, and lastly the many waterfalls and 
        and bright blue and green pools of <a href='https://maps.app.goo.gl/BL3CvPfeJdhZsNUc8' target='_blank'> Kuang Si Waterfall</a>. Luang Prabang holds a special place in my heart 
        because it was the first place I had ever seen backpackers before. Yes, sweaty unkempt mainly European & Australian youth plodding along from hostel to hostel in southeast Asia, getting up to 
        all kinds of foolishness no doubt. It feels a bit embarassing now that I'm writing about it, but at that time, still a high school student, less than two weeks after turning 18 
        it had a big effect on me. There they were, these young people my age, traveling that extremely foreign place on the far side of the world by themselves. Something 
        that seemed so intimidating and unfathomable for me at the time. I figured if those people could go travel the world like that, then so could I, and so I did. So, if you're 
        vacationing or *puts nose in the air, "traveling" Laos, Luang Prabang is a must see spot! 
        
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_LuangPrabang;