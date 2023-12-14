import React from "react";
import Style from "./Navbar.module.css";
import Button from './Button.jsx';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ()=>{
    const navigate = useNavigate();
    return (
        <>
            <div className={Style.navbar}>
                <div className={Style.upper}>
                    <div className={Style.left}>
                        <Link to="/become_seller" style={{margin:'1px'}}>Become a Seller</Link>
                    </div>
                    <div className={Style.right}>
                        <Button text="Log in" change={()=> navigate('/seller_login')}/>
                        <div className={Style.icons}>
                            <i className="fa-regular fa-bell"></i>
                            <p>Notifications</p>
                        </div>
                        <div className={Style.icons}>
                            <i className="fa-solid fa-cart-plus"></i>
                            <p>Cart</p>
                        </div>

                    </div>
                </div>
                <div className={Style.lower}>
                    <div className={Style.left}>
                        <Link to={`/home_seller`}><img src="./images/384165997_332969559130939_1111385360839973004_n.png" alt="" /></Link>
                    </div>
                    <div className={Style.middle}>
                        <a href="#">Know About Sellers</a>
                        <a href="#">Beginner's Guide</a>
                        <a href="#">Register</a>
                        
                    </div>
                    <div className={Style.right}>
                        <input type="text" className={Style.search} placeholder="Search..."></input>
                        <i className="fa fa-search icon"></i>   
                    </div> 
                </div>
            </div>
        </>
    );
}
export default Navbar;