import React from "react";

const Input = ({type,name,placeholder,value,onchange}) => {

    

    return <input type={type} name={name} placeholder={placeholder} value={value} onChange={onchange} className="core-input"/>
}

export default Input;