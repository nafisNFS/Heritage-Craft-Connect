import React, { useEffect, useState } from "react";
import style from "./Input_box.module.css";
const Input_box = (props)=>{
    const [data,setdata]= useState('');
    const changeHandler = (e)=>{
        const value = e.target.value;
        setdata(value)
        props.callback(value);
    }

    return (
        <>
            <div className={style.type} >
                <p>{props.name}<span>*</span></p>
                <input 
                    type="text"
                    value={data}
                    placeholder={props.placeholder}
                    onChange={changeHandler}
                />
            </div>
        </>
    )
}
export default Input_box;