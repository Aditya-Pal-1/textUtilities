import React,{useState} from "react";

export default function TextForm(props) {
    const [text, setText]=useState("");
    const handleOnClick=()=>{
        console.log("button is clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case","success");
    }
    function handleOnLower(){
        let newText=text.toLowerCase(); 
        setText(newText);
        props.showAlert("converted to lower case","success");
    }
    const handleOnChangeeh=(event)=>{
        // console.log("handled");
        setText(event.target.value);
    }
    const handleOnClear=()=>{
        setText("");
        props.showAlert("Cleared!","success");
    }
    const handleOnRemove=()=>{
      let newtext=text.trim();
      setText(newtext);
      props.showAlert("spaces removed","success");
    }
    // const[MyStyle,setStyle]=useState({
    //   // color:"white",
    //   backgroundColor:"blue"
    // })
    // setStyle({
    //   // color:"black",
    //   backgroundColor:"blue"
    // })
    // let MyStyle={
    //   color:"white",
    //   backgroundColor:"lightblue"
    // }
    const handleOnCopy=()=>{
      let text=document.getElementById("MyBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to clipboard","success");  
    }
    const handleExtraSpaces=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showAlert("Removed extra spaces","success");
    }
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?'white':'black'}}   >
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChangeeh}
          style={{backgroundColor:props.mode==="dark"?'#13466e':'white',color:props.mode==="dark"?'white':'black'} }
          id="MyBox"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary" onClick={handleOnClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleOnLower}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleOnRemove}>Remove space</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleOnCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleOnClear}>Clear</button>
      
    </div>
    <div className="container my-3"  style={{color:props.mode==="dark"?'white':'black'}} >
      <h1>Your text summary</h1>
      <p>{text.trim()===""?0:text.trim().split(' ').length} words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
