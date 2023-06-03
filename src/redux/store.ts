import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import beer from './beer/slice'

export const store = configureStore({
    reducer: {
        beer
    }
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()