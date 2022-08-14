import React, {useState} from 'react'


// console.log(useState('Enter text here2'))

export default function TextForm(props) {
    const handleUpClick = ()=> {
      //  console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=> {
        // console.log("Lower case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    // const changeColor = ()=> {
    //     console.log("color change was clicked"+ text);
    //     let newText = text.fontcolor("red");
       
    //   setText(newText)
    // }
    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
  return (
      <>
    <div className="container" style={{color: props.mode === 'dark'?'red':'green'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        {/* <button className="btn btn-primary mx-2" onClick={changeColor}>Change color</button> */}

    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'red':'blue'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  )
}
