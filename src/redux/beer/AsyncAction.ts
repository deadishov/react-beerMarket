import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BeerType } from './types';

export const fetchBeers = createAsyncThunk<BeerType[]>('beer/fetchBeersStatus', async (params) => {
    const { data } = await axios.get('https://api.punkapi.com/v2/beers')
    return data
}) 