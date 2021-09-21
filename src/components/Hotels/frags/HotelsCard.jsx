import React from "react";
import style from "../hotels.module.scss"
import {useSelector} from "react-redux";
import GreenCircularProgress from "../../../feauters/hotels/GreenCircularProgressBar";
import HotelItem from "./HotelItem";
import ImageSlider from "./ImagesSlider";


const HotelsCard = () => {

    const hotelsFromStore = useSelector(state => state.hotels.items)
    const fetching = useSelector(state => state.hotels.fetchingStatus)

    const checkInDate = useSelector(state => state.hotels.filter.checkInDate)
    const prevDaysNum = useSelector(state => state.hotels.filter.prevDaysNum)


    let hotelsCards = (hotelsFromStore !== undefined)? hotelsFromStore.map(item => <HotelItem
        key={item.id}
        hotelName={item.hotelName}
        checkInDate={checkInDate}
        livingDays={prevDaysNum}
        stars={item.stars}
        price={item.priceAvg}
    />) : null

    return (
        <div className={style.hotels}>
            <ImageSlider/>
            <h1>Hotels</h1>
            {(fetching)? <GreenCircularProgress/> : null}
            {hotelsCards}
        </div>
    )
}


export default HotelsCard;