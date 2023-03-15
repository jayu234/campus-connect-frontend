import React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ThumbDownIcon from "@mui/icons-material/ThumbDown"
import { Button, Divider, Menu, MenuItem } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import ShareIcon from "@mui/icons-material/Share"
import { Box } from "@mui/system"

import CreateIcon from "@mui/icons-material/Create"
import ProfileQuestionModal from "./ProfileQuestionModal"

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]

function ProfileQuestionComponent({ post }) {
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const [open, setOpen] = React.useState(false)

	const date = new Date(post.createdAt)

	return (
		<>
			{open && <ProfileQuestionModal open={open} tabInd={0} setOpen={setOpen} />}
			<Card
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					backgroundColor: "#f8fafc",
					marginBottom: "1rem",
				}}
			>
				<CardContent sx={{padding:'0.8rem 1.5rem 0rem 1.5rem'}}>
					<Typography variant="subtitle1" sx={{ fontFamily: "inherit" }}>
						<strong>{post.question}</strong>
					</Typography>
					<Typography
						variant="body1"
						color="text.secondary"
						sx={{ fontFamily: "inherit" }}
					>
						{post.answer.length}
						{post.answer.length < 2 ? " Answer" : " Answers"}
					</Typography>
				</CardContent>
				<Box sx={{padding:'0.4rem 0rem 1rem 1rem'}}>
					<Button
						variant="contained"
						component="p"
						sx={{
							marginX: 1,
							backgroundColor: "white",
							borderRadius: "20px",
							textTransform: "none",
							color:'black',
							boxShadow: "none",
							":hover": { backgroundColor:'#f8fafc'},
						}}
						onClick={() => {
							setOpen(true)
						}}
					>
						Give Answer
					</Button>
				</Box>
			</Card>
		</>
	)
}

export default ProfileQuestionComponent
