import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success")
    }
    const handleLowClick=()=>{
      //console.log("Lowercase was clicked"+text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!","success")
  }
    const handleCapClick=()=>{
      let words = text.split(" ");
      let uppercaseword = "";
      words.forEach(element=>{
        uppercaseword+=element.charAt(0).toUpperCase()+element.slice(1)+" ";
      })
      setText(uppercaseword);
      props.showAlert("Converted to capcase!","success")
    }
    const handleSenClick=()=>{
      let words = text.split(".");
      let sentencecaseword = "";
      words.forEach(element=>{
        sentencecaseword+=element.charAt(0).toUpperCase()+element.slice(1)+" .  ";
      })
      setText(sentencecaseword);
      props.showAlert("Converted to sentencecase!","success")
    }
    
    const handleClearClick=()=>{
      let newText = '';
      setText(newText);
      props.showAlert("Textbox Cleared!","success")
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const handleCopy=()=>{
      let data = document.getElementById("myBox");
      data.select();
      navigator.clipboard.writeText(data.value);
      props.showAlert("Text copied!","success")
    }

    const handleExtraSpace=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces are removed!","success")
    }
    const [text, setText] = useState('');
    
  return (
    <>
    <div style={{color:props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="my-0">
      <label htmlFor="myBox" className="form-label"></label>
      <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#272323':'white',color:props.mode==='light'?'black':'white'}} rows="8" value={text}></textarea>
      <button className="mx-1 my-3 btn btn-primary" onClick={handleUpClick} disabled={text.length===0}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick} disabled={text.length===0}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCapClick} disabled={text.length===0}>Capitalize Case</button>  
      <button className="btn btn-primary mx-1 my-1" onClick={handleSenClick} disabled={text.length===0}>Sentence Case</button>  
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace} disabled={text.length===0}>Remove extra space</button>  
      <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy text</button>  
      <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
      </div>
    </div>
     <div className="container" style={{color:props.mode==='light'?'black':'white'}} >
       <h2>Your text Summary</h2>
       <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
       <p>Time to read the text is {0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} minutes </p>
      <h2>Text Preview</h2>
       <p>{text.length>0?text:"Nothing to preview"}</p>
     </div>
    </>
  )
}

