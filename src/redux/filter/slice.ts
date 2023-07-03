import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FilterSliceState } from "./types"

const initialState: FilterSliceState = {
    currentPage: 1,
    searchValue: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        }
    },
})

export const { setCurrentPage, setSearchValue } = filterSlice.actions
export default filterSlice.reducer