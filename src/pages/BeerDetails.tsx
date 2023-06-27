import React from 'react'
import { Box, CardMedia, Container, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { BeerType } from '../redux/beer/types'
import axios from 'axios'
import { ThreeDots } from '../components/Skeleton'

export const BeerDetails: React.FC = () => {
    const [infoBeer, setInfoBeer] = React.useState<BeerType>()
    const { id } = useParams()
    const navigate = useNavigate()


    React.useEffect(() => {
        async function fetchBeerDetails() {
            try {
                const { data } = await axios.get('https://api.punkapi.com/v2/beers/' + id)
                setInfoBeer(data[0])
            } catch (error) {
                navigate('/')
                alert('Ошибка при загрузке информации продукта!')
            }
        }

        fetchBeerDetails()
    }, [])



    if (!infoBeer) {
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
                    image={infoBeer.image_url}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', pt: '50px', gap: '15px' }}>
                    <Typography>
                        Name: <br />
                        {infoBeer.name}
                    </Typography>
                    <Typography>
                        Tagline: <br />
                        {infoBeer.tagline}
                    </Typography>
                    <Typography>
                        Description: <br />
                        {infoBeer.description}
                    </Typography>
                    <Typography>
                        Alcohol by volume {infoBeer.abv}
                    </Typography>
                    <Typography>
                        Food pairing: <br />
                        {infoBeer.food_pairing}
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

