import React, {useEffect} from "react";
import style from "./hotels.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "../../redux/auth/auth-actions";
import FilterCard from "./HotelFilter/FilterCard";
import FavoritesCard from "./HotelFavorites/FavoritesCard";
import HotelsCard from "./HotelCard/HotelsCard";
import {fstCrutchUpdate} from "../../redux/hotels/hotels-actions";


const Hotels = () => {

    const crutchUpdater = useSelector(state => state.hotels.crutchFstUpdate)
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(signOut());
    }

    useEffect(() => {
        // Не уверен что правильно так делать, но пока пусть будет костыль
        if (!crutchUpdater) {
            dispatch(fstCrutchUpdate())
        }
    })

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <h2>Simple Hotel Check</h2>
                <button onClick={logOut}>
                    <span>Выйти</span>
                </button>
            </div>
            <div className={style.body}>
                <FilterCard />
                <FavoritesCard />
                <HotelsCard />
            </div>
        </div>
    )
}


export default Hotels;