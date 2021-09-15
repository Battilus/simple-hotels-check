import {createReducer} from "@reduxjs/toolkit";
import {
    errorHandler,
    fstCrutchUpdate,
    setHotelsToStore,
    setLoadBar,
    updateDateField,
    updateDaysNum,
    updateLocation
} from "./hotels-actions";


const hotelsReducer = createReducer({}, builder => {
    builder.addCase(fstCrutchUpdate, (state, action) => {

        let tmpState = {
            crutchFstUpdate: true,
            filter: {
                location: 'Москва',
                livingDaysNum: '1',
                checkInDate: '',
                checkOutDate: ''
            }
        }

        tmpState.filter.checkInDate = new Date().toISOString().slice(0, 10).replace(/-/g, "-")
        let date = new Date(tmpState.filter.checkInDate)
        date.setDate(date.getDate() + parseInt('1'))
        tmpState.filter.checkOutDate = date.toISOString().slice(0, 10).replace(/-/g, "-")

        return tmpState
    })
    builder.addCase(setLoadBar, (state, action) => {
        state.fetchingStatus = action.payload.status
    })
    builder.addCase(errorHandler, (state, action) => {
        console.log(action.payload.message)
        state.errorMessage = action.payload.message
    })
    builder.addCase(updateLocation, (state, action) => {
        state.filter.location = action.payload.location
    })
    builder.addCase(updateDateField, (state, action) => {
        state.filter.checkInDate = action.payload.checkInDate
    })
    builder.addCase(updateDaysNum, (state, action) => {
        let date = new Date(action.payload.checkIn)
        date.setDate(date.getDate() + parseInt(action.payload.daysNum))
        state.filter.checkOutDate = date.toISOString().slice(0, 10).replace(/-/g, "-")
        state.filter.livingDaysNum = action.payload.daysNum
    })
    builder.addCase(setHotelsToStore, (state,action) => {
        console.log(action.payload)
        if (action.payload.status === "error") {
            state.errorMessage = action.payload.message
        } else {
            state.items = action.payload.map(item => {
                return {
                    id: item.hotelId,
                    hotelName: item.hotelName,
                    stars: item.stars,
                    priceAvg: item.priceAvg,
                }
            })
        }
    })
})


export default hotelsReducer;