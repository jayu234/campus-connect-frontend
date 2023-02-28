import React from 'react'
import PropTypes from 'prop-types';
import { Grid, Box, Avatar, TextField, Button, Divider, Modal, Typography, Tabs, Tab } from '@mui/material'
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import RateReviewIcon from '@mui/icons-material/RateReview';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '1px solid #cecece',
    boxShadow: 24,
    borderRadius: '6px',
    p: 4,
};
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Feed() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid component={'div'} container direction={'column'}>
            <Grid item sx={{ border: '1px solid #e2e8f0cc', borderRadius: '0.5rem', backgroundColor: '#fff', marginBottom: '1rem', ":hover": { borderColor: '#cfcfcf' } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', columnGap: '1rem', padding: '0.75rem' }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap: '1rem' }}>
                        <Avatar alt='Profile pic' src='/images/avatar.png' />
                        <TextField fullWidth variant="outlined" placeholder='What do you want to ask or share?' sx={{ borderRadius: '16px', padding: '0.5rem' }} />
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap: '1rem' }}>
                        <Button onClick={handleOpen} fullWidth sx={{ borderRadius: '16px', padding: '0.5rem', textTransform: 'none' }} startIcon={<LiveHelpIcon />}>Ask</Button>
                        <Divider orientation="vertical" flexItem />
                        <Button onClick={handleOpen} fullWidth sx={{ borderRadius: '16px', padding: '0.5rem', textTransform: 'none' }} startIcon={<QuestionAnswerIcon />}>Answer</Button>
                        <Divider orientation="vertical" flexItem />
                        <Button onClick={handleOpen} fullWidth sx={{ borderRadius: '16px', padding: '0.5rem', textTransform: 'none' }} startIcon={<RateReviewIcon />}>Post</Button>
                    </Box>
                </Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <Box>
                            <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="basic tabs example">
                                <Tab label="Ask Doubt" {...a11yProps(0)} sx={{textTransform: 'none'}} />
                                <Tab label="Create Post" {...a11yProps(1)} sx={{textTransform: 'none'}} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', columnGap: '1rem' }}>
                                <Avatar alt='Profile pic' src='/images/avatar.png'/>
                                <TextField multiline fullWidth variant="standard" placeholder='Start your doubt with "How", "What", etc.' sx={{ borderRadius: '16px' }} />
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <Divider sx={{ marginTop: '1rem'}} />
                        <Box sx={{display: 'flex', justifyContent: 'flex-end', columnGap: '1rem', marginTop: '0.5rem'}}>
                            <Button onClick={handleClose} variant='text' sx={{textTransform: 'none'}}>Cancle</Button>
                            <Button variant='contained' sx={{textTransform: 'none'}}>Ask</Button>
                        </Box>
                    </Box>
                </Modal>
            </Grid>
            <Grid item sx={{ background: '#efefef', height: '100vh' }} >
            </Grid>
        </Grid>
    )
}

export default Feed