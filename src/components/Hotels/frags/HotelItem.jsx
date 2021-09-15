import React from "react";
import style from "../hotels.module.scss"


const HotelItem = (props) => {
    return (
        <div className={style.item}>
            <h3>{props.hotelName}</h3>
            <div>
                <p>{props.checkInDate} - {props.livingDays} Дней</p>
            </div>
            <div>
                <p>{props.stars}</p>
                <p>Price: <b>{props.price}₽</b></p>
            </div>
        </div>
    )
}


export default HotelItem;