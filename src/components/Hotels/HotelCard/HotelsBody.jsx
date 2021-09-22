import React from "react";
import style from "../hotels.module.scss"
import ImageSlider from "./ImagesSlider";
import HotelItem from "./HotelItem";
import {useSelector} from "react-redux";


const HotelsBody = () => {

    const hotelsFromStore = useSelector(state => state.hotels.items)
    // const fetching = useSelector(state => state.hotels.fetchingStatus)
    // console.log("fetching:",fetching)

    const checkInDate = useSelector(state => state.hotels.filter.checkInDate)
    const prevDaysNum = useSelector(state => state.hotels.filter.prevDaysNum)

    let hotelsItems = (hotelsFromStore !== undefined)? hotelsFromStore.map(item => <HotelItem
        key={item.id}
        id={item.id}
        hotelName={item.hotelName}
        checkInDate={checkInDate}
        livingDays={prevDaysNum}
        stars={item.stars}
        price={item.priceAvg}
    />) : null

    return (
        <div className={style.hotelsBody}>
            <ImageSlider/>
            <div className={style.hotelsBodyScroller}>
                {hotelsItems}
            </div>
        </div>
    )
}

export default HotelsBody;