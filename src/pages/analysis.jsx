import React from "react";
import { Link } from "react-router-dom";

//component
import Navbar from "../component/navbar.component";
import Footer from "../component/footer.component";

const AnalysisPage = ()=>{
    return (
        <>
            <Navbar/>
            <div className="d-flex justify-content-evenly" style={{gap:20,margin:"50px"}} >
                <div className="d-flex flex-column align-items-center" style={{gap:30}}>
                <div className="d-flex flex-column align-items-center" style={{background: "#3d6ecf",borderRadius: "15px",width:"500px",height:"450px"}}>
                    <h1 className="input" style={{fontWeight:"bold"}}>Input.</h1>
                    <div style={{height:"350px",width:"400px",borderRadius: "15px",background:"white"}}>
                    <textarea cols="46" rows="15" style={{borderRadius: "15px"}}  />
                    </div>
                </div>
                    <button type="button" class="btn btn-lg btn-outline-primary" >Analyze</button>
                </div>
                <div className="d-flex flex-column align-items-center" style={{gap:30}}>
                <div className="d-flex flex-column align-items-center" style={{background: "#3d6ecf",borderRadius: "15px",width:"500px",height:"450px"}}>
                    <h1 className="input" style={{fontWeight:"bold"}}>Output.</h1>
                    <div style={{height:"350px",width:"400px",borderRadius: "15px",background:"white"}}>
                    <textarea cols="46" rows="15" style={{borderRadius: "15px"}}  />
                    </div>
                </div>
                <Link to="/">
                <button type="button" class="btn btn-primary btn-lg " style={{padding:"8px 30px"}}>Back</button>
                </Link>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default AnalysisPage;
