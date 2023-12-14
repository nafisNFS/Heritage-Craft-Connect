import react, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from "./Notification.module.css"
import Notification_txt from "./Components/Notification_txt"
import {get_notification_request,notification_delete} from "./Actions/notification_redux"
const Notification = ()=>{
    const buyerId = sessionStorage.getItem("buyer_id");
    const {isLoading,error,info} = useSelector((state)=> state.notificationvalue)
    const dispatch = useDispatch()
    console.log(info)
    useEffect(()=>{
        dispatch(get_notification_request(buyerId))
    },[])
    const deleteNotification = () => {
        dispatch(notification_delete(buyerId))
    };
    return (
        <>
            <div className={style.container}>
                <div className={style.upper}>
                    <p>Notification</p>
                </div>
                <div className={style.middle}>
                    <div className={style.inner}>
                        {isLoading && <p style={{"textAlign":"center","fontSize":"1.5em"}}>Loading.........</p>}
                        {Array.isArray(info)? ( info.map((value) => (
                            <div key={value.id}>
                                <Notification_txt name={value.senderName} receiverName={value.receiverName} pic={value.senderPic} text={value.notification} time={value.date}/>
                            </div>
                        )) ):(<p>No Notification</p>)}

                        {error && <p>Error While Fetching the value</p>}

                    </div>
                </div>
                <div className={style.lower} onClick={deleteNotification} >
                    <p>Mark as Read</p>
                </div>
            </div>
        </>
    )
}
export default Notification;