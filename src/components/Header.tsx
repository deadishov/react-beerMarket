import { AppBar, TextField, Toolbar, Typography } from '@mui/material'
import beerSvg from '../assets/img/beer.svg'
import { Box, Container } from '@mui/system'
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { setCurrentPage } from '../redux/filter/slice';
import React from 'react'

export const Header = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    const [name, setName] = React.useState('')

    const labelStyles = {
        color: '#ffffff'
    };

    const inputStyles = {
        color: '#ffffff'
    }


    return (
        <>
            <AppBar onClick={() => dispatch(setCurrentPage(1))} sx={{ backgroundColor: '#111111', mb: 5, width: '101%' }} position='static'>
                <Toolbar sx={{ margin: 'auto', alignItems: 'center' }}>
                    <Typography variant='h4' sx={{ color: '#ffffff', mr: 2 }}>
                        BEER MARKET
                    </Typography>
                    <img src={beerSvg} alt="BEER" />
                </Toolbar>
            </AppBar >
            {location.pathname === '/' && <Container>
                <Box
                    component='form'
                >
                    <TextField
                        color='warning'
                        fullWidth
                        variant='standard'
                        type='search'
                        label='search'
                        value={name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setName(event.target.value);
                        }}
                        inputProps={{ style: inputStyles }}
                        InputLabelProps={{ style: labelStyles }} />
                </Box>
            </Container>}
        </>
    )
}

