import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Lao_Jungle() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Tiger Waterfall <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Tiger Waterfall
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Tiger Waterfall is located within a km wide gorge on the western rim of Laos's Danyai Bolaven Plateau within the Dong Hua Sao National Bio-Diversity Conservation Area
            about 40km east of the city of Pakse. I traveled there in December of 2013 along with a group of my close family friends who originally came from Laos. What took 
            us to this remote corner of the country was a ziplining excursion we signed up for. We were taken by van from Pakse to a village on the northern edge of the biodiversity
            area. The drive took about two hours, mainly on bumpy dirt roads, and the small village would have likely been lost from memory if it hadn't been full of coffee fields. 
            I had actually never seen a coffee plant before, so getting a close at them in addition to the piles of drying beans was very interesting for me. In the village, 
            we were outfitted with harnesses and then led along a trail through the fields and into the trees. As we moved deeper, the foliage thickened and everything became much 
            more lush and healthy looking. This was also my first time in a tropical environment before so everything was extra exotic and fascinating. We hiked for some before we 
            reached a ladder leading up to a high platform in a tree where the first zipline awaited us. Up there we were shown how to clip into the zipline and also given wooden sticks to 
            grind against the rails for slowing down. I believe this was also my first time ziplining so as you can see, it was a trip of many firsts. I guess I can only describe it 
            as exhilarating as it was surreal, flying at high speed through the vibrant canopy of that lush rainforest made me feel like I was in a scene out of James Cameron's Avatar.
            Each time there was just too much to see and take in but not enough time to do so properly, maybe there never could.   
            The rest of the day consisted largely of zipping from one tree platform to the next as we worked our way down the valley. The culimating event was definitely going directly 
            over Tiger falls, again just utterly surreal flying over and looking down at this monstrous waterfall gushing off the edge of the plateau and into this hidden jungle valley I'd been led into. 
            After hiking and ziplining we reached a camp of treehouses near the bottom of the waterfall where we were to spend the night. There, we were served food and lots of coffee and also given some free time to go 
            down and swim in the stream. I decided to take the opportunity and left most of my clothes on a rock while I jumped in. Later that evening I became aware of some mysterious
            bites and swelling on my body which needless to say alarmed me. Had something bitten me in the water? Climbed into my clothes and bitten me after I got out? I never found out, but luckily it all 
            dissipated by the next morning and my fear of succumbing to some rare tropical pathogen didn't materialize. The next morning we did a few more ziplines and then took the arduous hike 
            up and out of the valley and back the way we came. This involved some rock climbing which also treated us to spectacular views of the valley and waterfall. I didn't book that trip, 
            and this was over ten years ago now, but if you're ever in southern Laos, definitely look into an excursion to see the rainforest and waterfall.              
    
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Lao_Jungle;