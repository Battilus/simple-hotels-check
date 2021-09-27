import {createReducer} from "@reduxjs/toolkit";
import {
    errorHandler,
    fstCrutchUpdate,
    setHotelsToStore,
    setLoadBar,
    updateCheckOutData,
    updateDateField,
    updateDaysNum,
    updatePrevDaysNum,
    updateLocation,
    setHotelPhotosIDToStore,
    addToFavorites,
    removeFromFavorites,
} from "./hotels-actions";
import {fetchHotelsPhotos} from "../../Api/hotelsApi";


const hotelsReducer = createReducer({}, builder => {
    builder.addCase(fstCrutchUpdate, (state, action) => {

        let checkInDate = new Date().toISOString().slice(0, 10).replace(/-/g, "-")
        let date = new Date(checkInDate)
        date.setDate(date.getDate() + parseInt('1'))
        let checkOutDate = date.toISOString().slice(0, 10).replace(/-/g, "-")

        state.filter = {
            location: 'Москва',
            livingDaysNum: '1',
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            prevDaysNum: '1'
        }
        state.crutchFstUpdate = true

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
        state.filter.livingDaysNum = (action.payload.daysNum === "" ||
            action.payload.daysNum === "0" ||
            !/^[0-9]+$/.test(action.payload.daysNum)) ? 1 : action.payload.daysNum
    })
    builder.addCase(updatePrevDaysNum, (state, action) => {
        state.filter.prevDaysNum = action.payload.prevDaysNum
    })
    builder.addCase(setHotelsToStore, (state, action) => {
        state.items = action.payload.map(item => {
            return {
                id: item.hotelId,
                hotelName: item.hotelName,
                stars: item.stars,
                priceAvg: item.priceAvg,
                favorChecked: false,
            }
        })
        state.requestStatus = 'done'
    })
    builder.addCase(setHotelPhotosIDToStore, (state, action) => {
        state.photosID = action.payload.data[action.payload.hotelID].map(item =>
            fetchHotelsPhotos(item)
        )
    })
    builder.addCase(addToFavorites, (state, action) => {
        let favItem = {...action.payload.hotelItem}
        favItem.favorChecked = true

        let hotelStore = action.payload.hotels.map(item => {
            if (item.id === favItem.id) {
                return {
                    id: item.id,
                    hotelName: item.hotelName,
                    stars: item.stars,
                    priceAvg: item.priceAvg,
                    favorChecked: true,
                }
            } else {
                return item
            }
        })

        state.items = hotelStore

        if (Object.keys(action.payload.favorites).length < 1) {
            state.favorites.push(favItem)
        } else if (!action.payload.favorites.every( el => el.id === favItem.id)) {
            state.favorites.push(favItem)
        }
    })
    builder.addCase(removeFromFavorites, (state, action) => {
        let favItem = {...action.payload.hotelItem}
        favItem.favorChecked = false

        let hotelStore = action.payload.hotels.map(item => {
            if (item.id === favItem.id) {
                return {
                    id: item.id,
                    hotelName: item.hotelName,
                    stars: item.stars,
                    priceAvg: item.priceAvg,
                    favorChecked: false,
                }
            } else {
                return item
            }
        })

        state.items = hotelStore

        state.favorites = state.favorites.filter((item) => item.id !== favItem.id)
    })
})


export default hotelsReducer;