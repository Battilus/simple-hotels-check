import React from "react";
import style from "../hotels.module.scss"
import {useSelector} from "react-redux";
import HotelItem from "../HotelCard/HotelItem";


const FavoritesCard = () => {

    const hotelsFromStore = useSelector(state => state.hotels.items)

    const checkInDate = useSelector(state => state.hotels.filter.checkInDate)
    const prevDaysNum = useSelector(state => state.hotels.filter.prevDaysNum)

    let hotelsItems = hotelsFromStore.map(item =>
        (item.favorChecked) ? <HotelItem
            key={item.id}
            item={item}
            hotels={hotelsFromStore}
            favorChecked={item.favorChecked}
            checkInDate={checkInDate}
            livingDays={prevDaysNum}/> : null
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