import React from "react";
import style from "../hotels.module.scss"
import {Rating} from '@mui/material';
import {Link} from "react-router-dom";
import homeHotelLogo from "../../../assets/svg/HomeHotelLogo.svg"


const HotelItem = (props) => {
    return (
        <div className={style.item}>
            <Link to={"/hotels/" + props.id}>
                <div>
                    <img src={homeHotelLogo} alt="Home logo"/>
                </div>
                <div>
                    <h3>{props.hotelName}</h3>
                    <p>{props.checkInDate} - {props.livingDays} Дней</p>
                    <Rating name="hotel-item-rating" value={props.stars} readOnly/>
                </div>
                <div>
                    <button>Like</button>
                    <p>Price: <b>{props.price}₽</b></p>
                </div>
            </Link>
        </div>
    )
}


export default HotelItem;