import * as React from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Snackbar from '@mui/material/Snackbar';
import Typography from "@mui/material/Typography"
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { userLogin } from "../store/userSlice"


const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const vertical = 'bottom', horizontal = 'center';
function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user, success, isError, isLoading, message } = useSelector((state) => state.user);
	const [errorMessage, setErrorMessage] = React.useState("");
	const handleSubmit = (event) => {
		event.preventDefault()
		dispatch(userLogin(credentials));
	}
	const [open, setOpen] = React.useState(false);
	const [credentials, setCredentials] = React.useState({ email: "", password: "" });


	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};
	React.useEffect(() => {
		if (user) {
			navigate("/");
		}
		if (user && success) {
			navigate("/")
		}

	}, [user]);
	React.useEffect(() => {
		if (isError) {
			setErrorMessage(message);
			setOpen(true);
		}
	}, [isLoading])
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "row",
					alignItems: "center",
					backgroundColor: "white",
					paddingY: "1rem",
				}}
			>
				<Box>
					<Typography
						component={"img"}
						src="/images/logo1.png"
						href="/"
						width={"30px"}
						sx={{
							cursor: "pointer",
							marginRight: "0.3rem",
							textAlign: "center",
							display: "flex",
							alignItems: "center",
							userSelect: "none",
						}}
					/>
				</Box>
				<Box>
					<Typography
						component={"a"}
						href="/"
						sx={{
							backgroundColor: "#fff",
							color: "black",
							fontSize: "1.6rem",
							textAlign: "center",
							marginRight: "1.8rem",
							fontFamily: "'Inter', sans-serif",
							fontWeight: "600",
							cursor: "pointer",
							textDecoration: "none",
							userSelect: "none",
						}}
					>
						CampusConnect
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Box
					sx={{
						marginY: "2rem",
						backgroundColor: "#e4f5fc",
						borderRadius: "1rem",
						display: "flex",
					}}
				>
					<Box>
						<img
							style={{ width: "30rem", borderRadius: "1rem" }}
							src="/images/user-profile.svg"
							alt="Welcome to our website"
						/>
					</Box>
					<Box
						sx={{
							width: "20rem",
							display: "flex",
							paddingX: "2rem",
							paddingY: "2rem",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Typography sx={{ color: '#2962ff' }} component="h1" variant="h5">
							<strong>Login</strong>
						</Typography>
						<Box component="form" noValidate onSubmit={handleSubmit}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoFocus
								onChange={(e) => {
									setCredentials({ ...credentials, [e.target.name]: e.target.value })
								}}
								value={credentials.email}
								autoComplete="email"
							/>
							<TextField
								margin="dense"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								value={credentials.password}
								onChange={(e) => {
									setCredentials({ ...credentials, [e.target.name]: e.target.value })
								}}
								autoComplete="current-password"
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 2, mb: 2 }}
							>
								Login
							</Button>
							<Grid item xs sx={{ display: "flex", justifyContent: "center" }}>
								<Link path="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item sx={{ display: "flex", justifyContent: "center" }}>
								<Button onClick={() => { navigate("/signup") }} variant="text" sx={{ textTransform: "none", ":hover": { backgroundColor: "transparent" } }}>
									{"Don't have an account? Sign Up"}
								</Button>
							</Grid>
							<Grid
								item
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									justifyItems: "center",
									alignContent: "center",
									marginTop: "2rem",
									fontSize: "12px",
								}}
							>
								Copyright ©{" "}
								<Box sx={{ fontSize: "11px", marginLeft: "2px" }}>2023 </Box>
								<Link
									href="/"
									variant="body2"
									sx={{ fontSize: "14px", marginX: "3px", marginBottom: "3px" }}
								>
									{"campusconnect.com"}
								</Link>
							</Grid>
						</Box>
					</Box>
				</Box>
			</Box>
			<Stack spacing={2} sx={{ width: '100%' }}>
				<Snackbar
					open={open}
					anchorOrigin={{ vertical, horizontal }}
					key={vertical + horizontal}
					autoHideDuration={3000}
					onClose={handleClose}
				>
					<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
						{errorMessage}
					</Alert>
				</Snackbar>
			</Stack>
		</>
	)
}

export default Login
