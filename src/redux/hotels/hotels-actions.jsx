import {createAction} from "@reduxjs/toolkit";


export const setLoadBar = createAction('SET_LOAD_BAR')

export const errorHandler = createAction('REQUEST_ERROR_HANDLER')
export const asyncGetHotels = createAction('ASYNC_GET_HOTELS')
export const setHotelsToStore = createAction('SET_HOTELS_TO_STORE')

export const fstCrutchUpdate = createAction('FIRST_CRUTCH_UPDATE')

export const updateLocation = createAction('UPDATE_LOCATION')
export const updateDateField = createAction('UPDATE_DATE_FIELD')
export const updateDaysNum = createAction('UPDATE_DAYS_NUM')
export const callFilterData = createAction('CALL_FILTER_DATA')