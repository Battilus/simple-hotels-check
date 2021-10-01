import React, {useEffect, useState} from "react";
import style from "./favorites.module.scss"
import {useDispatch, useSelector} from "react-redux";
import HotelItem from "../MultipleUsage/HotelItem";
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as ArrowUp } from "../../../assets/svg/arrows/arrow_up.svg";
import { ReactComponent as ArrowDown } from "../../../assets/svg/arrows/arrow_down.svg";
import { ReactComponent as ArrowsDisabled } from "../../../assets/svg/arrows/arrows_disabled.svg";
// import {sortFavForPrice, sortFavForRating} from "../../../redux/hotels/hotels-actions";


const FavoritesCard = () => {

    const [ selected, setSelected ] = useState('rating')
    const [ ratingDirection , setRatingDirection ] = useState('up' || 'down')
    const [ priceDirection , setPriceDirection ] = useState('up' || 'down')

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

    useEffect(() => {
        // console.log('rating:', ratingDirection)
        // console.log('price:', priceDirection)
    })

    // dispatch(sortFavForRating({direction: 'up'}))
    // dispatch(sortFavForPrice({direction: 'up'}))
    return (
        <div className={style.favorites}>
            <div className={style.head}>Избранное</div>
            <div className={style.favoritesFilterBtns}>
                <div className={`${style.ratingFilterBtn} ${(selected === 'rating')? style.enabled : ''}`}
                     onClick={() => {
                         if (selected === 'rating') {
                             setRatingDirection((ratingDirection === 'up')? 'down' : 'up')
                         } else {
                             setSelected('rating')
                         }
                     }}>
                    Рейтинг
                    <div className={style.arrows}>
                        {(selected === 'rating')?
                            (ratingDirection === 'up')?
                                <SvgIcon component={ArrowUp}/> :
                                <SvgIcon component={ArrowDown}/> :
                            <SvgIcon component={ArrowsDisabled}/>}
                    </div>
                </div>
                <div className={`${style.priceFilterBtn} ${(selected === 'price')? style.enabled : ''}`}
                     onClick={() => {
                         if (selected === 'price') {
                             setPriceDirection((priceDirection === 'up')? 'down' : 'up')
                         } else {
                             setSelected('price')
                         }
                     }}>
                    Цена
                    <div className={style.arrows}>
                        {(selected === 'price')?
                            (priceDirection === 'up')?
                                <SvgIcon component={ArrowUp}/> :
                                <SvgIcon component={ArrowDown}/> :
                            <SvgIcon component={ArrowsDisabled}/>}
                    </div>
                </div>
            </div>
            <div className={style.favoritesScroller}>
                {hotelsItems}
            </div>
        </div>
    )
}


export default FavoritesCard;