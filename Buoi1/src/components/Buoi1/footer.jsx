import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <footer>
            <div class="Footer__top">
                <div class="Footer__top--content">
                    <div class="Newsletter">
                        <h3 class="Newsletter--h3">Join Our Newsletter</h3>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <form>
                            <input type="text" class="form_input1"></input>
                            <input type="submit" class="form_input2" value="Subscrise"></input>
                        </form>
                    </div>
                </div>
            </div>
            <div class="Footer__between">
                <div class="Footer__between--content">
                    <div class="Footer__between--content--box">
                        <h3>ARSHA</h3>
                        <p>
                            A108 Adam Street
                            <br></br>
                            New York, NY 535022
                            <br></br>
                            United States<br></br><br></br>
                            <b>Phone: </b>+1 5589 55488 55
                            <br></br>
                            <b>Email: </b>info@example.com
                        </p>
                    </div>
                    <div class="Footer__between--content--box">
                        <h3>Useful Links</h3>
                        <ul class="Footer__between--content--box--list">
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">Terms of Service</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">Privacy policy</a>
                            </li>
                        </ul>
                    </div>
                    <div class="Footer__between--content--box">
                        <h3>Our Services</h3>
                        <ul class="Footer__between--content--box--list">
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">Web Design</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">Web Development</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">Product Management</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">Marketing</a>
                            </li>
                            <li>
                                <i class="fa-solid fa-chevron-right"></i>
                                <a href="#">Graphic Design</a>
                            </li>
                        </ul>
                    </div>
                    <div class="Footer__between--content--box">
                        <h3>Our Social Networks</h3>
                        <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                        <div class="box-icon">
                            <a herf="#"><i class="fa-brands fa-twitter"></i></a>
                            <a herf="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a herf="#"><i class="fa-brands fa-square-instagram"></i></a>
                            <a herf="#"><i class="fa-brands fa-skype"></i></a>
                            <a herf="#"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

            </div>
            <div class="footer_bottom">
                <div class="footer_bottom--first">
                     © Copyright <b><span>Arsha</span></b>. All Rights Reserved
                </div>
                <div class="footer_bottom--second">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer