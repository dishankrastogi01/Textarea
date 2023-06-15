import React, { useState } from 'react';

export default function Formarea(props)  {

  const handelUpClick = ()=>{
    let newText = text.toUpperCase();
    // console.log("UpperCase Was Clicked")
    setText(newText);
  }
  const handelLoClick = ()=>{
    let newText = text.toLocaleLowerCase();
    // console.log("LowerCase Was Clicked")
    setText(newText);
  }

  const handelClearClick = ()=>{
    let newText =" ";
    setText(newText);
  }

  const handelCopy = ()=>{
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handelExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleOnChange =(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }

const [text, setText] = useState(' ');
  return (
    <>
    <div className='container my-3' style={{color:props.mode=='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="textarea  mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} rows="12" id="myBox" ></textarea>
        </div>
        <button type="button" class="btn btn-primary " onClick={handelUpClick} id="btn">Convert to Uppercase</button>
        <button type="button" class="btn btn-primary  mx-2 " onClick={handelLoClick} id="btn">Convert to LowerCase</button>
        <button type="button" class="btn btn-primary  mx-2 " onClick={handelClearClick} id="btn">Clear Text</button>     
        <button type="button" class="btn btn-primary  mx-2 " onClick={handelCopy} id="btn">Copy Text</button>    
        <button type="button" class="btn btn-primary  mx-2 " onClick={handelExtraSpaces} id="btn">Remove Extraspaces</button>           
    </div>
    <div className='container my-3'style={{color:props.mode=='light'?'black':'white'}}>
        <h4>Your Text Summery</h4>
        <p>{text.split(" ").length} words and {text.length} char</p>
        <p>{0.0008 * text.split(" ").length} minutes read</p>        
        <h6>Preview</h6>
        <p>{text}</p>
    </div>
    </>
  )
}


