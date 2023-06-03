import { AppBar, TextField, Toolbar, Typography } from '@mui/material'
import beerSvg from '../assets/img/beer.svg'
import React from 'react'
import { Container } from '@mui/system'

export const Header = () => {
    return (
        <>
            <AppBar sx={{ backgroundColor: '#654321' }} position='static'>
                <Toolbar sx={{ margin: 'auto', alignItems: 'center' }}>
                    <Typography variant='h4' sx={{ mr: 2 }}>
                        BEER MARKET
                    </Typography>
                    <img src={beerSvg} alt="BEER" />
                </Toolbar>
            </AppBar >
            <Container>
                <TextField
                    color='secondary'
                    fullWidth
                    variant='standard'
                    type='search'
                    label='search' />
            </Container>
        </>
    )
}

