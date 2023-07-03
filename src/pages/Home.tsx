import React from 'react'
import { Grid, Box } from '@mui/material'
import { useAppDispatch } from '../redux/store'
import { fetchBeers } from '../redux/beer/AsyncAction'
import { useSelector } from 'react-redux'
import { Skeleton } from '../components/Skeleton'
import { Beer } from '../components/Beer'
import { BasicPagination } from '../components/Pagination'
import { selectBeersData } from '../redux/beer/selectors'
import { selectFilter } from '../redux/filter/selectors'


export const Home: React.FC = ({ }) => {
    const dispatch = useAppDispatch()

    const { beers, status } = useSelector(selectBeersData)
    const { currentPage, searchValue } = useSelector(selectFilter)

    const getBeers = async () => {
        dispatch(fetchBeers({ currentPage: String(currentPage) }))
    }

    React.useEffect(() => {
        getBeers()
        window.scrollTo({ top: 0 })
    }, [currentPage])

    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />)
    const beerCards = beers.filter((obj) => {
        if (obj.name.includes(searchValue) || obj.description.includes(searchValue) || obj.food_pairing.includes(searchValue)) {
            return true
        }
        return false
    }).map(item => <Beer key={item.id} {...item} />)

    return (
        <>
            <Grid sx={{ height: '100vh', maxWidth: '100%', mt: 3, ml: 'auto' }} container rowSpacing={3} spacing={2}>
                {status === 'loading' ? skeletons : beerCards}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: '20px' }}>
                <BasicPagination />
            </Box>
        </>
    )
}