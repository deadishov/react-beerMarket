import React from 'react'
import { Grid, Box, Card, CardMedia, CardContent, Typography } from '@mui/material'
import { BeerType } from '../redux/beer/types'

export const Beer: React.FC<BeerType> = ({ image_url, name, description }) => {
    return (
        <Grid sx={{ pl: 0 }} item xs={2} md={3}>
            <Card sx={{ m: 'auto', maxWidth: 340, height: 190, pl: '15px', pt: 5, pb: 5, backgroundColor: '#111111' }}>
                <Box sx={{ display: 'flex' }}>
                    <CardMedia
                        component='img'
                        sx={{ pl: 0, width: 150, height: 180, objectFit: 'contain' }}
                        image={image_url}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ height: 200, flex: '1 0 auto', pl: 3, pr: 3, pt: 0, pb: 0, overflow: 'hidden' }}>
                            <Typography component='div' variant='h6' sx={{ textAlign: 'center', mb: 2, lineHeight: 1.2, color: '#ffffff' }}>
                                {name}
                            </Typography>
                            <Typography sx={{ pl: 2, pr: 2, color: '#ffffff' }}>
                                {description.length > 100 ? description.slice(0, 100) + '...' : description}
                            </Typography>
                        </CardContent>
                    </Box>
                </Box>

            </Card>
        </Grid>
    )
}

