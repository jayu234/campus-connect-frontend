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
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import { HeaderLogin } from "./HeaderLogin"
import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"

import { collegeName } from "../data/collegeName"

import { useTheme } from "@mui/material/styles"
import OutlinedInput from "@mui/material/OutlinedInput"
import Chip from "@mui/material/Chip"

import { Divider } from "@mui/material"

import IconButton from "@mui/material/IconButton"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

import InputAdornment from "@mui/material/InputAdornment"
import AccountCircle from "@mui/icons-material/AccountCircle"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const steps = [
	"Personal Details",
	"Login Details",
	"Education Details",
	"Area of Interest",
]

const theme = createTheme()

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
}

const names = [
	"Web Developer",
	"App Development",
	"Data Science",
	"Data Analyst",
	"Quality Analyst",
	"Software Development",
	"Machine Learning",
	"Artificial intelligence",
	"Python Programming",
	"React Developer",
	"Laravel Developer",
]

function getStyles(name, personName, theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	}
}

function Signup() {
	const [selectedImage, setSelectedImage] = useState(null)
	const [imageUrl, setImageUrl] = useState(null)

	useEffect(() => {
		if (selectedImage) {
			setImageUrl(URL.createObjectURL(selectedImage))
		}
	}, [selectedImage])

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		})
	}
	const navigate = useNavigate()

	
	//Stepper
	const [activeStep, setActiveStep] = React.useState(0)
	const [skipped, setSkipped] = React.useState(new Set())

	const isStepSkipped = (step) => {
		return skipped.has(step)
	}

	const handleNext = () => {
		let newSkipped = skipped
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values())
			newSkipped.delete(activeStep)
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1)
		setSkipped(newSkipped)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleReset = () => {
		setActiveStep(0)
	}

	const [gender, setGender] = React.useState("")
	const selectGender = (event) => {
		setGender(event.target.value)
	}

	const [collegeName, setCollegeName] = React.useState("")
	const selectCollege = (event) => {
		setCollegeName(event.target.value)
	}

	const [course, setCourse] = React.useState("")
	const selectCourse = (event) => {
		setCourse(event.target.value)
	}

	const [city, setCity] = React.useState("")
	const selectCity = (event) => {
		setCity(event.target.value)
	}

	const theme = useTheme()
	const [personName, setPersonName] = React.useState([])

	const handleChange = (event) => {
		const {
			target: { value },
		} = event
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		)
	}

	const [showPassword, setShowPassword] = React.useState(false)
	const handleClickShowPassword = () => setShowPassword((show) => !show)

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

	const [showCPassword, setShowCPassword] = React.useState(false)
	const handleClickShowCPassword = () => setShowCPassword((show) => !show)
	

	return (
		<>
			<Box
				sx={{
					height: "45rem",
					backgroundImage: `url("/images/signupBackground.jpg")`,
				}}
			>
				<Grid
					container
					component="div"
					sx={{
						display: "flex",
						justifyContent: "center",
						paddingTop: "1rem",
					}}
				>
					<Grid item xs={7}>
						<Grid
							container
							component="div"
							sx={{
								display: "flex",
								justifyContent: "center",
								height: "20rem",
							}}
						>
							<Grid item xs={10.6}>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#9d1b85",
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
												marginLeft: "1.8rem",
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
							</Grid>
							<Grid item component={"aside"} xs={3.3}>
								<Box
									sx={{
										height: "32rem",
										position: "sticky",
										backgroundColor: "#f2fafd",
										paddingX: "1.2rem",
										paddingTop: "2.3rem",
									}}
								>
									<Box>
										<Stepper activeStep={activeStep} orientation="vertical">
											{steps.map((step, index) => (
												<Step key={step.label}>
													<StepLabel>{step}</StepLabel>
												</Step>
											))}
										</Stepper>
									</Box>
								</Box>
							</Grid>
							<Grid item xs={7.3}>
								<Box
									sx={{
										height: "32rem",
										backgroundColor: "white",
										paddingX: "1.5rem",
									}}
								>
									{activeStep === steps.length ? (
										<React.Fragment>
											<Box
												sx={{
													display: "flex",
													flexDirection: "column",
													alignItems: "center",
													paddingX: "1rem",
												}}
											>
												<CssBaseline />
												<Typography sx={{ marginTop: "3rem" }}>
													Redirect to Home Page
												</Typography>
											</Box>

											<Box
												sx={{
													display: "flex",
													flexDirection: "row",
													alignItems: "flex-end",
													marginTop: "3rem",
												}}
											>
												<Button
													color="inherit"
													disabled={activeStep === 0}
													onClick={handleBack}
													sx={{ mr: 1 }}
												>
													Back
												</Button>
												<Box sx={{ flex: "1 1 auto" }} />

												<Button onClick={handleReset}>Reset</Button>
											</Box>
										</React.Fragment>
									) : (
										<Box sx={{ height: "100%" }}>
											<Box>
												{activeStep === 0 ? (
													<Box
														sx={{
															height: "27rem",
															display: "flex",
															flexDirection: "column",
															alignItems: "center",
															paddingX: "1rem",
														}}
													>
														<CssBaseline />
														<Box
															component="form"
															noValidate
															onSubmit={handleSubmit}
														>
															<Grid container spacing={1}>
																<Grid
																	item
																	xs={12}
																	sm={6}
																	sx={{
																		height: "7rem",
																		display: "flex",
																		alignItems: "end",
																		justifyContent: "center",
																		paddingBottom: "1rem",
																	}}
																>
																	<input
																		accept="image/*"
																		type="file"
																		id="select-image"
																		style={{ display: "none" }}
																		onChange={(e) =>
																			setSelectedImage(e.target.files[0])
																		}
																	/>
																	<label htmlFor="select-image">
																		<Button
																			variant="contained"
																			color="primary"
																			component="span"
																		>
																			Upload Image
																		</Button>
																	</label>
																</Grid>
																<Grid item xs={12} sm={6}>
																	{imageUrl && selectedImage && (
																		<Box textAlign="" marginTop={3}>
																			<img
																				src={imageUrl}
																				alt={selectedImage.name}
																				width="100rem"
																				height="100rem"
																			/>
																		</Box>
																	)}
																</Grid>
																<Grid item xs={12} sm={6}>
																	<TextField
																		autoComplete="given-name"
																		required
																		fullWidth
																		id="firstName"
																		label="First Name"
																		name="firstName"
																		margin="dense"
																	/>
																</Grid>
																<Grid item xs={12} sm={6}>
																	<TextField
																		required
																		fullWidth
																		id="lastName"
																		label="Last Name"
																		name="lastName"
																		margin="dense"
																	/>
																</Grid>
																<Grid item xs={12}>
																	<TextField
																		required
																		fullWidth
																		id="username"
																		label="Username"
																		name="username"
																		sx={{ marginTop: "1rem" }}
																	/>
																</Grid>
																<Grid item xs={12}>
																	<Box
																		sx={{
																			minWidth: 120,
																			marginTop: "1rem",
																		}}
																	>
																		<FormControl fullWidth>
																			<InputLabel id="city">
																				Gender *
																			</InputLabel>
																			<Select
																				labelId="gender"
																				required
																				id="gender"
																				value={gender}
																				onChange={selectGender}
																				label="Gender"
																			>
																				<MenuItem value={10}>Male</MenuItem>
																				<MenuItem value={20}>Female</MenuItem>
																				<MenuItem value={30}>
																					Transgender
																				</MenuItem>
																				<MenuItem value={40}>Other</MenuItem>
																			</Select>
																		</FormControl>
																	</Box>
																</Grid>
																<Grid item xs={12}>
																	<TextField
																		required
																		fullWidth
																		id="age"
																		label="Age"
																		name="age"
																		sx={{ marginTop: "1rem" }}
																	/>
																</Grid>
															</Grid>
														</Box>
													</Box>
												) : (
													<React.Fragment>
														{activeStep === 1 ? (
															<Box
																sx={{
																	display: "flex",
																	paddingX: "1rem",
																	height: "27rem",
																}}
															>
																<CssBaseline />
																<Box
																	component="form"
																	noValidate
																	onSubmit={handleSubmit}
																>
																	<Grid container spacing={1}>
																		<Grid item xs={12}>
																			<TextField
																				required
																				fullWidth
																				id="contact"
																				label="Contact No"
																				name="username"
																				sx={{ marginTop: "2rem" }}
																			/>
																		</Grid>
																		<Grid item xs={12}>
																			<TextField
																				required
																				fullWidth
																				id="email"
																				label="Email Address"
																				name="email"
																				sx={{ marginTop: "1rem" }}
																			/>
																		</Grid>
																		<Grid item xs={12}>
																			<FormControl
																				fullWidth
																				variant="outlined"
																				sx={{ marginTop: "1rem" }}
																			>
																				<InputLabel htmlFor="outlined-adornment-password">
																					Password *
																				</InputLabel>
																				<OutlinedInput
																					id="outlined-adornment-password"
																					type={
																						showPassword ? "text" : "password"
																					}
																					endAdornment={
																						<InputAdornment position="end">
																							<IconButton
																								aria-label="toggle password visibility"
																								onClick={
																									handleClickShowPassword
																								}
																								onMouseDown={
																									handleMouseDownPassword
																								}
																								edge="end"
																							>
																								{showPassword ? (
																									<VisibilityOff />
																								) : (
																									<Visibility />
																								)}
																							</IconButton>
																						</InputAdornment>
																					}
																					required
																					label="Password"
																				/>
																			</FormControl>
																		</Grid>
																		<Grid item xs={12}>
																			<FormControl
																				fullWidth
																				variant="outlined"
																				sx={{ marginTop: "1rem" }}
																			>
																				<InputLabel htmlFor="outlined-adornment-password">
																					Confirm Password *
																				</InputLabel>
																				<OutlinedInput
																					id="outlined-adornment-password"
																					type={
																						showCPassword ? "text" : "password"
																					}
																					endAdornment={
																						<InputAdornment position="end">
																							<IconButton
																								aria-label="toggle password visibility"
																								onClick={
																									handleClickShowCPassword
																								}
																								onMouseDown={
																									handleMouseDownPassword
																								}
																								edge="end"
																							>
																								{showCPassword ? (
																									<VisibilityOff />
																								) : (
																									<Visibility />
																								)}
																							</IconButton>
																						</InputAdornment>
																					}
																					label="Confirm Password"
																					required
																				/>
																			</FormControl>
																		</Grid>
																	</Grid>
																</Box>
															</Box>
														) : (
															<React.Fragment>
																{activeStep === 2 ? (
																	<Box
																		sx={{
																			display: "flex",
																			paddingX: "1rem",
																			height: "27rem",
																		}}
																	>
																		<CssBaseline />
																		<Box
																			component="form"
																			noValidate
																			onSubmit={handleSubmit}
																		>
																			<Grid container spacing={1}>
																				<Grid item xs={12}>
																					<Box
																						sx={{
																							minWidth: 120,
																							marginTop: "2rem",
																						}}
																					>
																						<FormControl fullWidth>
																							<InputLabel id="collegeName">
																								College Name*
																							</InputLabel>
																							<Select
																								labelId="collegeName"
																								id="collegeName"
																								value={collegeName}
																								label="College Name"
																								onChange={selectCollege}
																							>
																								<MenuItem value={10}>
																									Birla Vishvakarma
																									Mahavidyalaya
																								</MenuItem>
																								<MenuItem value={20}>
																									Dharmshibhai Desai University
																								</MenuItem>
																								<MenuItem value={30}>
																									Maharaja Sayajirao University
																								</MenuItem>
																							</Select>
																						</FormControl>
																					</Box>
																				</Grid>
																				<Grid item xs={12}>
																					<Box
																						sx={{
																							minWidth: 120,
																							marginTop: "1rem",
																						}}
																					>
																						<FormControl fullWidth>
																							<InputLabel id="coursedetail">
																								Course*
																							</InputLabel>
																							<Select
																								labelId="courseId"
																								id="course"
																								value={course}
																								label="Course"
																								onChange={selectCourse}
																							>
																								<MenuItem value={10}>
																									Information Technology
																								</MenuItem>
																								<MenuItem value={20}>
																									Civil
																								</MenuItem>
																								<MenuItem value={30}>
																									Electronics
																								</MenuItem>
																								<MenuItem value={40}>
																									Computer Science
																								</MenuItem>
																							</Select>
																						</FormControl>
																					</Box>
																				</Grid>
																				<Grid item xs={12}>
																					<Box
																						sx={{
																							minWidth: 120,
																							marginTop: "1rem",
																						}}
																					>
																						<FormControl fullWidth>
																							<InputLabel id="city">
																								City*
																							</InputLabel>
																							<Select
																								labelId="city"
																								id="city"
																								value={city}
																								label="City"
																								onChange={selectCity}
																							>
																								<MenuItem value={10}>
																									Anand
																								</MenuItem>
																								<MenuItem value={20}>
																									Surat
																								</MenuItem>
																								<MenuItem value={30}>
																									Rajkot
																								</MenuItem>
																								<MenuItem value={40}>
																									Nadiad
																								</MenuItem>
																							</Select>
																						</FormControl>
																					</Box>
																				</Grid>
																			</Grid>
																		</Box>
																	</Box>
																) : (
																	<Box
																		sx={{ padding: "1rem", height: "27rem" }}
																	>
																		<FormControl
																			fullWidth
																			sx={{ marginTop: "1rem" }}
																		>
																			<CssBaseline />
																			<InputLabel id="demo-multiple-chip-label">
																				Area of Interest
																			</InputLabel>
																			<Select
																				labelId="demo-multiple-chip-label"
																				id="demo-multiple-chip"
																				multiple
																				value={personName}
																				onChange={handleChange}
																				input={
																					<OutlinedInput
																						id="select-multiple-chip"
																						label="Area of Interest"
																					/>
																				}
																				renderValue={(selected) => (
																					<Box
																						sx={{
																							display: "flex",
																							flexWrap: "wrap",
																							gap: 0.5,
																						}}
																					>
																						{selected.map((value) => (
																							<Chip key={value} label={value} />
																						))}
																					</Box>
																				)}
																				MenuProps={MenuProps}
																			>
																				{names.map((name) => (
																					<MenuItem
																						key={name}
																						value={name}
																						style={getStyles(
																							name,
																							personName,
																							theme
																						)}
																					>
																						{name}
																					</MenuItem>
																				))}
																			</Select>
																		</FormControl>
																		<Grid item xs={12}>
																			<TextField
																				InputProps={{
																					startAdornment: (
																						<InputAdornment
																							position="start"
																							sx={{ color: "black" }}
																						>
																							<FaGithub />
																						</InputAdornment>
																					),
																				}}
																				autoComplete="given-name"
																				fullWidth
																				id="github"
																				label="Github URL"
																				name="github"
																				sx={{ marginTop: "1.5rem" }}
																			/>
																		</Grid>
																		<Grid item xs={12}>
																			<TextField
																				InputProps={{
																					startAdornment: (
																						<InputAdornment
																							position="start"
																							sx={{ color: "black" }}
																						>
																							<FaLinkedin />
																						</InputAdornment>
																					),
																				}}
																				autoComplete="given-name"
																				fullWidth
																				id="linkedin"
																				label="LinkedIn URL"
																				name="linkedin"
																				sx={{ marginTop: "1.5rem" }}
																			/>
																		</Grid>
																		<Grid item xs={12}>
																			<TextField
																				InputProps={{
																					startAdornment: (
																						<InputAdornment
																							position="start"
																							sx={{ color: "black" }}
																						>
																							<FaInstagram />
																						</InputAdornment>
																					),
																				}}
																				autoComplete="given-name"
																				fullWidth
																				id="instagram"
																				label="Instagram URL"
																				name="instagram"
																				sx={{
																					marginTop: "1.5rem",
																				}}
																			/>
																		</Grid>
																	</Box>
																)}
															</React.Fragment>
														)}
													</React.Fragment>
												)}
											</Box>
											<Box
												sx={{
													display: "flex",
													flexDirection: "row",
													alignSelf: "flex-end",
													marginTop: "2rem",
													backgroundColor: "white",
												}}
											>
												<Button
													color="inherit"
													disabled={activeStep === 0}
													onClick={handleBack}
													sx={{ mr: 1 }}
												>
													Back
												</Button>
												<Box sx={{ flex: "1 1 auto" }} />

												<Button onClick={handleNext}>
													{activeStep === steps.length - 1 ? "Submit" : "Next"}
												</Button>
											</Box>
										</Box>
									)}
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}

export default Signup
