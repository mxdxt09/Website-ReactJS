import React from 'react'
import Carousel from './Carousel'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Navbar = () => {
  return (
    <div>
    <section className='first-page'>
        <nav className='main-nav'>
        <span className='bg-design'></span>
        <div className='logo'>
            <a href="#"> <img src={require('./images/logo.png')} alt=""  /> </a>
            
        </div>
        
        <div className='menu-links'>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Become Affiliate</a></li>
            </ul>
        </div>

            <div className='credens'>
                <button className='logIn'>Log In</button>
                <button className='GIT'>Get In Touch</button>
            </div>
        </nav>

        <div className='main-body'>
            <div className='intro-text' >
                <h1>Make Your Trading</h1>
                <h1>Journey Automated</h1>
                <h2>Robust & Rewarding</h2>

                <div className='info'>
                    <button className='gs'>Get Started</button>
                    <button className='hiw'>How it works</button>
                </div>

            </div>

            <div className='intro-image' >
                <img src={require('./images/Forex-Trading.png')} alt="" width={1100} height={600}/>
            </div>
            <div data-aos="fade-out" data-aos-duration="2500">
            <img src={require('./images/network.png')} alt="" width={1100} height={600} className='rightImage'/>
            </div>
        </div>
        
    </section>

    <section className='second-page'>
        <h1 className='head1'>Only Key Features</h1>
        <div className='only-key-features'>

            <div className='okf-row1'>
                <div className='okf1' data-aos="flip-up" data-aos-duration="1000" data-aos-delay="50">
                    <img src={require('./images/1.png')} alt="" />
                    <h1>Algo Trading Platform</h1>
                    <h2>WE offer secure and reliable plaform to automate your trading strategy.</h2>
                </div>

                <div className='okf2' data-aos="flip-up" data-aos-duration="1250" data-aos-delay="100">
                    <img src={require('./images/2.png')} alt="" />
                    <h1>Algo Startegy Guidence</h1>
                    <h2>Our premium service includes a detailed guidence to build your own trading strategy.</h2>
                </div>

                <div className='okf3' data-aos="flip-up" data-aos-duration="1500" data-aos-delay="150">
                    <img src={require('./images/3.png')} alt="" />
                    <h1>Back Test Strategy</h1>
                    <h2>Backtest your strategy with our well cureted tick data.</h2>
                </div>
            </div>

            <div className='okf-row2'>
                <div className='okf4' data-aos="flip-up" data-aos-duration="1750" data-aos-delay="200">
                    <img src={require('./images/4.png')} alt="" />
                    <h1>Share & Subscribe</h1>
                    <h2>A marketplace to get involve with each other buy sharing and subscribing strategies.</h2>
                </div>

                <div className='okf5' data-aos="flip-up"  data-aos-duration="2000" data-aos-delay="250">
                    <img src={require('./images/5.png')} alt="" />
                    <h1>Premium Strategies</h1>
                    <h2>Build your wealth with our expert strategies.</h2>
                </div>

                <div className='okf6' data-aos="flip-up" data-aos-duration="2250" data-aos-delay="300">
                    <img src={require('./images/6.png')} alt="" />
                    <h1>Expert Advice</h1>
                    <h2>Connect with us to get export advices about markets.</h2>
                    <h2>Enhance your knowledge with our expert Analytics.</h2>
                </div>
            </div>
            
        </div>
    </section>

    <section className='third-page'>
        <div>
            <h1>How It Works</h1>
            <div className='hiw-img' data-aos = 'fade-in' data-aos-duration='2000'>
                <img src={require('./images/subscribeChart.png')} alt="" width={1500} height={650}/>
            </div>
        </div>
    </section>

    <section className='fourth-page'>
        <div className='marketplace' >
            <h1 className='head2'>Marketplace</h1>
            <div className='learn-more' data-aos='fade-down-right' data-aos-duration='1000'>

                <div className='lm-text'>
                    <h1>Subscribe to trading and investing algorithms, built by experts.</h1>
                    <button>Learn more</button>
                </div>
                <div className='lm-img'>
                    <img src={require('./images/ladder.png')} alt="" width={500} height={500}  className='ladder-img'/>
                    <img src={require('./images/circuit.png')} alt="" width={700} height={700} className='circuit'/>
                </div>
        
            </div>
        </div>
    </section>

    <section className='fifth-page'>
        <div className='why-choose-us'> 
            <h1 className='head3'>Why choose us?</h1>
            <p className='wcu-para'>Qodrr.com vrew brings to you an ubeatable power of technicals combined with decades of Stock Broking experience & latest high-end Technology to drive your trades.</p>
        </div>

        <div className='wcu-info'>
            <div className='wcu-img' data-aos = 'fade-in' data-aos-duration='2000'>
                <img src={require('./images/yesno.png')} alt="" width={500} height={500} />
            </div>
            <div className='stats'>
                <div className='cus' data-aos = 'fade-in' data-aos-easing='ease-in' data-aos-duration='1000'><span className='blue-bold'>135+</span>Active Customers</div>
                <div className='exp' data-aos = 'fade-in' data-aos-easing='ease-in' data-aos-duration='2000'><span className='blue-bold'>50+</span>Years Commulative Experince</div>
                <div className='exe' data-aos = 'fade-in' data-aos-easing='ease-in' data-aos-duration='3000'><span className='blue-bold'>61728+</span>Orders Excutes</div>
                <button data-aos = 'fade-in' data-aos-easing='ease-in' data-aos-duration='3000'>Learn More</button>
            </div>
        </div>
    </section>

    <section className='sixth-page'>
        <div className='Pricing Plan'>
            <h1 className='head4'>Pricing Plans</h1>
            <div className='pricing-plan-info'>
                <p className='plan-para1'>Choose the best suitable plan for you as per your need.</p>
                <p className='plan-para2'>Not finding yet, what are you looking for. Get in touch with us.</p>
            </div>
            
            <div>
                <Carousel />
            </div>

        </div>
    </section>

    <section className='seventh-page'>
        <div className='our-partners'>
            <h1 className='head5'>Our Partners</h1>

            <div className='companies'>
                <div className='companies-slide'>
                    <img src={require('./images/dyson.png')} alt="" />
                    <img src={require('./images/eurostar.png')} alt="" />
                    <img src={require('./images/gopro.png')} alt="" />
                    <img src={require('./images/P&G.png')} alt="" />
                    <img src={require('./images/philips.png')} alt="" />
                    <img src={require('./images/samsung.png')} alt="" />
                    <img src={require('./images/coke.png')} alt="" />
                    
                </div>
                <div className='companies-slide'>
                    <img src={require('./images/dyson.png')} alt="" />
                    <img src={require('./images/eurostar.png')} alt="" />
                    <img src={require('./images/gopro.png')} alt="" />
                    <img src={require('./images/P&G.png')} alt="" />
                    <img src={require('./images/philips.png')} alt="" />
                    <img src={require('./images/samsung.png')} alt="" />
                    <img src={require('./images/coke.png')} alt="" />
                    
                </div>
            </div>

            <div className='details'>
                <div className='social-media'>
                    <ul className='social-media-para'>
                        <li> <img src={require('./images/logo.png')} width={200} height={70} alt="" className='social-media-logo'/> </li>
                        <li> 
                            <p>A Division of PITTER SHARE</p>
                            <p>BROKING PRIVATE LIMITED</p> 
                        </li>
                    </ul>
                    <div className='social-media-list'>
                        <ul>
                            <a href=""><FaTwitterSquare className='twitter'/></a>
                            <a href=""><FaInstagramSquare className='instagram'/></a>
                            <a href=""><FaFacebookSquare className='facebook'/></a>
                            <a href=""><FaYoutubeSquare className='youtube'/></a>
                        </ul>
                    </div>
                </div>
                
                <div className='quick-links'>
                    <ul>
                        <li className='head6'>Quick Links</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                    </ul>
                </div>

                <div className='product'>
                    <ul>
                        <li className='head6'>Product</li>
                        <li>Log In</li>
                        <li>Pricing</li>
                        <li>Become Affiliate</li>
                    </ul>
                </div>

                <div className='legal'>
                    <ul>
                        <li className='head6'>Legal</li>
                        <li>Privacy Poilicy</li>
                        <li>Terms of Services</li>
                        <li>Disclaimer</li>
                    </ul>
                </div>

                <div className='contact'>
                    <ul>
                        <li className='head6'>Contact</li>
                        <li>+91 (983)( 611)-3375</li>
                        <li>support@qodrr.com</li>
                        <li>228A, AJC Bose Road, Landmark 8E Kolkata(West Bengal), 700020 INDIA</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    
    </div>
    
  )
}

export default Navbar;