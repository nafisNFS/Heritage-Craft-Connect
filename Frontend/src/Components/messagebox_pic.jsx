import React from "react";
import Style from "./messagebox_pic.module.css"

const message = ({text})=>{
    
    return (
        <>
            <div className={Style.another}>
                <div className={Style.round}>
                    <img src=".\images\384194017_640104084770772_829708242717613349_n.jpg" alt="" />
                </div>
                <div className={Style.anotherone}>
                    <div className={Style.text}>
                        <p>Shahabuddin Akhon</p>
                        <h5>Today at 4:30 PM</h5>
                    </div>
                    <div className={Style.inner_pic}>
                        <img src=".\images\384194017_640104084770772_829708242717613349_n.jpg" alt="" />
                    </div>
                    <div className={Style.box}>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default message;