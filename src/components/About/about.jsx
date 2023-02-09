import React from 'react'

import './about.css'

function About(){
    return(
        <section className="container About">
            <h1 className="section_heading">About Us</h1>
            <div className="about">
                <div className="about_text container">                
                    <p>Having smooth-running and secure information technology and telecommunication (IT&T) systems can provide a strong competitive advantage and help your business be successful. </p>
                    <p>Awork environment based on reliable technology infrastructure has a direct effect on profitability and customer service by promoting productivity, communications and effectiveness. That is why we help you address these challenges and come out ahead of yourcompetitor.</p>
                    <p>To us, technology is not a product; it is a service that helps our customers capitalize on thetop tools to ensure productivity...reliability...and peace of mind in today’s work environment.Since its inception in November 2010, ICT Infrastructure Solutions LTD (ICTISL) has been driven by a goal to help customers work smarter. How? By creating a managed IT environment where leading technology resources and proactive management are availableand affordable for all organizations.</p>
                </div>
                <div className="about_image container">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d249.29812975754618!2d36.83983256617201!3d-1.3134145340371997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x182f110731744dab%3A0xc8dc0df14ccaaa7c!2sICT%20Infrastructure%20Solutions%20LTD%2C%20Nairobi!3m2!1d-1.3134274!2d36.8398147!5e0!3m2!1sen!2ske!4v1671365329672!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" sandbox='allow-scripts allow-modal'></iframe> */}
                    <div className="address">
                        <p><span className="icon icon-map-marker"></span> P.O BOX 31018 - 0060.</p>
                        <p><span className="icon icon-map-marker"></span> South-B Golden Gate, Kapiti rd, Along Mombasa Road.</p>
                        <p><span className="icon icon-map-marker"></span> Nairobi, Kenya.</p>
                    </div>
                    <div className="contacts">
                        <p><span className="icon icon-phone"></span> Tel: 0720 987 281</p>
                        <p><span className="icon icon-envelope"></span> info@ictinfrastructure.co.ke</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About