import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FilterSliceState } from "./types"

const initialState: FilterSliceState = {
    currentPage: 1
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        }
    },
})

export const { setCurrentPage } = filterSlice.actions
export default filterSlice.reducer