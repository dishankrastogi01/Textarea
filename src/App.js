import Navbar from "./component/Navbar";
import Formarea from "./component/Formarea";
import React, {useState } from "react";

function App() {
  const [mode, setMode]=useState('light');

  const toggleMode = ()=>{
    if(mode == 'dark'){
      setMode('light'); 
      document.body.style.backgroundColor = "white";
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "#0c4a51";
    }
    
  }
  return (
  <>
  <Navbar title ="TextUtils" abouttext="About" mode={mode} toggleMode={toggleMode}/> 
  <div className="container">
    <Formarea heading = "Enter The Text to Analyze" mode={mode} />
  </div>
    
  </>
  );
}

export default App;
