import {put, takeEvery, call} from "redux-saga/effects"
import {
    asyncGetHotelPhotosID,
    asyncGetHotels,
    errorHandler,
    setHotelPhotosIDToStore,
    setHotelsToStore,
    setLoadBar,
    updatePrevReqData
} from "../hotels/hotels-actions";
import axios from "axios";
import {fetchHotels, fetchHotelsPhotosID} from "../../Api/hotelsApi";



function* fetchHotelsWorker(action) {
    try {
        yield put(setLoadBar({status: true}))
        yield put(updatePrevReqData({
            daysNum: action.payload.prevDaysNum,
            date: action.payload.prevData,
            location: action.payload.prevLocation
        }))
        const {data}= yield call(
            axios.get,
            fetchHotels(),
            {
                params:{
                    location: action.payload.location,
                    currency: 'rub',
                    checkIn: action.payload.checkIn,
                    checkOut: action.payload.checkOut,
                    limit: 10
                }
            })
        yield put(setHotelsToStore(data))
        yield put(setLoadBar({status: false}))
    } catch (error) {
        yield put(setLoadBar({status: false}))
        yield put(errorHandler(error))
    }
}

function* fetchHotelsPhotosWorker(action) {
    try {
        const {data} = yield call(
            axios.get,
            fetchHotelsPhotosID(),
            {
                params: {
                    id: action.payload.hotel_id
                }
            })
        yield put(setHotelPhotosIDToStore({data:data, hotelID:action.payload.hotel_id}))
    } catch (error) {
        yield put(errorHandler(error))
    }
}


export function* hotelsWatcher() {
    yield takeEvery(asyncGetHotels.type, fetchHotelsWorker)
    yield takeEvery(asyncGetHotelPhotosID.type, fetchHotelsPhotosWorker)
}