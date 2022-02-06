import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Link} from 'react-router-dom';
import '../Style/Footer.css';
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as SiIcons from "react-icons/si";


function Footer() {
  return (
  <div>
      <div className="container-fluid bg-dark text-white p-3  ">
          <div className="row footer">
                <div className="col-md-4 ">  
                        <div className="footerL text-wrap  ">
                            <img src="Pizza Images/pizzaLogo.png "alt=""/>
                                <p className="p-3">
                               
                                    Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. 
                                </p>
                        </div>
                </div>
              <div className="col-md-4 reach">                      
                        <h3>
                            <span className="p-2 m-2 text-info">
                                <FaIcons.FaAddressCard/>
                            </span>Reach Us
                        </h3>
                            <address className="pt-4 m-3">
                                <p>H no:6-5-117,</p>
                                <p>  Begumpeta,</p>
                                <p> Kundhanbag Colony,</p>
                                <p>Near Green Minimart,</p>
                                <p>Hyderabad-500016.</p> 
                            </address>       
              </div>
              <div className="col-md-4 contact">
                
                        <h3><span className="p-2 m-2 text-info"><FcIcons.FcBusinessContact/>
                        </span>Contact</h3>
                        <br/>
                        
                                <p>
                                <a href="# " className="text-white p-4 mt-4">
                                    <FaIcons.FaMobileAlt className="text-info"/>
                                    &nbsp;&nbsp;+91 6303435214</a>
                                </p>
                                <p>
                                <a href="# " className="text-white p-4 mt-4">
                                    <SiIcons.SiGmail className="text-danger"/>&nbsp;&nbsp;&nbsp;nliteinteriors@gmail.com</a>
                                </p>
                                <p>
                                <a href="# " className="text-white p-4 mt-4">
                                    <FaIcons.FaTwitterSquare className="text-primary"/>
                                    &nbsp;&nbsp;&nbsp;Twitter</a>
                                </p>
                                <p>
                                <a href="# " className="text-white p-4 mt-4">
                                    <FaIcons.FaFacebookSquare className="text-primary"/>
                                    &nbsp;&nbsp;&nbsp;Facebook</a>
                                </p>
                                <p>
                                <a href="# " className="text-white p-4 mt-4">
                                    <FaIcons.FaInstagram className="text-warning"/>
                                    &nbsp;&nbsp;&nbsp;Instragram</a>
                                </p>
                                <p>
                                <a href="# " className="text-white p-4 mt-4">
                                    <FaIcons.FaYoutube className="text-danger"/>
                                    &nbsp;&nbsp;&nbsp;Youtube</a>
                                </p>
                        
                </div>
            </div>
            <p className="text-center designed">@Designerd By Sravanitech</p>
        </div>
    </div>
  )
};

export default Footer;
