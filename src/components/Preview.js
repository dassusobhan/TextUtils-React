import React from 'react'

export default function Preview(props) {
    let myPreviewText=props.text.length>0?props.text:"Enter something in the textbox above to preview it.";
  return (
    <div className="my-3" style={{color: props.mode==='dark'?"white":"black"}}>
    <h2>Preview</h2>
    <p id="preview">{myPreviewText}</p>
  </div>
  )
}
