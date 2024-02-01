import { useState } from 'react';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css-sheets/read-modals.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { Modal , Card, Carousel } from 'react-bootstrap'



function Read_Mandalay() {
    const [lgShow, setLgShow] = React.useState(false);
    return (
    <>
        <h3 className='home_caption' onClick={() => setLgShow(true)} >Mandalay <HiOutlineBookOpen/></h3>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
            Mandalay
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='read-body'>

        Mandalay, is a city located in north central Myanmar and the second largest city in the country after Yangon to the south. 
        I traveled there in August of 2017 as part of a solo backpacking trip during my summer break when I was a university student. 
        Back then the country was relatively much more stable and under democratic rule. However in February 2021, the democratic government was overthrown 
        by the military in a coup and since then a Junta has ruled the country. This led to mass protests, army crackdowns, and an ever 
        intensifying war of resistance by the people that as of writing this on January 29th, 2024 appears to be gaining ground and may soon 
        toppled the Junta. My experience in Myanmar is therefore of a bygone era and many things are outdated. 
        However, I want to share them anyway, hopefully one day the country will once again be stable, democratic, and at peace. When I flew to Mandalay I had 
        already traveled to neighboring countries like Laos, Cambodia, Vietnman, and Thailand, so I was expecting something similar. However from the moment
        I arrived, I was totally charmed with how different the country was and it probably helped even more that my van ride to my hostel and first introduction was during 
        the golden hour. The street were so alive with activity, families walking around, motorbikes packed with comically large loads of rice sacks or chicken cages, 
        and lots of hump backed Brahman cattle walking along the road which was quite exotic for me as well. I also noticed that most men were not wearing pants, instead
        they had a type of long skirt on called "Longyi", women too, though of more colorful or floral patterns. While buying my van ticket at the airport, I noticed that 
        the women behind the counter all had swirls of what looked like golden paint on their faces, I asked about it and if there was some sort of holiday going on, but they 
        didn't understand. When I reached my hostel, "Ostello Bello, Mandalay" (Presumably closed now), the receptionist also had the same golden paint on her face and explained 
        to me that it's a paste called "Thanaka", made from rubbing tree bark against a wet stone and is commonly used for aesthetic, skincare, and sunscreen across Myanmar. I was also told that it was 
        happy hour and I could order two mojitos for only $5 as well as dinner. I headed up to the rooftop bar just in time for sunset where I received my drinks, dinner, and also 
         a traditional Myanmar banana leaf cigar called "Cheroot", of which they had large free baskets. The next morning, I had a few hours free before a bus would take me to 
         the city of Bagan, I was intending to go find breakfast at a nearby market but then something more interesting happened. When I stepped outside the hostel a man on a motorbike 
         approached me and wanted to sell me a tour of the city, I told him that I didn't have time etc. and of my intentions to find breakfast at the market, he told me that he knew a much better spot 
         just down the block and would take me there for free on his bike. It may have been foolish, but I took him up on it, and true to his word he took me to a bustling outdoor 
         restaurant down the street. The place was crowded with local people, he then ordered me a really great noodle soup, milk tea, and a bowl of cigarettes to the table (people there smoke a lot!), all brought to us by our 
         waiter, a boy no older than 12 years old. I asked my driver (I wish I could remember his name) about his Longiye and he told me he could take me a nice tailor to get some of my own. 
         At that point, I just said "fine! you've sold me!" and asked to visit the tailor and some temples before my bus left. So, he helped haggle me some of my own Longiye and showed me how 
         to tie it, then took me a number of beautiful temples and pagodas around the city. What was shocking to me was that at many of them I was the only person there, a far cry 
         from my experiences in Thailand where they can be thronged with tourists. Also, at temples that did have people, many approached wanting photos with me because they weren't accustomed to seeing 
         foreigners in their country. Even some monks wielding ipads approached wanting selfies. It was an incredible day and first impression of Mandalay, the best places I visited 
         were <a href='https://maps.app.goo.gl/meN98j11fWY1jhjRA' target='blank'> Atumashi Temple</a>, 
         <a href='https://maps.app.goo.gl/wmTeWYruwFMXkkVA7' target='blank'> Su Taung Pyae Pagoda</a>, 
         <a href='https://maps.app.goo.gl/d3g8gthAGoTAZK31A' target='blank'> Kuthodaw Pagoda</a>, and 
         <a href='https://maps.app.goo.gl/FV82Fgwszf7McyTk8' target='blank'> Mandalay Palace</a>. 
         When the political situation of Myanmar improves, I would love to visit Mandalay again, and I suggest everyone who can does the same. 
        </Modal.Body>
        </Modal>
    </>
    );
}

export default Read_Mandalay;