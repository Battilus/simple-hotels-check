import React from "react";
import style from "../hotels.module.scss"
import ImageSlider from "./ImagesSlider";
import HotelItem from "./HotelItem";
import {useSelector} from "react-redux";
import {Route} from "react-router-dom";
import {convertMonthNumToStr} from "../../../feauters/logic/anyLogic";


const HotelsBody = () => {

    const hotelsFromStore = useSelector(state => state.hotels.items)
    const favorites = useSelector(state => state.hotels.favorites)

    const checkInDate = useSelector(state => state.hotels.filter.checkInDate)
    const prevDaysNum = useSelector(state => state.hotels.actRequest.daysNum)
    const prevLocation = useSelector(state => state.hotels.actRequest.location)
    const prevDate = useSelector(state => state.hotels.actRequest.date)

    const requestStatus = useSelector(state => state.hotels.requestStatus)
    const errorMessage = useSelector(state => state.hotels.errorMessage)

    let hotelsItems = (hotelsFromStore !== undefined) ?
        hotelsFromStore.map(item =>
            <HotelItem
                key={item.id}
                item={item}
                hotels={hotelsFromStore}
                favorites={favorites}
                favorChecked={item.favorChecked}
                checkInDate={checkInDate}
                livingDays={prevDaysNum}
            />
        ) : null

    let favoritesLength = Object.keys(favorites).length

    return (
        <div className={style.hotelsBody}>
            <div className={style.breadHeader}>
                <div className={style.breadCrumbs}>Отели > {prevLocation}</div>
                <div className={style.reqDate}>{convertMonthNumToStr(prevDate)}</div>
            </div>
            <Route path="/hotels/:id" children={<ImageSlider/>}/>
            <div className={style.favSum}>Добавлено в Избраное: {favoritesLength}
                {(favoritesLength === 1)? ' отель' :
                (favoritesLength > 4 ||
                    favoritesLength === 0)? ' отелей' : ' отеля'}
            </div>
            <div className={style.hotelsBodyScroller}>
                {(requestStatus === 'error') ?
                    <span className={style.error}>{errorMessage}</span> :
                    hotelsItems
                }
            </div>
        </div>
    )
}

export default HotelsBody;