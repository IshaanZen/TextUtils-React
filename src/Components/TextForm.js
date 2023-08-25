import React, { useState } from 'react';

export default function TextForm(props) {
    
    const [text , setText] = useState("Enter your Text");
    
    //Event Handling
    const HandletoUPclick = ()=>{
        console.log("convert button clicked")
        
        let newText = text.toUpperCase();
        setText(newText);
        props.alertsProp("Text Converted Into UPPERCASE" , "success");
    }

    const HandletoDownclick = () =>
    {
        console.log("lowercase btn clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.alertsProp("Text Converted Into lowercase" , "success");
    }
    const HandleClearclick = () =>
    
    {
        console.log("lowercase btn clicked")
        let newText = ("");
        setText(newText)
        props.alertsProp("Text Cleared" , "success");
    }
    const removeSpaces= () =>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.alertsProp("Space Removed" , "success");
    }


    const textToSpeech = () =>
    {
        console.log("text to speech btn");
        //to make the bot speak what is written on the text box
        let newSpeech= new SpeechSynthesisUtterance(text);
        //to control pitch , volume , speech
        newSpeech.pitch = 1;
        newSpeech.volume = 1;
        newSpeech.rate = 1; 
        //to make the defined newSpeech run/speak
        speechSynthesis.speak(newSpeech);

        props.alertsProp("Text - To - Speech" , "success");
    }
    
    const copyText = ()=>{
        console.log("Text Copied")
        var text =  document.getElementById("TextArea")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.alertsProp("Text copied " , "success")
    }

    const handleonChange= (event) =>{
        console.log("ON CHANGE")
        setText(event.target.value) // to put value in the boc cz by default the value is {Text} and we cant make any modifications to it
    }


    return (
    <>
        {/* <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div> */}
        
    <div className="container">
        <h1>{props.heading}</h1>
            <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.togglemode === 'light' ? 'white':'black' , 
                    color: props.togglemode === 'dark' ? 'white':'black'}} id="TextArea" rows="8"></textarea>
            </div>
        <button className="btn btn-primary"  onClick={HandletoUPclick}>Convert To UPPER CASE</button>
        <button className="btn btn-success mx-2"  onClick={HandletoDownclick}>Convert To lower case</button>
        <button className="btn btn-danger"  onClick={HandleClearclick}>Clear</button>
        <button className="btn btn-warning mx-2"  onClick={textToSpeech}>Text To Speech</button>
        <button className="btn btn-dark mx-2"  onClick={removeSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-success mx-2"  onClick={copyText}>Copy Text</button>




    </div>
        
        <div className="container my-3" >
            <h2>This is your text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>You can averagely read this text in {0.008 * text.split(" ").length} Minutes </p>
        </div>

        <div className="container my-3 ">
            <h2>Preview of the content</h2>
            <p>{text.length>0?text:"Enter some Text in the Text Box To preview it here"}</p>
        </div>
    </>
  )
}
