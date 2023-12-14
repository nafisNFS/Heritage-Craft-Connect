import React, { useEffect, useState } from "react";
import Style from "./notification_txt.module.css"

const Notification = ({name,receiverName,pic,text,time})=>{
    const [user,setuser]= useState();
    useEffect(()=>{
        if(name==receiverName) {
            setuser("You")
        }
        else {
            setuser(name)
        }
    },[])
    return (
        <>
            <div className={Style.another}>
                <div className={Style.round}>
                    <img src={pic} alt="" />
                </div>
                <div className={Style.anotherone}>
                    <div className={Style.box}>
                        <p><span>{user}</span>{text}</p>
                        <h5>{time}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Notification;