import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Jiufen() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Jiufen <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Jiufen
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
        Jiufen (九份), is a small town located in the mountains east of Taipei. Though it’s a mountain town, it’s located very close to the coast and has a nice ocean view. The area of Jiufen was very lightly populated until it experienced a gold mining boom in that late 19th century which intensified under Japanese colonial rule. Eventually the mining declined and was shut down in 1971, which naturally had detrimental effects on the town. However, in the 90s Jiufen experienced a revival due to a tourist boom. This tourism increased further when people noticed a great resemblance between Jiufen and the town from the Miyazaki film, Spirited Away. What also helps is that Jiufen is fairly accessible and only takes about 45 minutes by bus from Taipei.  I visited on what was unfortunately a very rainy day in July 2023 but in spite of the rain, I really enjoyed it. The town is of course jammed with tourists and shops selling souvenirs which can be a negative but it has a great aesthetic and the people add life. One of my favorite features is the narrow streets lined with hanging lanterns which makes for very cool photography. There was also a nice mix of restaurants and street food vendors. Food is much more exciting to me than souvenirs so I was happy to try some sweet colorful pudding and a Taiwanese sausage on a stick. The most iconic spot in Jiufen is definitely the Jiufen Amei Tea House, a building with a striking exterior adorned with lanterns and hanging plants. Many people wait around to see it at night, but for my trip the daytime was good enough for me. If you’re in Taipei and have time, Jiufen makes for an awesome day trip!  

        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Jiufen;