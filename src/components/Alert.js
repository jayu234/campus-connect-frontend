import { Snackbar, Stack } from '@mui/material';
import React from 'react'
import MuiAlert from '@mui/material/Alert';

const MyAlert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const vertical = 'bottom', horizontal = 'center';

function Alert({ message, severity}) {
    const [open, setOpen] = React.useState(true);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};
    return (
        <React.Fragment>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar
                    open={open}
                    anchorOrigin={{ vertical, horizontal }}
                    key={vertical + horizontal}
                    autoHideDuration={3000}
                    onClose={handleClose}
                >
                    <MyAlert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                        {message}
                    </MyAlert>
                </Snackbar>
            </Stack>
        </React.Fragment>
    )
}

export default Alert