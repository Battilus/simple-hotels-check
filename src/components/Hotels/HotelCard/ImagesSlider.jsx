import React, {useEffect} from "react";
import style from "../hotels.module.scss"
import {useParams} from "react-router-dom"
import {useDispatch} from "react-redux";
import {asyncGetHotelPhotosID} from "../../../redux/hotels/hotels-actions";


const ImageSlider = (props) => {

    // const photosIdBox = useSelector(state => state.hotels.photosID)

    let {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id !== '') {
            dispatch(asyncGetHotelPhotosID({hotel_id: id}))
        }
    }, [id, dispatch])


    // let photosUrls = (photosIdBox !== undefined) ?
    //     (Object.keys(photosIdBox).length > 1) ?
    //         photosIdBox.map(item => <img key={item.id} src={item} alt='some item'/>) :
    //         <img src={photosIdBox} alt='some item'/> :
    //     null

    return (
        <div className={style.imageSlider}>
            {/*{photosUrls}*/}
        </div>
    )
}


export default ImageSlider;