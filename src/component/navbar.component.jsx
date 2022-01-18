import React ,{Component} from "react";
import {FaGithub, FaProductHunt} from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return (
        <>
            <div class="h-48 align-items-center " style={{backgroundColor: "#e5e8eb", height:"70px"}}>
               <nav class=" px-3 " >
                    <div class="d-flex align-items-center pb-10 justify-content-between pt-2">
                    
                    {/* <Link to="/">
                        
                    </Link> */}

                        <div style={{width:"70px",height:"65px",}}>
                            <a className="navbar-brand" href="/">
                               <img style={{width:"100%",marginTop:"-5px",height:"100%"}}
                               src="..//images/logo.svg" alt="logo" />
                            </a>
                        </div>
                        <div class="d-flex align-items-center" >
                            <div class="d-flex align-items-center" >

                                <a href="https://github.com/shubhigupta991/PaperTxT">
                                <div class="d-flex px-5 align-items-center gap-3 border-2 border-light rounded-2">
                                    <FaGithub class="fs-1" />

                                    <div class="d-flex d-flex-col ">
                                        <div class="font-weight-bold  ">shubhigupta991/PaperTxT</div> 
                                    </div>

                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
               </nav>
            </div>
        </>
    );
}

export default Navbar;