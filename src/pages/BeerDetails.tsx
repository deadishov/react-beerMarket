import React from 'react'
import { Box, CardMedia, Container, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { BeerType } from '../redux/beer/types'
import axios from 'axios'
import { ThreeDots } from '../components/Skeleton'

export const BeerDetails: React.FC = () => {
    const [infoBeer, setInfoBeer] = React.useState<[BeerType]>()
    const { id } = useParams()
    const navigate = useNavigate()
    const infoBeerObj = infoBeer?.find(obj => obj)


    React.useEffect(() => {
        async function fetchBeerDetails() {
            try {
                const { data } = await axios.get('https://api.punkapi.com/v2/beers/' + id)
                setInfoBeer(data)
            } catch (error) {
                navigate('/')
                alert('Ошибка при загрузке информации продукта!')
            }

        }

        fetchBeerDetails()
    }, [])



    if (!infoBeerObj) {
        return (
            <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ThreeDots />
            </Container>
        )
    }

    return (
        <>
            <Container sx={{ display: 'flex', pt: '70px' }}>
                <CardMedia
                    sx={{ objectFit: 'contain', maxWidth: '30%' }}
                    height='500px'
                    component='img'
                    image={infoBeerObj.image_url}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', pt: '50px', gap: '15px' }}>
                    <Typography>
                        Name: <br />
                        {infoBeerObj.name}
                    </Typography>
                    <Typography>
                        Tagline: <br />
                        {infoBeerObj.tagline}
                    </Typography>
                    <Typography>
                        Description: <br />
                        {infoBeerObj.description}
                    </Typography>
                    <Typography>
                        Alcohol by volume {infoBeerObj.abv}
                    </Typography>
                    <Typography>
                        Food pairing: <br />
                        {infoBeerObj.food_pairing}
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

