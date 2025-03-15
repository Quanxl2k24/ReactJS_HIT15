import './Footer.css'
import React from 'react';
function Footer(){
    return (
        <div className="Footer">
            <div className="top_footer">
                <div className="right_top_footer">
                    <h1>
                        Logis
                    </h1>

                    <p>
                        Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.
                    </p>
                </div>

                <div className="left_top_footer">
                    <div className="item_left">
                        <a className='title_item' href="">Useful Links</a>
                        <ul>
                            <li className="list_item"><a href="">Home</a></li>
                            <li className="list_item"><a href="">Abouts us</a></li>
                            <li className="list_item"><a href="">Serices</a></li>
                            <li className="list_item"><a href="">Terms of service</a></li>
                            <li className="list_item"><a href="">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="item_left">
                    <a className='title_item' href="">Our Services</a>
                        <ul>
                            <li className="list_item"><a href="">Web Design</a></li>
                            <li className="list_item"><a href="">Web Development</a></li>
                            <li className="list_item"><a href="">Product Management</a></li>
                            <li className="list_item"><a href="">Marketing</a></li>
                            <li className="list_item"><a href="">Graphic Design</a></li>
                        </ul>
                    </div>
                    <div className="item_left last_item">
                        <p className='title_item'>Contact us</p>
                        <p>A108 Adam Street</p>
                        <p>New York, NY 535022</p>
                        <p className='spacing'>United States</p>
                        <p><span>Phone: </span>+1 5589 55488 55</p>
                        <p><span>Email: </span>info@example.com</p>
                    </div>
                </div>
            </div>
            <div className="bottom_footer">
                    <div>
                    <p>© Copyright Logis All Rights Reserved</p>
                    <p>Designed by BootstrapMade</p>
                    </div>
            </div>
        </div>
    );
}

export default Footer