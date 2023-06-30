import React from 'react'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { selectFilter } from '../redux/filter/selectors';
import { setCurrentPage } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';

export function BasicPagination() {
    const dispatch = useAppDispatch()
    const { currentPage } = useSelector(selectFilter)

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setCurrentPage(value));
    };

    return (
        <Stack spacing={2}>
            <Pagination onChange={handleChange} page={currentPage} count={3} color='standard' />
        </Stack>
    )

}