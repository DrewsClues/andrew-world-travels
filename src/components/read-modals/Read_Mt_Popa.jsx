import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Mt_Popa() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Mt. Popa <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Mt. Popa
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Mt. Popa is a long dormant volcano located in central Myanmar, about 50km southeast of Old Bagan, and 60km south of Mandalay. On the west side of the mountain 
            there is a sort of butte or spire of rock jutting vertically into the air, as I understand it this rock is called Taung Kalat. Atop Taung Kalat is the Popa 
            Taung Kalat temple and monastery which can be reached via 777 covered steps. It's a popular place for both tourists and also Buddhist pilgrims. 
            I visited Mt. Popa during my August 2017 solo backpacking trip of Myanmar. I was staying in Bagan at the time and decided to share a taxi with two Dutch guys 
            I had met on my bus ride from Mandalay. What was very peculiar and a bit startling at times is that the taxi was designed for left driving roads, but in Myanmar 
            people drive on the right. Like other British colonies, people drove on the left until 1970 when the then dictator of the country suddenly decided to change to the right. 
            Anyway, we reached Mt. Popa after about an hour long drive and were dropped off in a small village by the entrance to the steps. There by the entrance, there were
            women with plastic bags full of bananas which they were throwing onto the ground for a group, no horde! A wild, ravenous horde of monkeys! My god there were so many monkeys, 
            shrieking, pushing, fighting to fill their little hands with as many bananas as they could carry off. There was also a constant crashing and banging from above of their companions
            leaping across the tin rooftops of the village. The rest of this story is mainly one of monkey mayhem as that was the most memorable thing about this excursion for me. 
            I am quite skeptical of monkeys because of their crazed expressions, erratic behavior, dirty looking hand-feet, and even moreso due 
            to stories of backpackers getting scratched or bitten and then needing god knows how many medical tests and treatments. So, the climb up the 777 steps would 
            have been unpleasant on its own with the heat and humidity, but on top of that we had to dodge monkeys as they ran up and down the steps beside us and 
            duck while they leapt through the rafters above our heads. I am not totally hostile to monkeys by the way, the calmer ones are fine by me, I got some good up close 
            pictures of a mother and its baby, and another on a railing with a mountain backdrop. It's just the wild aggressive ones which put me off. When we did finally reach 
            the monastery at the top of the steps, we were greeted to a beautiful view of the main mountain, and also the plain stretching off towards the Irrawady river to the west. 
            There were also numerous gilded stupas and shrines piled high with offerings left by pilgrims. 
            To add some security, there were a number of men walking around with slingshots to defend people from aggressive monkeys which added a bit more calm to the place. However, 
            once we were ready to head down we passed through a shrine and found a deserted section of stairs crowded with more monkeys. It wasn't just me, all three of us were unnerved by the 
            creatures, we cautiously walked down the stairs expecting them to move but they didn't. At this steep section of stairs the rafters were also much lower, I looked up 
            and made eye contact with a large male, his eyes suddenly widened and he let out a shriek and began charging up the rafters in my direction, nearly at face level. It was too much!
            The three of us quickly dashed back up the stairs and into the shrine, we woudln't go down that way until a guard scared them off with his slingshot. 
            So, Mt. Popa was certainly memorable, I value the memories now. However, if you're afraid of monkeys you may want to reconsider this location. 


        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Mt_Popa;