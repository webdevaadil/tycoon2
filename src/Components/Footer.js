import React from 'react'
import paymentlogo from "../Components/Images/Payments-All.svg"

export const Footer = () => {
    return (

        <div className='footer-section'>
            <div className='container'>
                <div className='left-footer'>
                    <img src={paymentlogo} alt="Payment" />
                </div>

                <div className='right-footer'>
                    <ul>
                        <li><p>© 2023 TYCOON<span>-</span> </p></li>
                        <li><a href="/">Terms & Conditions</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Legal Notice</a></li>
                    </ul>
                </div>
                <div className='media-right-footer'>
                    <div><p>© 2023 TYCOON</p></div>
                    <div className='media-a'>
                        <a href="/">Terms & Conditions |</a>
                        <a href="/">Privacy Policy |</a>
                        <a href="/">Legal Notice </a>
                    </div>
                </div>
            </div>
            {/* <div className='container mbl-container'> <p className='mbl-copyrights'>© © 2023 TYCOON -. All Rights Reserved</p></div> */}
        </div>
    )
}
