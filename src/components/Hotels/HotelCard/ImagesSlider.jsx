import React, {useEffect} from "react";
import style from "./hotelsCard.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {asyncGetHotelPhotosID} from "../../../redux/hotels/hotels-actions";


const ImageSlider = (props) => {

    const photosIdBox = useSelector(state => state.hotels.photosID)
    const hotelsItems = useSelector(state => state.hotels.items)

    let photosUrls = (Object.keys(photosIdBox).length > 1) ?
        photosIdBox.map(item => <img key={item} src={item} alt='some item'/>) :
        null

    const dispatch = useDispatch();

    useEffect(() => {
        if (Object.keys(photosIdBox).length <= 1) {
            if (Object.keys(hotelsItems).length > 0) dispatch(asyncGetHotelPhotosID({hotel_id: hotelsItems[0].id}))
        }
    }, [dispatch, photosIdBox, hotelsItems])

    return (
        <div className={style.imageSlider}>
            {photosUrls}
        </div>
    )
}


export default ImageSlider;