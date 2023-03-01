import React from 'react'
import { Grid, Box } from '@mui/material'
import LeftSidebar from './LeftSidebar'
import Feed from './Feed'
function Home() {
    return (
        <Box>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                    <LeftSidebar/>
                </Grid>
                <Grid item xs={8}>
                    <Feed/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home