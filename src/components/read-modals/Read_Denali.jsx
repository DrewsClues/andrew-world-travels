import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Denali() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Denali National Park <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Denali National Park
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>
            Denali is a massive national park & preserve located in central Alaska, between Fairbanks and Anchorage. The park is quite huge and is actually 
            similar in size to the entire state of New Hampshire. It is home to and named after Denali, or "The High One", which at 20,320ft or about 6,100m, 
            is the highest mountain in North America.  The park is also home to a large variety of wildlife such as moose, elk, caribou, wolves, Dall sheep, black
            bears, mighty grizzly bears, beavers, and ever present arctic ground squirrels. The park also features environments like borreal forests, large expanses of alpine tundra, 
            and of course the glacial terrains of the higher altitudes. The park can be accessed from both North and South, though I believe it's easier done from Fairbanks. 
            Visitors can take round trip tours of the park on dedicated buses which will take you up and down the park's single dirt road. From the bus and various viewpoints you 
            can get a look at Denali's many incredible landscapes as well as the many majestic animals that live there, it's a bit like a North American safari really. A great place 
            for camping and viewing the mountain of Denali is Wonder lake, located at the end of the park road. Although there are very few hiking trails in the park, well prepared 
            and adventurous visitors can apply for backcountry permits that allow you to backpack and explore the wilds of the park. In June of 2012, then a 16 year old, I traveled to Denali 
            for a month of volunteer trail construction as part of an SCA (Student Conservation Association) crew. There were eight of us, three boys, three girls, and two female crew leaders. 
            We lived in tents in the Savage River campground and spent most of our month building a reroute for the Savage River Loop trail. It was very hard work, and the unpredictable Alaskan 
            weather made things even more so, one moment too warm, then cold, then raining etc. But it was a great character building experience in one of the most beautiful places in the world. 
            I realize Alaska is quite remote and expensive to get to. But if you do find yourself up there, definitely don't skip an excursion to Denali! If you do go though, take proper precautions 
            as the wild animals there are large and can be extremely dangerous. 
            
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Denali;