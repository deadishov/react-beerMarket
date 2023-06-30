import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BeerType, fetchBeersParams } from './types';


export const fetchBeers = createAsyncThunk<BeerType[], fetchBeersParams>('beer/fetchBeersStatus', async (params) => {
    const { currentPage } = params

    const { data } = await axios.get(`https://api.punkapi.com/v2/beers?page=${String(currentPage)}&per_page=8`)
    return data
}) 