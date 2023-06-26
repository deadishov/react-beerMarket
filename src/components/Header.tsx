import { AppBar, TextField, Toolbar, Typography } from '@mui/material'
import beerSvg from '../assets/img/beer.svg'
import { Container } from '@mui/system'
import { useLocation } from 'react-router-dom';

export const Header = () => {
    const labelStyles = {
        color: '#ffffff'
    };

    const inputStyles = {
        color: '#ffffff'
    }

    const location = useLocation()

    return (
        <>
            <AppBar sx={{ backgroundColor: '#111111', mb: 5, width: '101%' }} position='static'>
                <Toolbar sx={{ margin: 'auto', alignItems: 'center' }}>
                    <Typography variant='h4' sx={{ color: '#ffffff', mr: 2 }}>
                        BEER MARKET
                    </Typography>
                    <img src={beerSvg} alt="BEER" />
                </Toolbar>
            </AppBar >
            {location.pathname === '/' && <Container>
                <TextField
                    color='warning'
                    fullWidth
                    variant='standard'
                    type='search'
                    label='search'
                    inputProps={{ style: inputStyles }}
                    InputLabelProps={{ style: labelStyles }} />
            </Container>}
        </>
    )
}

