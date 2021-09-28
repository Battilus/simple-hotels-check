import React from "react";
import style from "../hotels.module.scss"
import {useSelector} from "react-redux";
import HotelItem from "../HotelCard/HotelItem";


const FavoritesCard = () => {

    const hotelsFromStore = useSelector(state => state.hotels.items)
    const favorites = useSelector(state => state.hotels.favorites)

    const checkInDate = useSelector(state => state.hotels.filter.checkInDate)
    const prevDaysNum = useSelector(state => state.hotels.filter.prevDaysNum)

    let hotelsItems = favorites.map(item =>
        <HotelItem
            key={item.id}
            item={item}
            hotels={hotelsFromStore}
            favorites={favorites}
            favorChecked={item.favorChecked}
            checkInDate={checkInDate}
            livingDays={prevDaysNum}/>
    )

    return (
        <div className={style.favorites}>
            <h1>Favorites</h1>
            <div className={style.favoritesScroller}>
                {hotelsItems}
            </div>
        </div>
    )
}


export default FavoritesCard;