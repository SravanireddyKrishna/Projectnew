import React from 'react';
import '../Style/Contact.css';
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as SiIcons from "react-icons/si";

function Contact1() 
{
  return (
  <div>
       <div>
                <h3 className="text-success p-5 text-center">Help Us</h3>
                </div>
                <div className="Contact">
                      <h3><span className="p-2 m-2 text-info">
                        <FcIcons.FcBusinessContact/>
                        </span>Contact</h3>
                        <br/>
                        <p>
                                <a href="+tel 916303435213 " className="text-dark p-4 mt-4">
                                    <FaIcons.FaMobileAlt className="text-info"/>
                                    &nbsp;&nbsp;+91 6303435214</a><br/>

                                <a href="mail to" className="text-dark p-4 mt-4">
                                    <SiIcons.SiGmail className="text-danger"/>
                                    &nbsp;&nbsp;&nbsp;nliteinteriors@gmail.com</a><br/>
            
                                <a href="# " className="text-dark p-4 mt-4">
                                    <FaIcons.FaTwitterSquare className="text-primary"/>
                                    &nbsp;&nbsp;&nbsp;Twitter</a><br/>
                               
                                <a href="# " className="text-dark p-4 mt-4">
                                    <FaIcons.FaFacebookSquare className="text-primary"/>
                                    &nbsp;&nbsp;&nbsp;Facebook</a><br/>
                               
                                <a href="# " className="text-dark p-4 mt-4">
                                    <FaIcons.FaInstagram className="text-warning"/>
                                    &nbsp;&nbsp;&nbsp;Instragram</a><br/>
                               
                                <a href="# " className="text-dark p-4 mt-4">
                                    <FaIcons.FaYoutube className="text-danger"/>
                                    &nbsp;&nbsp;&nbsp;Youtube</a>
                                </p>       
                </div>
                <div className="ReachUs">
                        <h3>
                            <span className="p-2 m-2 text-info">
                                <FaIcons.FaAddressCard/>
                            </span>Reach Us<br/>
                        </h3>
                            <address className="p-1 m-1 ">
                                <p>H no:6-5-117,
                                  Begumpeta,
                                 Kundhanbag Colony,
                                Near Green Minimart,
                                Hyderabad-500016.</p> 
                            </address>       
                            </div>
  </div>
  );
}

export default Contact1;
