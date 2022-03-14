import React,{useState} from 'react'
import { Link } from 'react-router-dom';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library


//components
import Navbar from '../component/navbar.component';
import Footer from '../component/footer.component';

const PdfPage  = ()=>{
    // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // for onchange event
  const [pdfFile, setPdfFile]=useState(null);
  const [pdfFileError, setPdfFileError]=useState('');

  // for submit event
  const [viewPdf, setViewPdf]=useState(null);

  // onchange event
  const fileType=['application/pdf'];
  const handlePdfFileChange=(e)=>{
    let selectedFile=e.target.files[0];
    if(selectedFile){
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = (e) =>{
              setPdfFile(e.target.result);
              setPdfFileError('');
            }
      }
      else{
        setPdfFile(null);
        setPdfFileError('Please select valid pdf file');
      }
    }
    else{
      console.log('select your file');
    }
  }

  // form submit
  const handlePdfFileSubmit=(e)=>{
    e.preventDefault();
    if(pdfFile!==null){
      setViewPdf(pdfFile);
    }
    else{
      setViewPdf(null);
    }
  }
    return (
        <>
  <Navbar/>

  <div className='container d-flex align-items-center ' style={{gap:100,padding:"100px 50px",width:"1400px",height:"900px"}}>


  <div >
  <form className='form-group d-flex flex-column align-items-center' style={{gap:20}} onSubmit={handlePdfFileSubmit}>
    <input type="file" className='form-control'
      required onChange={handlePdfFileChange}
    />
    {pdfFileError&&<div className='error-msg'>{pdfFileError}</div>}

    <button type="submit" className='btn btn-success btn-lg'>
      UPLOAD
    </button>
    <Link to="/analyze" >
    <button type="button" class="btn btn-outline-primary py-2 px-4">Analyze</button>
    </Link>
  </form>
  </div>


  <div className='pdf-container d-flex flex-column'>
  <h4>View PDF</h4>
    {/* show pdf conditionally (if we have one)  */}
    {viewPdf&&<><Worker  workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
      <Viewer  fileUrl={viewPdf}
        plugins={[defaultLayoutPluginInstance]} />
  </Worker></>}

  {/* if we dont have pdf or viewPdf state is null */}
  {!viewPdf&&<>No pdf file selected</>}
  </div>

</div>
<Footer />
        </>
    );
}

export default PdfPage;
