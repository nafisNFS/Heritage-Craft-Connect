import style from './Card.module.css'
import { ShowStar } from './RatingStars';

export function KnowCraftCard({ image, desc, title, location }) {
    return (
        <div className={style.card}>
            <img src={image} alt={title} />
            <div className={style['div-info']}>
                {/* <p>{rating}</p> */}
                {/* <ShowStar rating={rating} sz={25}/> */}
                <p className={`${style['font-weight-700']}`}>{title}</p>
                <p>{location}</p>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default function Card({ image, rating, productName, location, price, category }) {
    return (
        <div className={style.card}>
            <img src={image} alt={productName} />
            <div className={style['div-info']}>
                {/* <p>{rating}</p> */}
                <ShowStar rating={rating} sz={25} />
                <p className={style['font-weight-700']}>{productName}</p>
                <p>{category}</p>
                <p>{location}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

export function SellerCard({ image, rating, productName, location, price, storedQuantity }) {
    return (
        <div className={style.card}>
            <img src={image} alt={productName} />
            <div className={style['div-info']}>
                {/* <p>{rating}</p> */}
                <ShowStar rating={rating} sz={25} />
                <p>{productName}</p>
                <p>{location}</p>
                <p>{price}</p>
                <p>{storedQuantity}</p>
            </div>
        </div>
    );
}

export function SellerHomeCard({ image, rating, productName, price }) {
    return (
        <div className={style.card}>
            <img src={image} alt={productName} />
            <div className={style['div-info']}>
                {/* <p>{rating}</p> */}
                <ShowStar rating={rating} sz={25} />
                <p>{productName}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}