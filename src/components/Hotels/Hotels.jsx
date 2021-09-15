import React from "react";
import style from "./hotels.module.scss"
import {useDispatch} from "react-redux";
import {signOut} from "../../redux/auth/auth-actions";
import FilterCard from "./frags/FilterCard";
import FavoritesCard from "./frags/FavoritesCard";
import HotelsCard from "./frags/HotelsCard";


const Hotels = () => {

    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(signOut());
    }

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