import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Bagan() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Old Bagan <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Old Bagan
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Old Bagan is an archaelogical site located about 150km southwest of Mandalay, on the east bank of the Irrawady river. It was the capital of the Bagan Empire which 
            stood from the 9th to 13th century. The city was a center of cultural, religious, and economic signficance and boasts thousands of stupas, temples, and monuments. 
            I traveled there in the summer of 2017 as the main event of my Myanmar trip and it did not disappoint! The temples are fairly dispersed so I was advised to rent an
            electric motorbike for convenience which I did. Two things kept me in awe of the place, first of course was the vast number of temples that easily rival Cambodia's Angkor
            Wat in splendor, the second thing which actually easily beats Angkor Wat was that I was almost totally alone in most sites I visited. Seriously, it was like a ghost town at most temples, 
            I really couldn't believe it! There were more animals than people, the lands between temples are cultivated so there were some people working the fields and herding 
            Brahman cattle and goats. The farmers and cattle actually enhanced the place, it felt older yet more alive at the same time. I believe this has since changed, but at that time people were also allowed to climb up on top of the temples and stupas granted they removed their shoes.
            This allowed for some great picture taking opportunities and a nice view of the incredible skyline dominated by many stupa and temple spires. 
            It was quite spectacular getting to explore this marvel of history in near solitude. Though on the first day I ran into a couple of Dutch guys about my age whom I met on my bus ride in, 
            they invited me to join them and I agreed. So I got some alone time, and also got to share the experience with others which was a solid mix for me. My favorite memory was 
            watching the sunset from atop one of the temples, the incredible flaming colors of the skyy behind the darkened silhouttes of the ancient monuments of Old Bagan is something 
            that will stay with me forever.
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Bagan;