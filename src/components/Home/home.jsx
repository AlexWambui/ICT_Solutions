import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css';

import Logitech from '../../assets/images/about/Logitech.png';
import Hikivision from '../../assets/images/about/Hiki vision.png';
import Home_MS from '../../assets/images/about/Home_ms.jpg';
import Zoho from '../../assets/images/about/zoho.jpg';
import Homepage_Cloud from '../../assets/images/about/Homepage_cloud.jpg'

function Home(){
    return(
        <main className='Home'>
            <section className="hero">
                <div className="hero_text">
                    <h1 className="company_name">ICT Infrastructure Solutions</h1>
                    <p>Here to <span>Help</span> you <span>With</span> your <span>Tech ...</span></p>                
                </div>
            </section>

            <section className="home_about">            
                <div className="container about_text">
                    <p>Our IT solutions help organisations achieve efficiency through secure platforms and strategic technology decisions.</p>
                    <p>We strive to provide the best level of service, support and care that is possible in the IT industry.ICT INFRASTRUCTURE SOLUTIONS LIMITED service agreements are no lock in - a reflection of the fact that we know you will love our level of service and price point.</p>
                    <p>We specialise in Cloud platforms Microsoft 365, Google, AWS, Zoho. Backup & Disaster Recovery, Microsoft Exchange Online, Microsoft Azure, Dedicated Private Cloud services, hardware and software supplies and installations, Server Monitoring, CCTV Surveillance, Conference System, Access Control, Data Centre, Network LAN/WAN cabling, Optical Fiber and IT Consulting.</p>
                </div>
                <div className="about_images">
                    <ul className="list-unstyled">
                        <li><img src={Logitech} alt="Logitech" /></li>
                        <li><img src={Hikivision} alt="Hikivision" /></li>
                        <li><img src={Home_MS} alt="Home MS Services" /></li>
                        <li><img src={Zoho} alt="Zoho" /></li>
                        <li><img src={Homepage_Cloud} alt="Homepage Cloud" /></li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Home