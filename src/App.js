import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
//Pages
import LandingPage from "./pages/landing";
import PdfPage from "./pages/pdf";
import AnalysisPage from "./pages/analysis";
function App() {
  return (
    <>
       <Router>
         <Route exact path="/" component={LandingPage}/>
         <Route exact path="/upload" component={PdfPage}/>
         <Route exact path="/analyze" component={AnalysisPage}/>
       </Router>
    </>
  );
}

export default App;
