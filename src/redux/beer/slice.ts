import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchBeers } from './AsyncAction'
import { BeerType, BeerSliceState, Status } from './types'

const initialState: BeerSliceState = {
    beers: [],
    status: Status.LOADING
}

const beerSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setBeers(state, action: PayloadAction<BeerType[]>) {
            state.beers = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBeers.pending, (state, action) => {
            state.status = Status.LOADING
            state.beers = []
        })

        builder.addCase(fetchBeers.fulfilled, (state, action) => {
            state.beers = action.payload
            state.status = Status.SUCCESS
        })

        builder.addCase(fetchBeers.rejected, (state, action) => {
            state.status = Status.ERROR
            state.beers = []
        })
    }

})

export const { setBeers } = beerSlice.actions
export default beerSlice.reducer