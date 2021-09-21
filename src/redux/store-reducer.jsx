import authReducer from "./auth/auth-reducer";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import {hotelsWatcher} from "./saga/hotelsSaga";
import hotelsReducer from "./hotels/hotels-reducer";


const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const preloadedState = {
    auth: {
        errors: {
            email: '',
            password: '',
        },
        emailIsValid: false,
        passwordIsValid: false,
        loggedIn: true,
    },
    hotels: {
        crutchFstUpdate: false,
        fetchingStatus: false,
        items: [],
        errorMessage: '',
        filter: {
            location: '',
            checkInDate: '',
            checkOutDate: '',
            livingDaysNum: '',
            prevDaysNum: '1',
        },
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

window.store = store;

export default store;