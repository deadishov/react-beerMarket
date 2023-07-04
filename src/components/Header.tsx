import { AppBar, Toolbar, Typography } from '@mui/material'
import beerSvg from '../assets/img/beer.svg'
import closeSvg from '../assets/img/close.svg'
import { Container } from '@mui/system'
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { setCurrentPage, setSearchValue } from '../redux/filter/slice';
import { useSelector } from 'react-redux';
import { selectFilter } from '../redux/filter/selectors';
import debounce from 'lodash.debounce'
import React from 'react';

export const Header = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    const [value, setValue] = React.useState('')
    const { searchValue } = useSelector(selectFilter)
    const inputRef = React.useRef<HTMLInputElement>(null)

    const updateSearchValue = React.useCallback(
        debounce((str: string) => {
            dispatch(setSearchValue(str))
        }, 500),
        []
    )

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }

    const cleaner = () => {
        setValue('')
        dispatch(setSearchValue(''))
        inputRef.current?.focus()
    }


    return (
        <>
            <AppBar onClick={() => dispatch(setCurrentPage(1))} sx={{ cursor: 'none', backgroundColor: '#111111', mb: 5, width: '101%' }} position='static'>
                <Toolbar sx={{ cursor: 'pointer', margin: 'auto', alignItems: 'center' }}>
                    <Typography variant='h4' sx={{ color: '#ffffff', mr: 2 }}>
                        BEER MARKET
                    </Typography>
                    <img src={beerSvg} alt="BEER" />
                </Toolbar>
            </AppBar >
            {
                location.pathname === '/' && <Container>
                    <div className='input-wrapper'>
                        <input ref={inputRef} value={value} onChange={onChangeValue} className='search-input' type="text" placeholder='Search' />
                        {searchValue && <img onClick={cleaner} className='close-img' src={closeSvg} alt="closeImg" />}
                    </div>
                </Container>
            }
        </>
    )
}

