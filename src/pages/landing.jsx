import React from "react";
import { Link } from "react-router-dom";
//components
import Navbar from "../component/navbar.component";
import Footer from "../component/footer.component";

const LandingPage = () => {
  return (
    <>
    <Navbar/>
      <div className="d-flex justify-content-between" style={{height:"800px",gap:"20"}}>
        <div className="" style={{width:"30%",marginLeft:"150px",marginTop:"250px"}}>
          <h1 className="font  font-weight-bold" style={{fontSize:"5em",marginBottom:"50px"}} >PaperTxT.</h1>
          <p className="RobotoFlex" style={{fontSize:"20px"}} >AI would have abilities to read books, analyze them analytically and finally answer logical questions.</p>
          <Link to="/upload">
          <button type="button" class="btn btn-outline-primary mt-4"  >Get Started</button>
          </Link>
        </div>
        <div style={{width:"750px",height:"600px",marginTop:"80px"}}>
          <img style={{width:"100%",height:"100%"}} src="../images/img.svg" alt="landing_img" />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default LandingPage;
