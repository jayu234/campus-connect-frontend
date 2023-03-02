import React from 'react'
import PropTypes from 'prop-types';
import { Box, Modal, Tabs, Tab, Typography, Avatar, TextField, Button, Divider, IconButton } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

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
    p: 4
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
                    <Typography component={'div'}>{children}</Typography>
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


function MainModal({ open, tabInd, setOpen }) {
    const [value, setValue] = React.useState(tabInd);
    const [text, setText] = React.useState("");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Modal
            open={open}
            onClose={() => { setOpen(false) }}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <IconButton onClick={()=>{setOpen(false)}} ><CloseRoundedIcon sx={{ width: 20, height: 20 }} /></IconButton>
                <Box>
                    <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="basic tabs example">
                        <Tab label="Ask Doubt" {...a11yProps(0)} sx={{ textTransform: 'none', fontFamily: "inherit" }} />
                        <Tab label="Create Post" {...a11yProps(1)} sx={{ textTransform: 'none', fontFamily: "inherit" }} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', columnGap: '1rem' }}>
                        <Avatar alt='Profile pic' src='/images/avatar.png' sx={{ cursor: "pointer" }} />
                        <TextField onChange={(e) => { setText(e.target.value) }} multiline fullWidth variant="standard" placeholder='Start your doubt with "How", "What", etc.' sx={{ borderRadius: '16px' }} />
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box sx={{ width: '100%', display: 'flex', flexDirection: "column", justifyContent: 'space-between', alignItems: 'flex-start', rowGap: '0.5rem', fontFamily: "'Inter', sans-serif" }}>
                        <Box component={'div'} sx={{ display: "flex", width: "100%", alignItems: "flex-start", columnGap: "0.5rem" }} >
                            <Avatar alt='Profile pic' src='/images/avatar.png' sx={{ width: 30, height: 30, cursor: "pointer" }} />
                            <Typography variant="body2" fontFamily={"inherit"}>Jhon Deo</Typography>
                        </Box>
                        <Box component={"div"} sx={{ flexGrow: 1, width: "100%" }}>
                            <TextField onChange={(e) => { setText(e.target.value) }} multiline rows={10} fullWidth variant="standard" placeholder='Say something...' InputProps={{ disableUnderline: true }} />
                        </Box>
                    </Box>
                </TabPanel>
                <Divider sx={{ marginTop: '1rem' }} />
                {tabInd === 0 ? <Box sx={{ display: 'flex', justifyContent: 'flex-end', columnGap: '1rem', marginTop: '0.5rem' }}>
                    <Button onClick={() => { setOpen(false) }} variant='text' sx={{ textTransform: 'none' }}>Cancle</Button>
                    <Button disabled={!text.length} onClick={() => { setOpen(false) }} variant='contained' sx={{ textTransform: 'none' }}>Ask</Button>
                </Box> : <Box sx={{ display: 'flex', justifyContent: "space-between", columnGap: '1rem', marginTop: '0.5rem' }}>
                    {/* TODO - image preview */}
                    <Button component="label" variant='text' sx={{ textTransform: 'none', color: "#616161" }}>
                        <ImageIcon />
                        <input type="file" hidden />
                    </Button>
                    <Button disabled={!text.length} onClick={() => { setOpen(false) }} variant='contained' sx={{ textTransform: 'none' }}>Post</Button>
                </Box>}
            </Box>
        </Modal>
    )
}

export default MainModal