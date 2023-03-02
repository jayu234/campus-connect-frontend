import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { createTheme } from "@mui/material/styles"
import { width } from "@mui/system"
import { useNavigate } from "react-router-dom"

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	)
}

const theme = createTheme()

function Signup() {
	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		})
	}
	const navigate = useNavigate()
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
							src="/images/webdev.jpg"
							fullWidth
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
						<Typography sx={{ color: "#2962ff" }} component="h1" variant="h5">
							<strong>Create Account</strong>
						</Typography>
						<Box component="form" noValidate onSubmit={handleSubmit}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="name"
								label="Full Name"
								name="name"
								autoComplete="name"
								autoFocus
							/>
							<TextField
								margin="dense"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
							/>
							<TextField
								margin="dense"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<TextField
								type={"text"}
								margin="dense"
								required
								fullWidth
								id="number"
								label="Phone No"
								name="phone"
								autoComplete="name"
								autoFocus
								inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
							/>
							<TextField
								margin="dense"
								required
								fullWidth
								id="college"
								label="College Name"
								name="college"
								autoComplete="name"
								autoFocus
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 2, mb: 2 }}
							>
								Sign up
							</Button>
							<Grid item sx={{ display: "flex", justifyContent: "center" }}>
								<Button
									onClick={() => {
										navigate("/login")
									}}
									variant="text"
									sx={{
										textTransform: "none",
										":hover": { backgroundColor: "transparent" },
									}}
								>
									{"Already have an account? Login"}
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
		</>
	)
}

export default Signup
