import React from 'react';
import image from '../images/room-7.jpeg'
function AboutUs() {
    return (
        <div className="about-us">
            <div className="about-us-content">
                <section className="about-section">
                    <h2 className='h2'>About <span style={{ color: '#af9a7d' }} >Our Hotel</span></h2>
                    <p className='para'>
                        Welcome to our luxurious hotel! We take pride in offering our guests the
                        perfect blend of comfort, style, and unmatched hospitality.
                    </p>
                    <p className='para '>
                        Located in a prime location, our hotel is the ideal choice for travelers
                        looking for a memorable and relaxing stay.
                    </p>
                    <img src={image} style={{ width: '70%', padding: '20px' }}></img>
                    <div className='line'></div>
                </section>

                <section className="team-section">
                    <h2 className='h2'>Our <span style={{ color: '#af9a7d' }} >Team</span></h2>
                    <p className='para '>
                        Meet the dedicated and friendly team behind our hotel. Our staff is
                        committed to making your stay exceptional.
                    </p>
                    <p className='para'>our success is the result of the dedicated individuals who form our exceptional team. Our team members are not just employees; they are the heart and soul of our hotel.</p>
                    <p className='para'>Meet some of the talented professionals who work tirelessly to ensure your stay is nothing short of perfection:</p>
                    <div className='line'></div>
                    {/* Include images and descriptions of team members */}
                </section>

                <section className="mission-section">
                    <h2 className='h2'>Our <span style={{ color: '#af9a7d' }} >Mission</span> </h2>
                    <p className='para '>
                        At our hotel, our mission is to provide a remarkable experience to our guests
                        by offering top-notch services, comfortable accommodations, and unforgettable
                        moments.
                    </p>
                    <p className='para'>our mission goes beyond providing just a place to stay.</p>
                    <p className='para'>We aim to create unforgettable memories for our guests, ensuring every moment spent here is filled with comfort, warmth, and hospitality.</p>
                    <div className='line'></div>
                </section>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default AboutUs;
