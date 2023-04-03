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

function ProfileAnswerComponent({ post }) {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const date = new Date(post.createdAt)

	return (
		<>
			<Card
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					backgroundColor: "#f8fafc",
					marginBottom: "1rem",
				}}
			>
				<CardHeader
					avatar={<Avatar src={`/images/${post.dp}.jpg`} aria-label="recipe" />}
					action={
						<IconButton
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							aria-label="settings"
						>
							<MoreVertIcon />
						</IconButton>
					}
					title={post.name}
					subheader={post.date}
					sx={{ padding: "1rem 1rem 0rem 1.4rem" }}
					subheaderTypographyProps={{ fontFamily: "inherit" }}
					titleTypographyProps={{ fontFamily: "inherit", fontWeight: "3" }}
				/>
				<CardContent sx={{ padding: "0.5rem 1.5rem 0rem 1.5rem" }}>
					<Typography variant="subtitle1" sx={{ fontFamily: "inherit" }}>
						<strong>{post.question}</strong>
					</Typography>
					<Typography
						variant="body1"
						color="text.secondary"
						sx={{ fontFamily: "inherit" }}
					>
						{post.answer}
					</Typography>
				</CardContent>
				<Box
					sx={{
						padding: "0.5rem 1.5rem 1rem 1.5rem",
						display: "flex",
						alignItems: "center",
						width: "100%",
					}}
				>
					<Button
						component={"div"}
						sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
						startIcon={<ThumbUpIcon fontSize="small" />}
					>
						{post.upvote > 0 && post.upvote}
					</Button>
					<Button startIcon={<ThumbDownIcon fontSize="small" />}>
						{post.downvote > 0 && post.downvote}
					</Button>
				</Box>
			</Card>
		</>
	)
}

export default ProfileAnswerComponent
