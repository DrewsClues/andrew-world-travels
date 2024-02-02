import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Shan_Hills() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Shan Hills <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Shan Hills
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            In the East of Myanmar is the state of Shan, which is dominated by dense forests and a series of north-south highland belts composed of low mountains and rolling hills called the "Shan Hills". 
            About 200km east of Old Bagan is a mountain town called Kalaw which is situated in one of these highland belts. Kalaw is a popular spot for outdoor activities and also just a holiday getaway due 
            to its cooler temperatures. I traveled to Kalaw from Bagan by van in August 2017 during my solo backpacking trip of Myanmar. There in Kalaw, I signed up for a two day guided trek from Kalaw to Inle lake below. 
            If I remember correctly, our group consisted of six people: myself, our guide from Myanmar, two German girls, and two French-speaking girls from Switzerland, one of whom identified as a self-avowed communist.
            We set out in the morning from Kalaw in the back of a truck and were then dropped off by the edge of a forest where our real trek began. I don't want to sound like a cliche White boy, but for myself, as an American from the developed world, it was really like 
            stepping into another realm. The highlands are inhabited by a patchwork of ethnic groups who even living within kilometers of each other, less at times, speak their own languages and if I remember correctly, 
            the women denote themselves by wearing different colored headwraps. Regardless of ethnicity, all the people seemed to have the same lifestyle, subsistence farming of rice, and vegetables like eggplant. 
            While trekking along the dirt roads among the rice paddies, I saw whole villages working side by side in the fields while the children ran around at play. It of course looked like back breaking work, 
            much more difficult and less comfortable than my own life in a modern city. My communist companion lamented that we are rich in our countries because they are poor, and that the children there couldn't 
            dream of going to school or becoming doctors etc. I don't know about us being rich because they are poor, but becoming doctors or lawyers, she was almost certainly right about that. I don't know what sort of educational 
            opportunities the child of a highland subsistence farmer in Myanmar recieves, but I can only assume they're slim to non-existent. However, those questions and concerns aside, I could clearly see the community those people have, 
            working side by side, neighbors, and extended families all together doing the same thing, united in purpose. I couldn't help but contrast that with society in developed countries where many people grapple with loneliness, 
            depression, and a lack of meaning in their lives. I am grateful for my life and all the comforts and opportunities that have come along with it, but there's certainly value in that strong sense of community we modern societies 
            have largely lost. Anyway, moving along, the countryside was lush and beautiful and it was fascinating to see such a different way of life from my own. Though quite quite undeveloped, the highlands are not wholly so, 
            as there was at least some electricity up there, as well as cell service. This limited penetration of modernity led to some bizarre and amusing asynchronies. The most striking to me was when a farmer passed us on a rather primitive wooden cart (even the wheels) pulled by 
            a water buffalo, all while jamming out to music streaming from his smart phone by his side. We spent the one night of our trek in a two story house in a small village. Our guide went elsewhere, but us five guests were 
            served a platter of rice, thin fried bread (almost like chips), and lots of vegetables. You could definitely tell the food was all grown right there which was pretty cool. We then slept in futon style beds on the floor which were luckily warm enough to protect us 
            from the chilly mountain air. The next day we continued on our way down from the highlands towards our destination, Inle lake, where a boat was waiting to take us to our dropoff point, a small town called Nyaungshwe. 
            I really enjoyed my trekking experience in the Shan Hills and if you're up for a bit of mud and a lot of walking, I definitely recommend it to anyone visiting that part of Myanmar. 
            
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Shan_Hills;