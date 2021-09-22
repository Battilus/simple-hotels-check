import {createReducer} from "@reduxjs/toolkit";
import {
    errorHandler,
    fstCrutchUpdate,
    setHotelsToStore,
    setLoadBar,
    updateCheckOutData,
    updateDateField,
    updateDaysNum, updatePrevDaysNum,
    updateLocation, setHotelPhotosIDToStore
} from "./hotels-actions";
import {fetchHotelsPhotos} from "../../Api/hotelsApi";


const hotelsReducer = createReducer({}, builder => {
    builder.addCase(fstCrutchUpdate, (state, action) => {

        let tmpState = {
            crutchFstUpdate: true,
            filter: {
                location: 'Москва',
                livingDaysNum: '1',
                checkInDate: '',
                checkOutDate: '',
                prevDaysNum: '1'
            }
        }

        tmpState.filter.checkInDate = new Date().toISOString().slice(0, 10).replace(/-/g, "-")
        let date = new Date(tmpState.filter.checkInDate)
        date.setDate(date.getDate() + parseInt(tmpState.filter.livingDaysNum))
        tmpState.filter.checkOutDate = date.toISOString().slice(0, 10).replace(/-/g, "-")

        return tmpState
    })
    builder.addCase(setLoadBar, (state, action) => {
        state.fetchingStatus = action.payload.status
    })
    builder.addCase(errorHandler, (state, action) => {
        state.errorMessage = action.payload.message
        state.requestStatus = 'error'
    })
    builder.addCase(updateLocation, (state, action) => {
        state.filter.location = action.payload.location
    })
    builder.addCase(updateDateField, (state, action) => {
        state.filter.checkInDate = action.payload.checkInDate
    })
    builder.addCase(updateCheckOutData, (state, action) => {
        let date = new Date(action.payload.checkIn)
        let days = (action.payload.daysNum === "" ||
            action.payload.daysNum === 0 ||
            !/^[0-9]+$/.test(action.payload.daysNum)) ? 1 : action.payload.daysNum
        date.setDate(date.getDate() + parseInt(days))
        state.filter.checkOutDate = date.toISOString().slice(0, 10).replace(/-/g, "-")
    })
    builder.addCase(updateDaysNum, (state, action) => {
        let days = (action.payload.daysNum === "" ||
            action.payload.daysNum === "0" ||
            !/^[0-9]+$/.test(action.payload.daysNum)) ? 1 : action.payload.daysNum
        state.filter.livingDaysNum = days
    })
    builder.addCase(updatePrevDaysNum, (state, action) => {
        state.filter.prevDaysNum = action.payload.prevDaysNum
    })
    builder.addCase(setHotelsToStore, (state, action) => {
        // console.log("from reducer", action.payload)
        state.items = action.payload.map(item => {
            return {
                id: item.hotelId,
                hotelName: item.hotelName,
                stars: item.stars,
                priceAvg: item.priceAvg,
            }
        })
        state.requestStatus = 'done'
    })
    builder.addCase(setHotelPhotosIDToStore, (state, action) => {
        state.photosID = action.payload.data[action.payload.hotelID].map(item =>
            fetchHotelsPhotos(item)
        )
    })
})


export default hotelsReducer;