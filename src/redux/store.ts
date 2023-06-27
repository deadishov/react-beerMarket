import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import beer from './beer/slice'
import filter from './filter/slice'

export const store = configureStore({
    reducer: {
        beer,
        filter
    }
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()