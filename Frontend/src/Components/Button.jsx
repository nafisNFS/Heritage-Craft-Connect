import style from './Button.module.css'

export default function Button({text, change = null, disabled:dis = false, type = "button"}){
    return (
        <>
            {change ? <button className={style.button} onClick={change} disabled={dis} type={type}>{text}</button> :
            <button className={style.button} disabled={dis} type={type}>{text}</button>}
        </>
    );
}