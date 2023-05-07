import React from "react"
import Header from "./Header"
import ProfileLeftSidebar from "./ProfileLeftSidebar"
import ProfileRightSidebar from "./ProfileRightSidebar"
import { Grid, Box, Button, Autocomplete, Select } from "@mui/material"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs"
import { Divider } from "@mui/material"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import colleges from "../data/collegeName"
import cities from "../data/cities"
import { useSelector } from "react-redux"
import { skills as Skills } from "../data/skills"
import SelectField from "./FormFields/SelectField"
function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }} width={"100%"}>
					<Box component={"div"}>{children}</Box>
				</Box>
			)}
		</div>
	)
}
const courses = [
	{ label: "Information Technology", value: "Information Technology" },
	{ label: "Computer Science", value: "Computer Science" },
	{ label: "Civil Engineering", value: "Civil Engineering" },
	{ label: "Electronics Engineering", value: "Electronics Engineering" },
	{ label: "Electrical Engineering", value: "Electrical Engineering" },
	{ label: "Mechanical Engineering", value: "Mechanical Engineering" },
	{ label: "Production Engineering", value: "Production Engineering" },
	{ label: "Mathemetics", value: "Mathemetics" },
]

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
}

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	}
}

const genders = [
	{
		value: "male",
		label: "Male",
	},
	{
		value: "female",
		label: "Female",
	},
	{
		value: "other",
		label: "Other",
	},
]

function ProfileEdit() {
	const [value, setValue] = React.useState(1)
	const { loadUser: { data: { avatar, username, firstName, lastName, email, age, phone, college, course, gender, city, skills, links } } } = useSelector((state) => state.user);
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<>
			<Header />
			<Grid
				container
				spacing={2}
				sx={{
					height: "100%",
					display: "flex",
					backgroundColor: "#f8fafc",
					justifyContent: "center",
				}}
			>
				<Grid item component={"aside"} xs={10} sx={{ marginLeft: "3rem" }}>
					<Box
						sx={{
							flexGrow: 1,
							bgcolor: "background.paper",
							display: "flex",
							height: 624,
							border: "0.1rem solid #e2e8f0cc",
							borderRadius: "20px",
						}}
					>
						<Tabs
							orientation="vertical"
							variant="scrollable"
							value={value}
							onChange={handleChange}
							aria-label="Vertical tabs example"
							sx={{ borderRight: 1, borderColor: "divider", width: "20rem" }}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									flexDirection: "column",
									alignItems: "center",
									marginTop: "2rem",
								}}
							>
								<img
									style={{
										width: "7.5rem",
										height: "7.5rem",
										borderRadius: "1rem",
									}}
									src={avatar.url}
									alt="profile_pic"
								/>
								<Box sx={{ marginTop: "0.3rem" }}>
									<h3>{firstName + " " + lastName}</h3>
								</Box>
							</Box>
							<Tab
								label="Personal Details"
								{...a11yProps(1)}
								sx={{ fontWeight: 500, color: "black", fontSize: "0.9rem", fontFamily: "inherit" }}
							/>
							<Tab
								label="Credentials"
								{...a11yProps(2)}
								sx={{ fontWeight: 500, color: "black", fontSize: "0.9rem", fontFamily: "inherit" }}
							/>
							<Tab
								label="Education Details"
								{...a11yProps(3)}
								sx={{ fontWeight: 500, color: "black", fontSize: "0.9rem", fontFamily: "inherit" }}
							/>
							<Tab
								label="Additional details"
								{...a11yProps(4)}
								sx={{ fontWeight: 500, color: "black", fontSize: "0.9rem", fontFamily: "inherit" }}
							/>
						</Tabs>
						<Box sx={{ paddingLeft: "2rem" }}>
							<TabPanel value={value} index={1}>
								<Typography
									sx={{
										fontFamily: "inherit",
										textAlign: "justify",
										fontSize: "1.4rem",
									}}
								>
									Personal Details
								</Typography>
								<Divider />
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "2rem",
									}}
								>
									<Typography
										sx={{
											fontFamily: "inherit",
											textAlign: "justify",
											fontSize: "1.2rem",
											width: "10rem",
										}}
									>
										Username :
									</Typography>
									<TextField
										disabled
										id="outlined-required"
										label="Required"
										defaultValue={username}
									/>
								</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "1rem",
									}}
								>
									<Typography
										sx={{
											fontFamily: "inherit",
											textAlign: "justify",
											fontSize: "1.2rem",
											width: "10rem",
										}}
									>
										First Name :
									</Typography>
									<TextField
										required
										id="outlined-required"
										label="Required"
										defaultValue={firstName}
									/>
								</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "1rem",
									}}
								>
									<Typography
										sx={{
											fontFamily: "inherit",
											textAlign: "justify",
											fontSize: "1.2rem",
											width: "10rem",
										}}
									>
										Last Name :
									</Typography>
									<TextField
										required
										id="outlined-required"
										label="Required"
										defaultValue={lastName}
									/>
								</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "1rem",
									}}
								>
									<Typography
										sx={{
											fontFamily: "inherit",
											textAlign: "justify",
											fontSize: "1.2rem",
											width: "10rem",
										}}
									>
										Gender :
									</Typography>
									<Select
										label="Gender"
										value={gender}
									>
										{genders.map((option) => (
											<MenuItem key={option.value} value={option.label}>
												{option.label}
											</MenuItem>
										))}
									</Select>
								</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "1rem",
									}}
								>
									<Typography
										sx={{
											fontFamily: "inherit",
											textAlign: "justify",
											fontSize: "1.2rem",
											width: "10rem",
										}}
									>
										Age :
									</Typography>
									<TextField
										required
										id="outlined-number"
										label="Age"
										type="text"
										defaultValue={age}
									/>
								</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "1.8rem",
									}}
								>
									<Button variant="contained">Save</Button>
								</Box>
							</TabPanel>
							<TabPanel value={value} index={2}>
								<Typography
									sx={{
										fontFamily: "inherit",
										textAlign: "justify",
										fontSize: "1.4rem",
									}}
								>
									Login Details
								</Typography>
								<Divider />
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "2rem",
									}}
								>
									<Typography
										sx={{
											fontFamily: "inherit",
											textAlign: "justify",
											fontSize: "1.2rem",
											width: "13rem",
										}}
									>
										Contact No :
									</Typography>
									<TextField
										disabled
										id="outlined-number"
										label="Number"
										type="text"
										defaultValue="9023381314"
									/>
								</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "1rem",
									}}
								>
									<Typography
										sx={{
											fontFamily: "inherit",
											textAlign: "justify",
											fontSize: "1.2rem",
											width: "13rem",
										}}
									>
										Email :
									</Typography>
									<TextField
										disabled
										id="outlined-required"
										label="Email"
										defaultValue="bavadiyakashyap@gmail.com"
										sx={{ width: "20rem" }}
									/>
								</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "1rem",
									}}
								>
									<Typography
										sx={{
											fontFamily: "inherit",
											textAlign: "justify",
											fontSize: "1.2rem",
											width: "13rem",
										}}
									>
										Current Password :
									</Typography>
									<TextField
										id="outlined-password-input"
										label="Password"
										type="password"
										autoComplete="current-password"
										defaultValue="************"
										sx={{ width: "20rem" }}
									/>
								</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "1rem",
									}}
								>
									<Typography
										sx={{
											fontFamily: "inherit",
											textAlign: "justify",
											fontSize: "1.2rem",
											width: "13rem",
										}}
									>
										New Password :
									</Typography>
									<TextField
										id="outlined-password-input"
										label="Password"
										type="password"
										autoComplete="current-password"
										sx={{ width: "20rem" }}
									/>
								</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "1rem",
									}}
								>
									<Typography
										sx={{
											fontFamily: "inherit",
											textAlign: "justify",
											fontSize: "1.2rem",
											width: "13rem",
										}}
									>
										C. New Password :
									</Typography>
									<TextField
										id="outlined-password-input"
										label="Confirm Password"
										type="password"
										autoComplete="current-password"
										sx={{ width: "20rem" }}
									/>
								</Box>

								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "1.8rem",
									}}
								>
									<Button variant="contained">Change Password</Button>
								</Box>
							</TabPanel>
							<TabPanel value={value} index={3}>
								<Typography
									sx={{
										fontFamily: "inherit",
										textAlign: "justify",
										fontSize: "1.4rem",
									}}
								>
									Education Details
								</Typography>
								<Divider />
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "2rem",
									}}
								>
									<Typography
										sx={{
											fontFamily: "inherit",
											textAlign: "justify",
											fontSize: "1.2rem",
											width: "13rem",
										}}
									>
										College Name :
									</Typography>
									<Autocomplete
										disablePortal
										id="college"
										options={colleges}
										getOptionLabel={(option) => option.label}
										sx={{ width: 300 }}
										renderInput={(params) => (
											<TextField {...params} label="College" />
										)}
									/>
								</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "1rem",
									}}
								>
									<Typography
										sx={{
											fontFamily: "inherit",
											textAlign: "justify",
											fontSize: "1.2rem",
											width: "13rem",
										}}
									>
										Course :
									</Typography>
									<Autocomplete
										disablePortal
										id="combo-box-demo"
										options={courses}
										sx={{ width: 300 }}
										renderInput={(params) => (
											<TextField {...params} label="Course" />
										)}
									/>
								</Box>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "1rem",
									}}
								>
									<Typography
										sx={{
											fontFamily: "inherit",
											textAlign: "justify",
											fontSize: "1.2rem",
											width: "13rem",
										}}
									>
										City :
									</Typography>
									<Autocomplete
										disablePortal
										id="combo-box-demo"
										options={cities}
										getOptionLabel={(option) => option.label}
										sx={{ width: 300 }}
										renderInput={(params) => (
											<TextField {...params} label="City" />
										)}
									/>
								</Box>

								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										marginTop: "2.4rem",
									}}
								>
									<Button variant="contained">Save</Button>
								</Box>
							</TabPanel>
							<TabPanel value={value} index={4}>
								<Typography
									sx={{
										fontFamily: "inherit",
										textAlign: "justify",
										fontSize: "1.4rem",
									}}
								>
									Additional details
								</Typography>
								<Divider />
								<Box
									sx={{
										display: "flex",
										width: "100%",
										justifyContent: "space-between",
										gap: "5rem",
										alignItems: "center",
										marginTop: "2rem",
									}}
								>
									<Typography
										sx={{
											fontFamily: "inherit",
											textAlign: "justify",
											fontSize: "1.2rem",
										}}
									>
										Skills
									</Typography>
									<Autocomplete
										fullWidth
										disablePortal
										multiple
										id="combo-box-demo"
										options={Skills}
										defaultValue={skills}
										renderInput={(params) => (
											<TextField {...params} label="Skills" />
										)}
									/>
								</Box>
								<Box
									sx={{
										width: "100%",
										display: "flex",
										justifyContent: "space-between",
										gap: "5rem",
										alignItems: "flex-start",
										marginTop: "2rem",
									}}
								>
									<Box>
										<Typography
											sx={{
												fontFamily: "inherit",
												textAlign: "justify",
												fontSize: "1.2rem",
											}}
										>
											Links
										</Typography>
									</Box>
									<Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
										<Box sx={{ display: 'flex', alignItems: 'flex-end', gap: "1rem" }}>
											<BsGithub size={20} />
											<TextField
												fullWidth
												variant="standard"
												id="github-link"
												type="text"
												defaultValue={links[0].url}
												placeholder="Github profile"
											/>
										</Box>
										<Box sx={{ display: 'flex', alignItems: 'flex-end', gap: "1rem" }}>
											<BsLinkedin size={20} />
											<TextField
												fullWidth
												variant="standard"
												id="linkedin-link"
												type="text"
												defaultValue={links[1].url}
												placeholder="LinkedIn profile"
											/>
										</Box>
										<Box sx={{ display: 'flex', alignItems: 'flex-end', gap: "1rem" }}>
											<BsTwitter size={20} />
											<TextField
												fullWidth
												variant="standard"
												id="twitter-link"
												type="text"
												defaultValue={links[2].url}
												placeholder="Twitter profile"
											/>
										</Box>
									</Box>
								</Box>
							</TabPanel>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	)
}

export default ProfileEdit
