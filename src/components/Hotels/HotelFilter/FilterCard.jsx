import React, {useEffect} from "react";
import style from "../hotels.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {
    asyncGetHotels,
    updateCheckOutData,
    updateDateField,
    updateDaysNum,
    updateLocation
} from "../../../redux/hotels/hotels-actions";
import {RecTextField} from "../../../feauters/UI/CmInputField";



const FilterCard = () => {

    const crutchUpdater = useSelector(state => state.hotels.crutchFstUpdate)
    const crutchFstFetch = useSelector(state => state.hotels.crutchFstFetch)

    const location = useSelector(state => state.hotels.filter.location)
    const checkInDate = useSelector(state => state.hotels.filter.checkInDate)
    const checkOutDate = useSelector(state => state.hotels.filter.checkOutDate)
    const livingDaysNum = useSelector(state => state.hotels.filter.livingDaysNum)

    const dispatch = useDispatch();

    const callFilter = () => {
        dispatch(asyncGetHotels(
            {
                location: location,
                checkIn: checkInDate,
                checkOut: checkOutDate,
                prevDaysNum: livingDaysNum,
                prevData: checkInDate,
                prevLocation: location
            }))
    }

    const callUpdateLocation = (e) => {
        dispatch(updateLocation({
            location: e.target.value
        }))
    }

    const callUpdateCheckInDate = (e) => {
        dispatch(updateDateField({
            checkInDate: e.target.value
        }))
    }

    const callUpdateDaysNum = (e) => {
        dispatch(updateDaysNum({
            checkIn: checkInDate,
            daysNum: e.target.value
        }))
    }

    useEffect(() => {
        if(crutchFstFetch) callFilter()
    })

    useEffect(() => {
        const callUpdateCheckOutDate = (inData, days) => {
            dispatch(updateCheckOutData(
                {
                    checkIn: inData,
                    daysNum: days
                }))
        }

        //Еще один костыль (без него хук срабатывает впервый раз раньше, чем загрузятся дефолтные данные и ожидаемо все дропает)
        if (crutchUpdater) {
            callUpdateCheckOutDate(checkInDate, livingDaysNum)
        }
    }, [checkInDate, livingDaysNum, crutchUpdater, dispatch])

    return (
        <div className={style.filter}>
            <div className={style.location}>
                <div className={style.description}>Локация</div>
                <RecTextField
                    variant="outlined"
                    value={location}
                    onChange={callUpdateLocation}
                    autoComplete="street-address"
                />
            </div>
            <div className={style.date}>
                <div className={style.description}>Дата заселения</div>
                <RecTextField
                    id="date"
                    type="date"
                    variant="outlined"
                    value={checkInDate}
                    onChange={callUpdateCheckInDate}
                />
            </div>
            <div className={style.daysNumber}>
                <div className={style.location}>
                    <div className={style.description}>Количество дней</div>
                    <RecTextField
                        variant="outlined"
                        value={livingDaysNum}
                        onChange={callUpdateDaysNum}
                    />
                </div>
            </div>
            <div className={style.searchBtn}>
                <button onClick={callFilter}>Найти</button>
            </div>
        </div>
    )
}


export default FilterCard;