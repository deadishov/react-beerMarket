import React from 'react'
import { Grid } from '@mui/material'
import ContentLoader from 'react-content-loader'

export const Skeleton: React.FC = () => (
    <Grid item xs={2} md={3}>
        <ContentLoader
            speed={2}
            width={500}
            height={700}
            viewBox="0 0 500 700"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="0" ry="0" width="340" height="450" />
        </ContentLoader>
    </Grid>
)
