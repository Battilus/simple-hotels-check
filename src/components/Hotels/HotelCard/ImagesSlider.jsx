import React, {useEffect} from "react";
import style from "../hotels.module.scss"
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {asyncGetHotelPhotosID} from "../../../redux/hotels/hotels-actions";


const ImageSlider = (props) => {

    // const photosIdBox = useSelector(state => state.hotels.photosID)

    let { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id !== '') {
            dispatch(asyncGetHotelPhotosID({hotel_id:id}))
        }
    },[id, dispatch])

    return (
        <div className={style.imageSlider}>
            <p>Slider</p>
            <h3>ID: {id}</h3>
        </div>
    )
}


export default ImageSlider;