import React from "react"
import PropTypes from "prop-types"
import {
	Box,
	Grid,
	Modal,
	Tabs,
	Tab,
	Typography,
	Avatar,
	TextField,
	Button,
	Divider,
	IconButton,
} from "@mui/material"
import ImageIcon from "@mui/icons-material/Image"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 600,
	bgcolor: "background.paper",
	border: "1px solid #cecece",
	boxShadow: 24,
	borderRadius: "10px",
	p: 2,
}
function TabPanel(props) {
	const { children, value, index, ...other } = props
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
					<Typography component={"div"}>{children}</Typography>
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
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	}
}

function ProfileQuestionModal({ open, tabInd, setOpen }) {
	const [value, setValue] = React.useState(tabInd)
	const [text, setText] = React.useState("")
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<Modal
			open={open}
			onClose={() => {
				setOpen(false)
			}}
			aria-labelledby="keep-mounted-modal-title"
			aria-describedby="keep-mounted-modal-description"
		>
			<Box sx={style}>
				<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
					<IconButton
						onClick={() => {
							setOpen(false)
						}}
					>
						<CloseRoundedIcon sx={{ width: 20, height: 20 }} />
					</IconButton>
				</Box>
				<Box sx={{ padding: "0rem 1rem 3rem 1rem" }}>
					<Grid container>
						<Grid item component={"aside"} xs={1.1}>
							<Avatar
								alt="Profile pic"
								src="/images/Cryst3l.jpg"
								sx={{ cursor: "pointer" }}
							/>
						</Grid>
						<Grid item xs={7.5} sx={{ marginTop: "0.5rem" }}>
							<Box sx={{ fontSize: "15px" }}>
								<strong>Kashyap Bavadiya</strong>
							</Box>
						</Grid>
					</Grid>

					<Box sx={{ marginTop: "1rem", fontSize: "18px" }}>
						<strong>
							Is Competitive Programming hard? Why my rating stuck around 3
							months? plz give me tips for regarding resources and technical for
							preparation
						</strong>
					</Box>

					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "flex-start",
							columnGap: "1rem",
							marginTop: "1rem",
						}}
					>
						<TextField
							onChange={(e) => {
								setText(e.target.value)
							}}
							multiline
							fullWidth
							variant="standard"
							placeholder="Write your answer"
							sx={{ borderRadius: "16px" }}
						/>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						columnGap: "1rem",
						marginTop: "0.5rem",
					}}
				>
					<Button
						onClick={() => {
							setOpen(false)
						}}
						variant="text"
						sx={{ textTransform: "none" }}
					>
						Cancel
					</Button>
					<Button
						disabled={!text.length}
						onClick={() => {
							setOpen(false)
						}}
						variant="contained"
						sx={{ textTransform: "none" }}
					>
						Done
					</Button>
				</Box>
			</Box>
		</Modal>
	)
}

export default ProfileQuestionModal
