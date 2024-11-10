import { configureStore } from "@reduxjs/toolkit";
import cursorSlice from './cursor.slice/cursor.slice'
export const store = configureStore({
    reducer:{
        cursor: cursorSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})