import React from "react";

const Textarea = ({rows,cols,placeholder,value ,onchange}) => {
    
    return <textarea rows={rows} cols={cols} value={value} onChange={onchange} placeholder={placeholder}/>

}

export default Textarea;