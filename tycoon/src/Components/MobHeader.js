import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../Components/Images/logo.svg";
import Noty from "./Noty";
import telegram from "../Components/Images/telegram.svg"
import './MobHeader.css';
import { useEffect, useRef, useState } from 'react';

function MobHeader() {

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
    <>
   <div style={{ marginTop: sticky.offset }} className= {`navbar${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
   <div id="sticky-header" className='mobmenu'>
  <header>  
      <a href="#main-menu"
        id="main-menu-toggle"
        class="menu-toggle"
        aria-label="Open main menu">
        <span class="sr-only">Open main menu</span>
        <span class="fa fa-bars" aria-hidden="true"></span>
      </a>
    
      <h1 class="logo">
      <div className='right-header'>
                          <ul>    
                              <li><Noty width={"22px"} height={"22px"} color={"#fff"} count={10} /></li>    
                              <li><a href='/login'><img src={telegram} alt="Telegram"/> Log in <span className='telegram_display'> With Telegram</span></a></li>    
                          </ul>
        </div></h1>
  
      <nav id="main-menu" class="main-menu" aria-label="Main menu">
        <a href="#main-menu-toggle"
          id="main-menu-close"
          class="menu-close"
          aria-label="Close main menu">
          <span class="sr-only">Close main menu</span>
          <span class="fa fa-close" aria-hidden="true"></span>
        </a>    
        <h2 id="main-menu-heading" class="sr-only">Main menu</h2>
        <ul aria-labelledby="main-menu-heading">
          <li><a href="#homebanner">Leaderboard</a></li>
          <li><a href="#Faq">Faq</a></li>
        </ul>
       </nav>
       <a href="#main-menu-toggle" class="backdrop"  tabindex="-1"  aria-hidden="true" hidden> </a>
       </header>
      </div>
   </div>
   
    </>
  );
}

export default MobHeader;