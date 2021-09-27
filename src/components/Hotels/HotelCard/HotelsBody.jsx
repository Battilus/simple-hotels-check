import React from "react";
import style from "../hotels.module.scss"
import ImageSlider from "./ImagesSlider";
import HotelItem from "./HotelItem";
import {useSelector} from "react-redux";
import {Route} from "react-router-dom";


const HotelsBody = () => {

    const hotelsFromStore = useSelector(state => state.hotels.items)

    const checkInDate = useSelector(state => state.hotels.filter.checkInDate)
    const prevDaysNum = useSelector(state => state.hotels.filter.prevDaysNum)

    const requestStatus = useSelector(state => state.hotels.requestStatus)
    const errorMessage = useSelector(state => state.hotels.errorMessage)

    let hotelsItems = (hotelsFromStore !== undefined) ?
        hotelsFromStore.map(item =>
            <HotelItem
                key={item.id}
                item={item}
                hotels={hotelsFromStore}
                favorChecked={item.favorChecked}
                checkInDate={checkInDate}
                livingDays={prevDaysNum}
            />
        ) : null

    return (
        <div className={style.hotelsBody}>
            <Route path="/hotels/:id" children={<ImageSlider/>}/>
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