import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import telegram from "../Components/Images/telegram.svg"

export const Homecotnent = () => {

  // const [isActive, setIsActive] = useState(false);
  // const handleClick = event => {
  //   setIsActive(current => !current);
  // };


  return (
    <>
    <div className='content-section' id='homebanner'>
        <div className='container'>
                <h1>Welcome to the <span>Tycoon Leaderboard</span> for Binance futures</h1>
                <p>Search for your favourite traders to follow their trades in real-time.</p>
                  <div className='home-content-buttn'>
                    <ul>
                     <li className='loginbtn' ><a href='/login'><img src={telegram} alt="Telegram"/> Log in with Telegram </a></li>  
                     <li className='loginbtn' ><Link to='/profile'>Profile </Link></li>  
                    </ul>
                 </div>
                 {/* <button className={isActive ? 'bnnerbtn' : 'hidebtn'} onClick={handleClick} > hello</button> */}
        </div>  
    </div>
    </>
  )
}
