// ! Header Component
import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom"
import "./header.scss";
import Logo from "../../assets/image/picture/logo.png";
import { getUser } from "../../api/helper"
import ProfilePhoto from "../../assets/image/picture/test-profile-photo.png"
import { ReactComponent as ArrowIcon } from '../../assets/image/icon/arrow-down-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/image/icon/search-icon.svg';
import { ReactComponent as MarketIcon } from "../../assets/image/icon/shopping-cart-icon.svg";
import { ReactComponent as UserIcon } from '../../assets/image/icon/user-icon.svg';
import { ReactComponent as NotifIcon } from "../../assets/image/icon/notification-icon.svg";
import { ReactComponent as SmsIcon } from "../../assets/image/icon/sms-icon.svg";

const Header = ({ checkPage, setCheckPage }) => {

  const [isProfileActive, setActiveProfile] = useState(false);
  const [isMenuActive, setActive] = useState(false);

  const handlerAccount = () => {
    // !isMenuActive ? 
    setCheckPage("register");
  }

  const { jwt } = getUser();

  useEffect(() => {
    if (!jwt) {
      setActiveProfile(false);
    }
    else {
      setActiveProfile(true);
    }

  }, [jwt])


  const clickedHamburger = () => {
    !isMenuActive ? setActive(true) : setActive(false);
    console.log(isMenuActive)
  }



  return (
    <header className="header-content">
      <div className="wrapper">
        {/* logo-part */}
        <div className="logo-part">
          <NavLink to={"/"}>
            <img src={Logo} alt="" />
          </NavLink>
        </div>
        {/* search-container */}
        <div className="search-container">
          <div className="all-categories">
            <span className="text">
              All Categories
            </span>
            <span className="icon">
              <ArrowIcon />
            </span>
          </div>
          {/* search-bar */}
          <div className="search-bar">
            <input type="text" className="search-input" placeholder='Search on lenny...' />
          </div>

          <span className="search_icon">
            < SearchIcon />
          </span>

        </div>

        <div className="profile-part">
          <div className="navs-elements">
            {
              isProfileActive ? <span className="icon icon-notification">
                <NavLink>
                  <NotifIcon />
                </NavLink>
              </span> : ""
            }

            {
              isProfileActive ? <span className="icon icon-sms">
                <NavLink>
                  <SmsIcon height="23px" width="23px" preserveAspectRatio="none" />
                </NavLink>
              </span> : ""
            }
            <span className="icon icon-market">
              <NavLink to={"/shopping-cart"}><MarketIcon /></NavLink>
              <span className="count-product">1</span>
            </span>
          </div>
          <div className={`profile ${isProfileActive ? "registered" : ""}`} >
            {
              !isProfileActive ? <UserIcon onClick={handlerAccount}/> : <img src={ProfilePhoto} width={39} height={39} />
            }
          </div>
          <div className={`hamburger-content ${isMenuActive ? "show" : "hidden"}`} onClick={clickedHamburger}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header