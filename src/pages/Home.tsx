import React from 'react'
import { Grid } from '@mui/material'
import { RootState, useAppDispatch } from '../redux/store'
import { fetchBeers } from '../redux/beer/AsyncAction'
import { useSelector } from 'react-redux'
import { Skeleton } from '../components/Skeleton'
import { Beer } from '../components/Beer'


export const Home: React.FC = ({ }) => {
    const dispatch = useAppDispatch()

    const { beers, status } = useSelector((state: RootState) => state.beer)

    const getBeers = async () => {
        dispatch(fetchBeers())
    }

    React.useEffect(() => {
        getBeers()
    }, [])

    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />)
    const beerCards = beers.map(item => <Beer key={item.id} {...item} />)

    return (
        <Grid sx={{ maxWidth: '100%', mt: 3, ml: 'auto' }} container rowSpacing={3} spacing={2}>
            {status === 'loading' ? skeletons : beerCards}
        </Grid>
    )
}