import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Taipei() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Taipei <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Taipei
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
        Taipei (臺北), is the capital city of Taiwan, or Republic of China as it’s officially called. 
        I want to focus on the city, but I’ll just briefly touch on Taiwan’s unique status. 
        The Chinese civil war of the 20th century is quite complicated but essentially in 1949 the Nationalist forces under Chiang Kai-shek (KMT) 
        were driven off the mainland by the communist forces under Mao Zedong. The nationalists held out in Taiwan and established the ROC, while the 
        communists established the People’s Republic of China (PRC), on the mainland. Both the ROC and PRC hold that there is only one China and that 
        they are the sole legitimate government of that one China. With that out of the way, I traveled to Taipei in July of 2023 with my girlfriend 
        for our first international trip together. We stayed near Banqiao  station in New Taipei City at <a href="https://maps.app.goo.gl/PZbhjn2yczvri1cE9" target="_blank">Hotel Cham Cham</a>. 
        This turned out to be a great location and gave us easy access to both trains and buses going all over the area. Besides easy transportation, the area around the station is great in its own right. 
        There are loads of good places food such as <a href="https://maps.app.goo.gl/9REkeXkB9cRgcKW36" target="_blank">Xiang Duck</a> for roast duck, 
         <a href="https://maps.app.goo.gl/WYMH6jbHszHgqMRc6" target="_blank"> Louisa Coffee</a> for coffee obviously, 
         <a href="https://maps.app.goo.gl/MHdtV9XkKhaaVCdb9" target="_blank"> Meihua</a> for beef noodles and dumplings, and  
         <a href="https://maps.app.goo.gl/TjLygK8DoVhkmKGN7" target="_blank"> Banqiao market</a> for street foods like lamb skewers, potato puffs, and hugging sausage which is a Taiwanese sausage tucked inside a split rice sausage and covered in ginger, garlic, and spicy sauce. 
        There’s also a great breakfast spot called 
        <a href="https://maps.app.goo.gl/3Nyq8rZiYF2WMem3A" target="_blank"> 早喚 Morning Call</a>,  which serves milk tea and amazing Taiwanese breakfast foods like rice rolls and Taiwan’s signature omelets wrapped in flatbread. 
        Additionally, there’s a nearby park that includes ponds teeming with fish and turtles, who will look up at you expectantly if you stand by the waters edge. 
        Some other notable sites around the city are Taipei 101 tower, Daan forest park, Bangka Longshan Temple, the Chiang Kai shek memorial, Bopiliao Historical Block, 
        and the Ximending Walking District. For amazing beef noodles and side dishes one can also visit <a href='https://maps.app.goo.gl/ZVqx3gq9ucsAn18F9' target='_blank'> Yongkang Beef Noodles</a> south of Dongmen station. My girlfriend and I had a great experience in 
        Taipei and I'm not sure why I didn't visit sooner. The food is incredible, transportation cheap and easy, the convenience stores are probably only 2nd to Japan's, and the streets are also fairly lush with 
        trees and potted plants outside homes and shops. Definitely don't skip Taipei if you're doing a tour of East Asia, or live here and are looking for a short getaway. 


        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Taipei;