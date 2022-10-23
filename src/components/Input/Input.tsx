import React, { FC, useState, MouseEvent, useEffect} from "react";
import './Input.css';
import { InputProps } from "./Input.types";


const Input:FC<InputProps> = ({type,onInput}) =>{
    const [focus,setFocus] = useState(false);
    const [dtype,setDtype] = useState('Input-default');
    const inputHandleChange = (e:MouseEvent<HTMLInputElement>)=>{
        setFocus(true);
        onInput(e);
    };
    useEffect(()=>{
        focus ? setDtype('Input-focus') : setDtype(`Input-${type}`);
    },[focus]);
    
    return (
        <input 
            type="text" 
            className={`Input ${dtype}`} 
            onBlur = { ()=>setFocus(false) }
            onInput={inputHandleChange} />
    )
};

export default Input;