import {createReducer} from "@reduxjs/toolkit";
import {
    errorHandler,
    fstCrutchUpdate,
    setHotelsToStore,
    setLoadBar,
    updateCheckOutData,
    updateDateField,
    updateDaysNum,
    updatePrevReqData,
    updateLocation,
    setHotelPhotosIDToStore,
    addToFavorites,
    removeFromFavorites,
    sortFavForRating,
    sortFavForPrice,
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
        }
        state.crutchFstUpdate = true
        state.crutchFstFetch = true
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
    builder.addCase(updatePrevReqData, (state, action) => {
        state.actRequest = action.payload
        state.crutchFstFetch = false
    })
    builder.addCase(setHotelsToStore, (state, action) => {
        let itemsBuffer = action.payload.map(item => {
            return {
                id: item.hotelId,
                hotelName: item.hotelName,
                stars: item.stars,
                priceAvg: item.priceAvg,
                favorChecked: false,
            }
        })

        let favoritesCopy = {...state, favorites: [...state.favorites]}

        state.items = itemsBuffer.map(item => {
            for (let i in favoritesCopy.favorites) {
                if (item.id === favoritesCopy.favorites[i].id) return {...item, favorChecked: true}
            }
            return item
        })
        state.requestStatus = 'done'
    })
    builder.addCase(setHotelPhotosIDToStore, (state, action) => {
        state.photosID = action.payload.data[action.payload.hotelID].map(item =>
            fetchHotelsPhotos(item)
        )
    })
    builder.addCase(addToFavorites, (state, action) => {
        let favItem = {...action.payload.itemToPush}
        favItem.favorChecked = true

        if (Object.keys(action.payload.favorites).length < 1) {
            state.favorites.push(favItem)
        } else if (!action.payload.favorites.every(el => el.id === favItem.id)) {
            state.favorites.push(favItem)
        }
        state.items = action.payload.hotels.map(item =>
            (item.id === action.payload.favorId) ? {...item, favorChecked: true} : item
        )
    })
    builder.addCase(removeFromFavorites, (state, action) => {
        state.favorites = state.favorites.filter((item) => item.id !== action.payload.itemToPush.id)
        state.items = action.payload.hotels.map(item =>
            (item.id === action.payload.itemToPush.id) ? {...item, favorChecked: false} : item
        )
    })
    builder.addCase(sortFavForRating, (state, action) => {
        if (action.payload.way === 'up') {
            state.favorites = state.favorites.sort((a, b) => {
                if (a.stars > b.stars) {
                    return -1;
                }
                if (a.stars < b.stars) {
                    return 1;
                }
                return 0;
            });
        } else {
            state.favorites = state.favorites.sort((a, b) => {
                if (a.stars > b.stars) {
                    return 1;
                }
                if (a.stars < b.stars) {
                    return -1;
                }
                return 0;
            });
        }
    })
    builder.addCase(sortFavForPrice, (state, action) => {
        if (action.payload.way === 'up') {
            state.favorites = state.favorites.sort((a, b) => {
                if (a.priceAvg > b.priceAvg) {
                    return -1;
                }
                if (a.priceAvg < b.priceAvg) {
                    return 1;
                }
                return 0;
            });
        } else {
            state.favorites = state.favorites.sort((a, b) => {
                if (a.priceAvg > b.priceAvg) {
                    return 1;
                }
                if (a.priceAvg < b.priceAvg) {
                    return -1;
                }
                return 0;
            });
        }
    })
})


export default hotelsReducer;