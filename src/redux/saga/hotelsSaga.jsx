import {put, takeEvery, call} from "redux-saga/effects"
import {asyncGetHotels, errorHandler, setHotelsToStore, setLoadBar, updatePrevDaysNum} from "../hotels/hotels-actions";
import axios from "axios";


let fetchUrl = 'http://engine.hotellook.com/api/v2/cache.json'

function* fetchHotelsWorker(action) {
    try {
        yield put(setLoadBar({status: true}))
        const {data}= yield call(
            axios.get,
            fetchUrl,
            {
                params:{
                    location: action.payload.location,
                    checkIn: action.payload.checkIn,
                    checkOut: action.payload.checkOut
                }
            })
        // console.log('From request', hotelsData)
        yield put(setHotelsToStore(data))
        yield put(updatePrevDaysNum({prevDaysNum: action.payload.prevDaysNum}))
        yield put(setLoadBar({status: false}))
    } catch (error) {
        yield put(setLoadBar({status: false}))
        yield put(errorHandler(error))
    }
}


export function* hotelsWatcher() {
    yield takeEvery(asyncGetHotels.type, fetchHotelsWorker)
}