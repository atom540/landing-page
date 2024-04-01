import React from 'react';
import styles from './footer.css';
import fb from '../image/list.svg';
import twitter from '../image/list1.svg';
import insta from '../image/list2.svg';
import lg from '../image/carelog.svg'
const Footer = () => {
    const handleSocialMediaClick = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div className='footer'>
            <div className="sb_footer_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <p>UNDERSTANDING ADDICTION</p>
                        <p>SUBSTANCE ABUSE TREATMENT</p>
                        <p>ABOUT US</p>
                        <p>ABOUT ADVANCE RECOVERY SYSTEM</p>
                        <p>OUR TREATMENT CENTERS</p>
                    </div>
                    <div className="sb_footer-links_div1">

                        <p>NOTICE OF PRIVACY PRACTICES</p>

                        <p>PRIVACY POLICY</p>

                        <p>CONTACT US</p>

                        <p>WHERE DOES MY CALL GO</p>

                    </div>
                    <div className="sb_footer-links_div2">
                        <div className="socialmedia">
                            <div className="socialmedia-item" onClick={() => handleSocialMediaClick("#")}>
                                <img src={fb} alt="" />
                            </div>

                            <div className="socialmedia-item" onClick={() => handleSocialMediaClick("https://twitter.com/DrugRehab_com")}>
                                <img src={twitter} alt="" />
                            </div>

                            <div className="socialmedia-item" onClick={() => handleSocialMediaClick("https://www.youtube.com/channel/UCz21noAaueK5ZAfzaT1rbcw")}>
                                <img src={insta} alt="" />
                            </div>
                        </div>

                        <div className="belowsocial">
                            <div className="Footer_image">
                            <img src={lg} alt="" className='footer_logo_img' /></div>
                            <p><strong>Care At Home</strong></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Footer;
