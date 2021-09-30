import React from "react";
import style from "./favorites.module.scss"
import {useDispatch, useSelector} from "react-redux";
import HotelItem from "../MultipleUsage/HotelItem";
import {sortFavForPrice, sortFavForRating} from "../../../redux/hotels/hotels-actions";


const FavoritesCard = () => {

    const hotelsFromStore = useSelector(state => state.hotels.items)
    const favorites = useSelector(state => state.hotels.favorites)

    const checkInDate = useSelector(state => state.hotels.filter.checkInDate)
    const prevDaysNum = useSelector(state => state.hotels.actRequest.daysNum)

    const dispatch = useDispatch()

    let hotelsItems = favorites.map(item =>
        <div key={item.id} className={style.favItemWrapper}>
            <HotelItem
                style={style}
                item={item}
                hotels={hotelsFromStore}
                favorites={favorites}
                favorChecked={item.favorChecked}
                checkInDate={checkInDate}
                livingDays={prevDaysNum}/>
        </div>
    )

    return (
        <div className={style.favorites}>
            <div className={style.head}>Избранное</div>
            <div className={style.favoritesFilterBtns}>
                <button type="button"
                        onClick={() => dispatch(sortFavForRating({direction: 'up'}))}>Rating
                </button>
                <button type="button" onClick={() => dispatch(sortFavForPrice({direction: 'up'}))}>Price</button>
            </div>
            <div className={style.favoritesScroller}>
                {hotelsItems}
            </div>
        </div>
    )
}


export default FavoritesCard;