/* eslint-disable no-unused-vars */
import React from "react";


import Registration from './Registration.jsx'
import LogIn from './Login.jsx'
import ProductListing from './ProductListing.jsx'
import IndividualProduct from './IndividualProduct.jsx'
import Become_seller from './Become_seller.jsx'
import Checkout from './Checkout.jsx'
import Footer from "./Components/Footer.jsx";
import { Routes,Route } from "react-router";
import Home_seller from "./Home_seller.jsx";
import Authentication from "./Authentication.jsx";
import Messaging_sell from "./Messaging_seller.jsx";
import Messaging_buyer from "./Messaging_buyer.jsx";
import Seller_Registration from "./Seller_Registration.jsx";
import SellerLogin from "./SellerLogin.jsx"
import LandingPage from "./LandingPage.jsx";
import ProfileBox from "./ProfileBox.jsx";
import BuyerProfileBox from "./BuyerProfileBox.jsx";
import BuyerProfile from "./BuyerProfile.jsx";
import KnowTheCraft from "./KnowTheCraft.jsx";
import SellerProfile from "./SellerProfile.jsx";
import LoginNav from "./Components/LoginNav.jsx";
import ViewWishlist from "./Wishlist.jsx";
import AddAProductPage from "./AddAProductPage.jsx";
import Forgotpass from "./Forgotpass.jsx";
import PassChangeVerify from "./PassChangeVerify.jsx";
import Add_Know from "./Add_Know.jsx";
import SendMail from "./SendMail.jsx";
import SendMailSeller from "./SendMailSeller.jsx";
import ForgotpassSeller from "./ForgotpassSeller.jsx";
import PassChangeVerifySeller from "./PassChangeVerifySeller.jsx";
import Community_home from "./Community_home.jsx";
import SellerProductListing from "./SellerProductListing.jsx";
// import {RatingStar} from "./Components/RatingStars.jsx";
import IndividualKnowTheCraft from "./IndividualKnowTheCraft.jsx";
import Order_History from "./Order_History.jsx";
import SellerIndividualProduct from "./SellerIndividualProduct.jsx";
import OrderSellerList from "./OrderListSeller.jsx";
import Community_seller from "./Community_seller.jsx"
import Notification from "./Notification.jsx";
import ProfilePictureChange from "./PPchange.jsx";

const Routing = ()=>{
    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage/>}></Route>
                <Route path='/login' element={<LogIn/>}></Route>
                <Route path='/registration' element={<Registration/>}></Route>
                <Route path='/product-listing' element={<ProductListing/>}></Route>
                <Route path='/product-listing/:id' element={<IndividualProduct/>}></Route>
                <Route path='/become_seller' element={<Become_seller/>}></Route>
                {/* <Route path='/checkout/:obj' element={<Checkout/>}></Route> */}
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/become_seller' element={<Become_seller/>}></Route>
                <Route path='/home_seller' element={<Home_seller/>}></Route>
                <Route path='/auth' element={<Authentication/>}></Route>
                <Route path='/message_seller' element={<Messaging_sell/>}></Route>
                <Route path='/message_buyer' element={<Messaging_buyer/>}></Route>
                <Route path='/seller_reg' element={<Seller_Registration/>}></Route>
                <Route path='/seller_login' element={<SellerLogin/>}></Route>
                <Route path='/profile_box' element={<ProfileBox/>}></Route>
                <Route path='/buyer_profile_box' element={<BuyerProfileBox/>}></Route>
                <Route path='/buyer_profile' element={<BuyerProfile/>}></Route>
                <Route path='/know-the-craft' element={<KnowTheCraft/>}></Route>
                <Route path='/know-the-craft/:id' element={<IndividualKnowTheCraft/>}></Route>
                <Route path='/seller_profile' element={<SellerProfile/>}></Route>
                <Route path='/login_nav' element={<LoginNav/>}></Route>
                <Route path='/Wishlist' element={<ViewWishlist/>}></Route>
                <Route path='/AddAProductPage' element={<AddAProductPage/>}></Route>
                <Route path='/forgotpass' element={<Forgotpass/>}></Route>
                <Route path='/passChangeVerify' element={<PassChangeVerify/>}></Route>
                <Route path='/sendmail' element={<SendMail/>}></Route>
                <Route path='/sendmailseller' element={<SendMailSeller/>}></Route>
                <Route path='/forgotpass_seller' element={<ForgotpassSeller/>}></Route>
                <Route path='/passChangeVerify_seller' element={<PassChangeVerifySeller/>}></Route>
                <Route path='/community' element={<Community_home/>}></Route>
                <Route path='/Community_seller' element={<Community_seller/>}></Route>
                <Route path='/Add_know' element={<Add_Know/>}></Route>
                <Route path='/sellerProductListing' element={<SellerProductListing/>}></Route>
                <Route path='/Notification' element={<Notification/>}></Route>
                {/* <Route path='/star' element={<RatingStar/>}></Route> */}
                <Route path='/Order_History' element={<Order_History/>}></Route>
                <Route path='/SellerIndividualProduct/:id' element={<SellerIndividualProduct/>}></Route>
                <Route path='/Order_Seller_List' element={<OrderSellerList/>}></Route>
                <Route path='/pic_change' element={<ProfilePictureChange/>}></Route>
            </Routes>
        </>
    )
}
export default Routing;