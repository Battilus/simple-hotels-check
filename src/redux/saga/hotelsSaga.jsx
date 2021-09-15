import {put, takeEvery, call} from "redux-saga/effects"
import {asyncGetHotels, errorHandler, setHotelsToStore, setLoadBar} from "../hotels/hotels-actions";


let fetchData = {
    location: 'Москва',
    checkIn: '2021-09-14',
    checkOut: '2021-09-20'
}

const fetchHotelsFromApi = (data=fetchData) =>
    fetch('http://engine.hotellook.com/api/v2/cache.json?location='+data.location+
        '&currency=rub&checkIn='+data.checkIn+
        '&checkOut='+data.checkOut+''
    )
// const fetchHotelsFromApi = () => fetch('http://engine.hotellook.com/api/v2/cache.json')

function* fetchHotelsWorker() {
    try {
        yield put(setLoadBar({status:true}))
        const hotelsData = yield call(fetchHotelsFromApi)
        const hotelsJson = yield call(() => new Promise(res => res(hotelsData.json())))
        yield put(setHotelsToStore(hotelsJson))
        yield put(setLoadBar({status:false}))
    }
    catch(error) {
        yield put(setLoadBar({status:false}))
        yield put(errorHandler(error))
    }
}


export function* hotelsWatcher() {
    yield takeEvery(asyncGetHotels.type, fetchHotelsWorker)
}