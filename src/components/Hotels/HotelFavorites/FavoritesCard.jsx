import React from "react";
import style from "../hotels.module.scss"
import {useSelector} from "react-redux";
import HotelItem from "../HotelCard/HotelItem";


const FavoritesCard = () => {

    const favoriteHotels = useSelector(state => state.hotels.favorites)

    const checkInDate = useSelector(state => state.hotels.filter.checkInDate)
    const prevDaysNum = useSelector(state => state.hotels.filter.prevDaysNum)

    let hotelsItems = (favoriteHotels !== undefined) ?
        favoriteHotels.map(item => <HotelItem
            key={item.id}
            item={item}
            checkInDate={checkInDate}
            livingDays={prevDaysNum}
        />) : null

    return (
        <div className={style.favorites}>
            <h1>Favorites</h1>
            {hotelsItems}
        </div>
    )
}


export default FavoritesCard;