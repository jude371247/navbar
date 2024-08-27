import React from 'react';
import Lg3 from '../../assets/LG3.jpg';
import Hp from '../../assets/Hp.png';
import Mac from '../../assets/Mac.png'
import { TfiTruck } from "react-icons/tfi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { RiCustomerService2Line } from "react-icons/ri";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='first-con'>
    <h2>Choose Top Brands</h2>
</div>
<div className="second-con">
    <div className="brand">
        <img src={Lg3} alt="LG" className="logo" />
        <h1 className='brand-name'></h1>
    </div>
    <div className="brand">
        <h1 className='brand-name'>SONY</h1>
    </div>
    <div className="brand">
        <h1 className='brand-name'>SAMSUNG</h1>
    </div>
    <div className="brand">
        <img src={Hp} alt="HP" className="logo" />
        <h1 className='brand-name'></h1>
    </div>
    <div className="brand">
        <img src={Mac} alt="Mac" className="logo" />
        <h1 className='brand-name'></h1>
    </div>
</div>
      <div className="third-con">
    <div className="icon-text-container">
        <div className="icon">
            <TfiTruck />
        </div>
        <div className="text">
            <h3>Free Ship and Return</h3>
        </div>
    </div>
    <div className="icon-text-container">
        <div className="icon">
            <RiSecurePaymentFill />
        </div>
        <div className="text">
            <h3>Secured Payment</h3>
        </div>
    </div>
    <div className="icon-text-container">
        <div className="icon">
            <RiCustomerService2Line />
        </div>
        <div className="text">
            <h3>Customer Services</h3>
        </div>
    </div>
</div>
        <div className="fourth-con">
    <div className="rightside-row">
        <div>Home</div>
        <div>Contact us</div>
        <div>About us</div>
        <div>Support us</div>
    </div>
    <div className="middle-side">
        <div>16, Memudu Aremu Str.</div>
        <div>West Lagos, Nigeria 1999</div>
        <div>Email: elechijude4@gmail.com</div>
        <div>Call: +2349077720371</div>
        <div className='middle-side2'>
            <div>Shipping & Returns</div>
            <div>FAQ</div>
        </div>
    </div>
    <div className='leftside'>
        <div>Receive all our news and updates</div>
        <input type="text" placeholder='Email Address' />
        <button>Subscribe Now</button>
    </div>
</div>

    </div>
  );
};

export default Footer;
