import {createAction} from "@reduxjs/toolkit";


export const setLoadBar = createAction('SET_LOAD_BAR')

export const errorHandler = createAction('REQUEST_ERROR_HANDLER')
export const asyncGetHotels = createAction('ASYNC_GET_HOTELS')
export const setHotelsToStore = createAction('SET_HOTELS_TO_STORE')
export const asyncGetHotelPhotosID = createAction('ASYNC_GET_HOTEL_PHOTOS_ID')
export const setHotelPhotosIDToStore = createAction('ASYNC_SET_HOTEL_PHOTOS_TO_STORE')

export const fstCrutchUpdate = createAction('FIRST_CRUTCH_UPDATE')

export const updateLocation = createAction('UPDATE_LOCATION')
export const updateDateField = createAction('UPDATE_DATE_FIELD')
export const updateDaysNum = createAction('UPDATE_DAYS_NUM')
export const updatePrevReqData = createAction('UPDATE_PREV_REQUEST_DATA')
export const updateCheckOutData = createAction('UPDATE_CHECKOUT_DATA')
export const callFilterData = createAction('CALL_FILTER_DATA')

export const addToFavorites = createAction('ADD_TO_FAVORITES')
export const removeFromFavorites = createAction('REMOVE_FROM_FAVORITES')

export const sortFavForRating = createAction('SORT_FAVORITES_FOR_RATING')
export const sortFavForPrice = createAction('SORT_FAVORITES_FOR_PRICE')