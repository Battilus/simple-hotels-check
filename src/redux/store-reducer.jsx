import authReducer from "./auth/auth-reducer";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import {hotelsWatcher} from "./saga/hotelsSaga";
import hotelsReducer from "./hotels/hotels-reducer";
import {loadLocalState} from "./local-storage";


const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const preloadedState = {
    auth: {
        forms: {
            userEmail: '',
            userPassword: '',
        },
        errors: {
            email: '',
            password: '',
        },
        loggedIn: loadLocalState('loggedIn'),
    },
    hotels: {
        crutchFstUpdate: false,
        crutchFstFetch: false,
        fetchingStatus: false,
        requestStatus: '',
        errorMessage: '',
        filter: {
            location: '',
            checkInDate: '',
            checkOutDate: '',
            livingDaysNum: '',
            prevDaysNum: '1',
        },
        actRequest: {
            daysNum: '',
            date: '',
            location: '',
        },
        items: [],
        photosID: {},
        favorites: [],
    }
}


const store = configureStore({
    reducer: {
        auth: authReducer,
        hotels: hotelsReducer
    },
    middleware,
    preloadedState
})

sagaMiddleware.run(hotelsWatcher);

// store.subscribe(throttle(() => {
//     saveLocalState(
//         store.getState().auth.loggedIn,
//         'loggedIn')
// }, 1000))

window.store = store;

export default store;