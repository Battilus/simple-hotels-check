import React from "react";
import style from "../hotels.module.scss"
import {Rating} from '@mui/material';
import homeHotelLogo from "../../../assets/svg/HomeHotelLogo.svg"
import {addToFavorites, removeFromFavorites} from "../../../redux/hotels/hotels-actions";
import {useDispatch} from "react-redux";


const HotelItem = (props) => {

    let dispatch = useDispatch()

    const callAddToFavorites = () => {
        dispatch(addToFavorites({hotelItem: props.item}))
    }

    const callRemoveFromFavorites = () => {
        dispatch(removeFromFavorites({hotelItem: props.item}))
    }

    return (
        <div className={style.item}>
            <div>
                <img src={homeHotelLogo} alt="Home logo"/>
            </div>
            <div>
                <h3>{props.item.hotelName}</h3>
                <p>{props.checkInDate} - {props.livingDays} Дней</p>
                <Rating value={props.item.stars} readOnly/>
            </div>
            <div>
                <button onClick={callAddToFavorites}>Like</button>
                <button onClick={callRemoveFromFavorites}>Dislike</button>
                <p>Price: <b>{props.item.priceAvg}₽</b></p>
            </div>
        </div>
    )
}


export default HotelItem;