import React from 'react'
import { Grid, Box } from '@mui/material'
import LeftSidebar from './LeftSidebar'
import Feed from './Feed'
import Footer from './Footer'
import Header from './Header'
import RightSidebar from './RightSidebar'
function Home() {
    return (
        <>
            <Header />
            <Box sx={{ paddingX: '1rem' }}>
                <Grid container spacing={1}>
                    <Grid item component={'aside'} xs={2}>
                        <Box sx={{ position: 'sticky', top: '20px' }}>
                            <LeftSidebar />
                            <Footer />
                        </Box>
                    </Grid>
                    <Grid item xs={7}>
                        <Feed />
                    </Grid>
                    <Grid item xs={3}>
                        <RightSidebar/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home