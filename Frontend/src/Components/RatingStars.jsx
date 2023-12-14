import { useState } from 'react';
import { FaStar } from 'react-icons/fa'

export function ShowStar({rating, sz}){
    

    const styling= {
        display: "flex",
        flexDirection: "row"
    }
    
    const [ratingColor, setRatingColor] = useState(null);
    return (
        <div style={styling}>
            {/* <br /> */}
            {[...Array(5)].map((star,index)=>{
                return <FaStar size={sz} key={index}
                color={index<=(ratingColor||rating-1)?"#FD7E14":"grey"}
                />
            })}
        </div>
    );
}

export function RatingStar() {
    const styling = {
        display: "inline",
        cursor: "pointer"
    }
    const [rating, setRating] = useState(null);
    const [ratingColor, setRatingColor] = useState(null);

    return (
        <>
            {[...Array(5)].map((star, index) => {
                const currentRate = index + 1;
                return (
                    <>
                        <label key={index}>
                        <input type="radio" value={currentRate} style={{display:"none"}} onClick={()=>{
                            setRating(currentRate);
                        }}/>
                        <FaStar style={styling}
                        color={currentRate <= (ratingColor || rating)? "#FD7E14":"grey"} />
                        </label>
                    </>
                );
            })}
            {/* <div>Rating is {rating}</div> */}
            
            {/* <ShowStar rating={5}/>
            <ShowStar rating={4}/>
            <ShowStar rating={3}/>
            <ShowStar rating={2}/>
            <ShowStar rating={1}/>
            <ShowStar rating={0}/> */}
        </>
    );
}