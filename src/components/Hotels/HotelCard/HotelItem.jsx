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
        favorChecked,
        hotels,
        favorites,
        checkInDate,
        livingDays
    } = props

    let dispatch = useDispatch()

    const handleChange = (event) => {
        console.log('click')
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