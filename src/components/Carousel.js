import React from 'react'
import { FaRupeeSign, } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


 const Carousel = () => {
  return (
    <div className='all-cards'>
        <div className='first-page-cards'>
            

                <div className='card1' data-aos = 'fade-down-left' dta-aos-duration='1000' data-aos-easing="ease-in">
                    {/*first page - first card*/}
                    <div className='card-top'>
                        <h1><FaRupeeSign /> 1000/Monthly</h1>
                        <h2 >Additional 18% GST</h2>

                        <h3>Starter Pack</h3>
                        <h4>For Entry Level</h4>
                    </div>
                    <div className='card-details'>
                        <span><TiTick className='tick'/><p>Build Strategy Unlimited</p></span>
                        <span><TiTick className='tick'/><p>Segment Access: Cash, Future</p></span>
                        <span><TiTick className='tick'/><p>Paper Trading: 1 Strategy</p></span>
                        <span><TiTick className='tick'/><p>Pro Screener: Full Access</p></span>
                        <span><TiTick className='tick'/><p>Support: Email</p></span>
                        <span><TiTick className='tick'/><p>Auto Trading: No Access</p></span>
                        <span><TiTick className='tick'/><p>Custom Strategy Guidance: No</p></span>
                        <button>Subscribe</button>
                    </div>
                </div>
    

                {/*first page - second card*/}
                <div className='card2' data-aos = 'fade-down-left' dta-aos-duration='1000' data-aos-easing="ease-in">
                    <div className='card-top'>
                        <h1><FaRupeeSign /> 2500/Quaterly</h1>
                        <h2 >Additional 18% GST</h2>

                        <h3>Starter Pack</h3>
                        <h4>For Entry Level</h4>
                    </div>
                    <div className='card-details'>
                        <span><TiTick className='tick'/> <p>Build Strategy Unlimited</p></span>
                        <span><TiTick className='tick'/> <p>Segment Access: Cash, Future</p></span>
                        <span><TiTick className='tick'/> <p>Paper Trading: 1 Strategy</p></span>
                        <span><TiTick className='tick'/> <p>Pro Screener: Full Access</p></span>
                        <span><TiTick className='tick'/> <p>Support: Email</p></span>
                        <span><TiTick className='tick'/> <p>Auto Trading: No Access</p></span>
                        <span><TiTick className='tick'/> <p>Custom Strategy Guidance: No</p></span>
                        <button>Subscribe</button>
                    </div>
                </div>

                {/*first page - third card*/}
                <div className='card3' data-aos = 'fade-down-right' dta-aos-duration='1000' data-aos-easing="ease-in">
                    <div className='card-top'>
                        <h1><FaRupeeSign /> 4500/Half-Yearly</h1>
                        <h2 >Additional 18% GST</h2>

                        <h3>Starter Pack</h3>
                        <h4>For Entry Level</h4>
                    </div>
                    <div className='card-details'>
                        <span><TiTick className='tick'/> <p>Build Strategy Unlimited</p></span>
                        <span><TiTick className='tick'/> <p>Segment Access: Cash, Future</p></span>
                        <span><TiTick className='tick'/> <p>Paper Trading: 1 Strategy</p></span>
                        <span><TiTick className='tick'/> <p>Pro Screener: Full Access</p></span>
                        <span><TiTick className='tick'/> <p>Support: Email</p></span>
                        <span><TiTick className='tick'/> <p>Auto Trading: No Access</p></span>
                        <span><TiTick className='tick'/> <p>Custom Strategy Guidance: No</p></span>
                        <button>Subscribe</button>
                    </div>
                </div>

                {/*first page - forth card*/}
                <div className='card4' data-aos = 'fade-down-right' dta-aos-duration='1000' data-aos-easing="ease-in">
                    <div className='card-top'>
                        <h1><FaRupeeSign /> 7000/Yearly</h1>
                        <h2 >Additional 18% GST</h2>

                        <h3>Starter Pack</h3>
                        <h4>For Entry Level</h4>
                    </div>
                    <div className='card-details'>
                        <span><TiTick className='tick'/> <p>Build Strategy Unlimited</p></span>
                        <span><TiTick className='tick'/> <p>Segment Access: Cash, Future</p></span>
                        <span><TiTick className='tick'/> <p>Paper Trading: 1 Strategy</p></span>
                        <span><TiTick className='tick'/> <p>Pro Screener: Full Access</p></span>
                        <span><TiTick className='tick'/> <p>Support: Email</p></span>
                        <span><TiTick className='tick'/> <p>Auto Trading: No Access</p></span>
                        <span><TiTick className='tick'/> <p>Custom Strategy Guidance: No</p></span>
                        <button>Subscribe</button>
                    </div>
                </div>


            
        </div>
    </div>
  )
}

export default Carousel;