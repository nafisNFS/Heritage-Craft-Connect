import style from './Footer.module.css'
import { Link } from 'react-router-dom';
import ViewWishlist from '../Wishlist';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.wrapper}>
                <div className={style['logo-and-motto']}>
                    <div className={style.logo}>
                        <img src="https://res.cloudinary.com/dkotituzn/image/upload/v1701181973/oi3hbp6e9isxhlgmg5nc.png" alt="Logo" />
                    </div>
                    <div>Preserving Tradition, Empowering Artisans, and Celebrating Craftsmanship.</div>
                    <div className={style.icons}>
                        <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer">
                            <img src="https://res.cloudinary.com/dkotituzn/image/upload/v1701181446/goiyok0onncgoddcrjqc.svg" alt="facebook icon" />
                        </a>
                        <a href="https://www.twitter.com" target='_blank' rel="noopener noreferrer">
                            <img src="https://res.cloudinary.com/dkotituzn/image/upload/v1701181446/qeldxfnnt1pttkiqodbv.svg" alt="twitter icon" />
                        </a>
                        <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer">
                            <img src="https://res.cloudinary.com/dkotituzn/image/upload/v1701181446/tsyhedmjxumterbvmhsm.svg" alt="instagram icon" />
                        </a>

                    </div>
                </div>
                <div className={style['shop-company-wrapper']}>

                    <div className={style['shop-company']}>
                        <h3>Shop</h3>
                        <div className={style.links}>
                            <Link to="#">Profile</Link>
                            <Link to="#">Log in</Link>
                            <Link to={`/Wishlist`}>Wishlist</Link>
                            <Link to="#">Checkout</Link>
                        </div>
                    </div>
                    <div className={style['shop-company']}>
                        <h3>Company</h3>
                        <div className={style.links}>
                            <Link to={`/Wishlist`}>Wishlist</Link>
                            <Link to="#">Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.copyright}>&copy; copyright {new Date().getFullYear()} Heritage Craft Connect</div>
        </footer>


    );
}