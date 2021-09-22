import {put, takeEvery, call} from "redux-saga/effects"
import {
    asyncGetHotelPhotosID,
    asyncGetHotels,
    errorHandler,
    setHotelPhotosIDToStore,
    setHotelsToStore,
    setLoadBar,
    updatePrevDaysNum
} from "../hotels/hotels-actions";
import axios from "axios";
import {fetchHotels, fetchHotelsPhotosID} from "../../Api/hotelsApi";



function* fetchHotelsWorker(action) {
    try {
        yield put(setLoadBar({status: true}))
        yield put(updatePrevDaysNum({prevDaysNum: action.payload.prevDaysNum}))
        const {data}= yield call(
            axios.get,
            fetchHotels(),
            {
                params:{
                    location: action.payload.location,
                    checkIn: action.payload.checkIn,
                    checkOut: action.payload.checkOut
                }
            })
        // console.log('From request', hotelsData)
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