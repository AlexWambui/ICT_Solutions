import './footer.css'

import Logo from '../../assets/images/logo.png'

function Footer(){
    return(
        <footer className="Footer">
            <div className="details">
                <div className="container">
                    <h1>ICT Infrastructure Solutions</h1>
                    <div className="info">                    
                        <img src={Logo} alt="Logo" />                        
                        <p><span className="icon icon-map-marker"></span> P.O BOX 31018 - 0060.</p>                
                        <p><span className="icon icon-map-marker"></span> Nairobi, Kenya.</p>
                    </div>  
                </div>
                
                <div className="container">
                    <h1>Contacts</h1>
                    <div className="contacts_info">
                        <p><span className="icon icon-phone"></span> Tel: 0720 987 281</p>
                        <p><span className="icon icon-envelope"></span> info@ictinfrastructure.co.ke</p>  
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d249.29812975754618!2d36.83983256617201!3d-1.3134145340371997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x182f110731744dab%3A0xc8dc0df14ccaaa7c!2sICT%20Infrastructure%20Solutions%20LTD%2C%20Nairobi!3m2!1d-1.3134274!2d36.8398147!5e0!3m2!1sen!2ske!4v1671365329672!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                       */}
                    </div>   
                </div>             

                <div className="container">
                    <h1>Links</h1>
                    <div className="info">
                        <p><a href="src/about.html">About</a></p>
                        <p><a href="src/services.html">Services</a></p>
                    </div>
                </div>
            </div>

            <p className="footer_reserved">All right reserved &copy;  ICT Infrastructure Solutions Limited  2010 - 2023</p>
        </footer>
    )
}

export default Footer;