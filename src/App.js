// import logo from './logo.svg';
import "./App.css";
import React,{useState} from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light");
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode is enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode is enabled","success");
    }
  }
  const[alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
          setAlert(null)
      },1500);
  }
  return (
    <>
    {/* <BrowserRouter>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode}  toggleMode={toggleMode}/>
      <Alert alert={alert} showAlert={showAlert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/about" About={<About/>}/>           
          <Route path="/"  TextForm={< TextForm showAlert={showAlert}  heading={"Enter Your text Here"} mode={mode}   toggleMode={toggleMode}/>} />
            
      </Routes>
      </div>
      </BrowserRouter> */}
      
      {/* <Alert alert={alert} showAlert={showAlert}/> */}
      <Navbar title="TextUtils" about="About TextUtils" mode={mode}  toggleMode={toggleMode}/> 
      <Alert alert={alert} showAlert={showAlert}/>
      <TextForm showAlert={showAlert}  heading="Enter Your text Here" mode={mode}   toggleMode={toggleMode}/>
      
      {/* <About/> */}
    </> 
  );
}

export default App;
