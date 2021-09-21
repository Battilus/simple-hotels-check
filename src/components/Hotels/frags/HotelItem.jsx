import React from "react";
import style from "../hotels.module.scss"
import { Rating } from '@mui/material';


const HotelItem = (props) => {
    return (
        <div className={style.item}>
            <h3>{props.hotelName}</h3>
            <div>
                <p>{props.checkInDate} - {props.livingDays} Дней</p>
            </div>
            <div>
                <Rating name="hotel-item-rating" value={props.stars} readOnly />
                <p>Price: <b>{props.price}₽</b></p>
            </div>
        </div>
    )
}


export default HotelItem;