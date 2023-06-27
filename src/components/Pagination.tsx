import React from 'react'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { selectFilter } from '../redux/filter/selectors';

export function BasicPagination() {
    const { currentPage } = useSelector(selectFilter)
    return (
        <Stack spacing={2}>
            <Pagination page={currentPage} count={3} color='standard' />
        </Stack>
    )

}