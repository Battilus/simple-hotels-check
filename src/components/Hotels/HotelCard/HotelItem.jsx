import React from "react";
import style from "../hotels.module.scss"
import Rating from '@mui/material/Rating';
import homeHotelLogo from "../../../assets/svg/HomeHotelLogo.svg"
import {addToFavorites, removeFromFavorites} from "../../../redux/hotels/hotels-actions";
import {useDispatch} from "react-redux";

import {Favorite, FavoriteBorder} from "@material-ui/icons";
import Checkbox from '@mui/material/Checkbox';
import {Link} from "react-router-dom";


const HotelItem = (props) => {

    const {
        item,
        favorites,
        favorChecked,
        hotels,
        checkInDate,
        livingDays
    } = props

    let dispatch = useDispatch()

    const handleChange = (event) => {
        if (event.target.checked) {
            console.log('add:', item)
            dispatch(addToFavorites({
                hotelItem: item,
                hotels: hotels,
                favorites: favorites,
                favorChecked: event.target.checked
            }))
        } else if (event.target.checked === false) {
            console.log('remove:', item)
            dispatch(removeFromFavorites({
                hotelItem: item,
                hotels: hotels,
                favorChecked: event.target.checked
            }))
        }
    };

    return (
        <div className={style.item}>
            <div>
                <Link key={item.id} to={"/hotels/" + item.id}>
                    <img src={homeHotelLogo} alt="Home logo"/>
                </Link>
            </div>
            <div>
                <h3>{item.hotelName}</h3>
                <p>{checkInDate} - {livingDays} Дней</p>
                <Rating
                    value={item.stars}
                    sx={{
                        color: '#CDBC1E'
                    }}
                    readOnly/>
            </div>
            <div>
                <Checkbox
                    icon={<FavoriteBorder/>}
                    checkedIcon={<Favorite/>}
                    checked={favorChecked}
                    sx={{
                        color: '#E55858',
                        '&.Mui-checked': {
                            color: '#E55858',
                        },
                    }}
                    onChange={handleChange}
                    inputProps={{'aria-label': 'controlled'}}
                />
                <p>Price: <b>{item.priceAvg}₽</b></p>
            </div>
        </div>
    )
}


export default HotelItem;