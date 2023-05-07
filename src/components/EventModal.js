import React from 'react'
import { Box, IconButton, Modal } from '@mui/material'
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
    p: 4,
    ":focus-visible": { outline: "none" }
};
function EventModal({ open, setOpen }) {
    return (
        <Modal
            open={open}
            onClose={() => { setOpen(false) }}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <IconButton onClick={() => { setOpen(false) }} ><CloseRoundedIcon sx={{ width: 20, height: 20 }} /></IconButton>
            </Box>
        </Modal>
    )
}

export default EventModal