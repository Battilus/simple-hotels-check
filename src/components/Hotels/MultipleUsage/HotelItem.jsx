import React from "react";
import Rating from '@mui/material/Rating';
import {addToFavorites, asyncGetHotelPhotosID, removeFromFavorites} from "../../../redux/hotels/hotels-actions";
import {useDispatch} from "react-redux";
import {Favorite, FavoriteBorder} from "@material-ui/icons";
import Checkbox from '@mui/material/Checkbox';


const HotelItem = (props) => {

    const {
        style,
        item,
        favorChecked,
        hotels,
        favorites,
        checkInDate,
        livingDays
    } = props

    let dispatch = useDispatch()

    const handleChange = (event) => {
        if (event.target.checked) {
            dispatch(addToFavorites({
                favorId: item.id,
                hotels: hotels,
                favorites: favorites,
                itemToPush: item
            }))
        } else if (event.target.checked === false) {
            dispatch(removeFromFavorites({
                favorId: item.id,
                hotels: hotels,
                favorites: favorites,
                itemToPush: item
            }))
        }
    };

    return (
        <div className={style.item}>
            <div className={style.itemLeft} onClick={() => {
                dispatch(asyncGetHotelPhotosID({hotel_id: item.id}))
            }}>
                <div className={style.hotelName}>{item.hotelName}</div>
                <div className={style.days}>{checkInDate} - {livingDays} Дней</div>
                <Rating
                    value={item.stars}
                    sx={{
                        color: '#CDBC1E',
                    }}
                    readOnly/>
            </div>
            <div className={style.itemRight}>
                <div className={style.like}>
                    <Checkbox
                        icon={<FavoriteBorder/>}
                        checkedIcon={<Favorite/>}
                        checked={favorChecked}
                        sx={{
                            color: '#E55858',
                            width: '42px',
                            '&.Mui-checked': {
                                color: '#E55858',
                            },
                        }}
                        onChange={handleChange}
                        inputProps={{'aria-label': 'controlled'}}
                    />
                </div>
                <div className={style.priceTxt}>Price: <span>{item.priceAvg}₽</span></div>
            </div>
        </div>
    )
}


export default HotelItem;