import React from "react"
import Header from "./Header"
import ProfileLeftSidebar from "./ProfileLeftSidebar"
import ProfileRightSidebar from "./ProfileRightSidebar"
import { Grid, Box } from "@mui/material"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react";

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
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

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
];


function ProfileEdit() {
	const [value, setValue] = React.useState(1)

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
							":hover": { borderColor: "#29a9f2" },
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
									src="/images/z1.jpg"
									alt="Welcome to our website"
								/>
								<Box sx={{ marginTop: "0.3rem" }}>
									<h3>Kashyap Bavadiya</h3>
								</Box>
							</Box>
							<Tab
								label="Personal Details"
								{...a11yProps(1)}
								sx={{ fontWeight: 500, color: "black", fontSize: "0.9rem" }}
							/>
							<Tab
								label="Login Details"
								{...a11yProps(2)}
								sx={{ fontWeight: 500, color: "black", fontSize: "0.9rem" }}
							/>
							<Tab
								label="Education Details"
								{...a11yProps(3)}
								sx={{ fontWeight: 500, color: "black", fontSize: "0.9rem" }}
							/>
							<Tab
								label="Area of Interest"
								{...a11yProps(4)}
								sx={{ fontWeight: 500, color: "black", fontSize: "0.9rem" }}
							/>
						</Tabs>
						<TabPanel value={value} index={1}>
							<Box>
								<Grid container spacing={3}>
									<Grid item xs={12} sm={6}>
										<InputField
											name={firstName.name}
											label={firstName.label}
											fullWidth
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<InputField
											name={lastName.name}
											label={lastName.label}
											fullWidth
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<SelectField
											name={gender.name}
											label={gender.label}
											data={genders}
											fullWidth
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<InputField name={age.name} label={age.label} fullWidth />
									</Grid>
									<Grid item xs={12} sm={6}>
										<InputField
											name={username.name}
											label={username.label}
											fullWidth
										/>
									</Grid>
								</Grid>
							</Box>
						</TabPanel>
						<TabPanel value={value} index={2}>
							Item Two
						</TabPanel>
						<TabPanel value={value} index={3}>
							Item Three
						</TabPanel>
						<TabPanel value={value} index={4}>
							Item Four
						</TabPanel>
					</Box>
				</Grid>
			</Grid>
		</>
	)
}

export default ProfileEdit
