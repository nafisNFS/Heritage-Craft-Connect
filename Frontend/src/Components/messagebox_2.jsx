import React from "react";
import Style from "./messagebox_2.module.css"

const message = ({text})=>{
    
    return (
        <>
            
            <div className={Style.another}>
                <div className={Style.box}>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
export default message;