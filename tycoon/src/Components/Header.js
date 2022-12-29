import React from 'react'
import logo from "../Components/Images/logo.svg"
import Noty from "./Noty";
import telegram from "../Components/Images/telegram.svg"
import { useEffect, useRef, useState } from 'react';

export const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
    }

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <div>
     <div style={{ marginTop: sticky.offset }} className= {`navbar${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
    <div className='header-top'>
            <div className='container'>
                    <div className='left-header'>
                        <a href="/"><img src={logo} alt="Tycoon Logo"/></a>
                    </div>
                    <div className='right-header'>
                        <ul>    
                            <li><Noty width={"22px"} height={"22px"} color={"#fff"} count={10} /></li>    
                            <li><a href='/login'><img src={telegram} alt="Telegram"/> Log in <span className='telegram_display'> With Telegram</span></a></li>    
                        </ul>
                    </div>

            </div>
    </div>
</div>

    </div>
  )
}

