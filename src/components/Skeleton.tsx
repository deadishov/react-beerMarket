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

export const ThreeDots: React.FC = () => (
    <ContentLoader
        viewBox="0 0 400 160"
        height={160}
        width={400}
        backgroundColor="transparent"

    >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
    </ContentLoader>
)

