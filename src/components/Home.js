import React from 'react'
import { Grid, Box } from '@mui/material'
import LeftSidebar from './LeftSidebar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'
function Home() {
    return (
        <Box>
            <Grid container spacing={4}>
                <Grid item xs={2}>
                    <LeftSidebar/>
                </Grid>
                <Grid item xs={7}>
                    <Feed/>
                </Grid>
                <Grid item xs={3}>
                    <RightSidebar/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home