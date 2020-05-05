import React from "react";


function InputArea(props){
return(
<div className="form">
        <input
        onChange={props.handle}
        value={props.values}
         type="text" 
             
         />
        <button  onClick={props.add}>
          <span>Add</span>
        </button>
      </div>

);
}

export default InputArea;