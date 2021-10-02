import React from "react";
import style from "./hotelsCard.module.scss"
import ImageSlider from "./ImagesSlider";
import HotelItem from "../MultipleUsage/HotelItem";
import {useDispatch, useSelector} from "react-redux";
import {convertMonthNumToStr} from "../../../feauters/logic/anyLogic";
import homeHotelLogo from "../../../assets/svg/HomeHotelLogo.svg";
import {asyncGetHotelPhotosID} from "../../../redux/hotels/hotels-actions";
import SvgIcon from '@mui/material/SvgIcon';
import {ReactComponent as ArrowRight} from "../../../assets/svg/arrows/arrow_right.svg";


const HotelsBody = () => {

    const hotelsFromStore = useSelector(state => state.hotels.items)
    const favorites = useSelector(state => state.hotels.favorites)

    const checkInDate = useSelector(state => state.hotels.filter.checkInDate)
    const prevDaysNum = useSelector(state => state.hotels.actRequest.daysNum)
    const prevLocation = useSelector(state => state.hotels.actRequest.location)
    const prevDate = useSelector(state => state.hotels.actRequest.date)

    const dispatch = useDispatch();

    let hotelsItems = (hotelsFromStore !== undefined) ?
        hotelsFromStore.map(item =>
            <div key={item.id} className={style.itemWrapper}>
                <div className={style.itemWrapperHomeBtn} onClick={() => {
                    dispatch(asyncGetHotelPhotosID({hotel_id: item.id}))
                }}>
                        <img src={homeHotelLogo} alt="Home logo"/>
                </div>
                <HotelItem
                    style={style}
                    item={item}
                    hotels={hotelsFromStore}
                    favorites={favorites}
                    favorChecked={item.favorChecked}
                    checkInDate={checkInDate}
                    livingDays={prevDaysNum}
                />
            </div>
        ) : null

    let favoritesLength = Object.keys(favorites).length

    return (
        <div className={style.hotelsBody}>
            <div className={style.breadHeader}>
                <div className={style.breadCrumbs}>
                    Отели {<SvgIcon component={ArrowRight}/>} {prevLocation}
                </div>
                <div className={style.reqDate}>{convertMonthNumToStr(prevDate)}</div>
            </div>
            <div className={style.imagesSection}>
                <ImageSlider/>
            </div>
            <div className={style.favSum}>Добавлено в Избраное: <b>{favoritesLength}</b>
                {(favoritesLength === 1) ? ' отель' :
                    (favoritesLength > 4 ||
                        favoritesLength === 0) ? ' отелей' : ' отеля'}
            </div>
            <div className={style.hotelsBodyScroller}>
                {hotelsItems}
            </div>
        </div>
    )
}

export default HotelsBody;