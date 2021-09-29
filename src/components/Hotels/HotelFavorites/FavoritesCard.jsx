import React from "react";
import style from "../hotels.module.scss"
import {useDispatch, useSelector} from "react-redux";
import HotelItem from "../HotelCard/HotelItem";
import {sortFavForPrice, sortFavForRating} from "../../../redux/hotels/hotels-actions";


const FavoritesCard = () => {

    const hotelsFromStore = useSelector(state => state.hotels.items)
    const favorites = useSelector(state => state.hotels.favorites)

    const checkInDate = useSelector(state => state.hotels.filter.checkInDate)
    const prevDaysNum = useSelector(state => state.hotels.actRequest.daysNum)

    const dispatch = useDispatch()

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
            <h1>Избранное</h1>
            <div className={style.favoritesFilterBtns}>
                <button type="button"
                        onClick={() => dispatch(sortFavForRating({way: 'up'}))}>Rating</button>
                <button type="button" onClick={() => dispatch(sortFavForPrice({way: 'up'}))}>Price</button>
            </div>
            <div className={style.favoritesScroller}>
                {hotelsItems}
            </div>
        </div>
    )
}


export default FavoritesCard;