import React from 'react';
import "./Navbar.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-inner-container'>
        <div className='left-menu'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <ul className='left-menu-list'>
            <li style={{ paddingLeft: "0" }}>
              brands
              <KeyboardArrowDownIcon />
            </li>
            <li>
              shop
              <KeyboardArrowDownIcon />
            </li>
            <li>
              premium
            </li>
            <li>
              gift cards
            </li>
          </ul>
        </div>
        <div className='logo-menu'>
          <a className="logolink" href="/">
            <img src="//bravaland.com/cdn/shop/files/Artboard_1.png?v=1678787853" className="logoimg" alt="brava logo" />
          </a>
        </div>
        <div className='right-menu'>
          <div className='right-menu-social'>
            <ul className='right-menu-list'>
              <li>
                become an affiliate
              </li>
            </ul>
            <a class="thb-secondary-area-item thb-twitter" href="https://twitter.com/mybravaland" title="Twitter" target="_blank" rel="noreferrer">
              <TwitterIcon />
            </a>
            <a class="thb-secondary-area-item thb-tiktok" href="https://tiktok.com/@bravaland.com" title="Twitter" target="_blank" rel="noreferrer">
              <MusicNoteIcon />
            </a>
            <a class="thb-secondary-area-item thb-twitter right-padding" href="https://www.instagram.com/bravamarketplace" title="Instagram" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
          </div>
          <a class="thb-secondary-area-item thb-secondary-myaccount" href="/account/login" title="My Account">
            <PersonIcon />
          </a>
          <a class="thb-secondary-area-item thb-quick-search" href="/search" title="Search">
            <SearchOutlinedIcon />
          </a>
          <a class="thb-secondary-area-item thb-secondary-cart" href="/cart" id="cart-drawer-toggle">
            <div class="thb-secondary-item-icon">
              <LocalMallOutlinedIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar