import * as React from "react"
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
import { BsHeart } from "react-icons/bs"

import { Button, Divider, Menu, MenuItem } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import ShareIcon from "@mui/icons-material/Share"
import { Box } from "@mui/system"

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

export default function EventsPostItem({ post }) {
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const date = new Date(post.date)
	return (
		<Card
			sx={{
				marginTop: "1rem",
				width: "100%",
				display: "flex",
				boxShadow: "none",
				justifyContent: "space-between",
			}}
		>
			<Box>
				<CardContent sx={{ padding: "1rem 1.5rem" }}>
					<Typography
						sx={{
							fontFamily: "inherit",
							fontWeight: "500",
							fontSize: "1.5rem",
						}}
					>
						{post.title}
					</Typography>
					<Typography
						sx={{
							fontFamily: "inherit",
							fontSize: "1.3rem",
							marginTop: "0.5rem",
						}}
					>
						{post.collegename}
					</Typography>
					<Typography
						sx={{
							fontFamily: "inherit",
							color: "black",
							fontSize: "1.1rem",
							marginTop: "0.5rem",
						}}
					>
						Time : {post.time}
					</Typography>
					<Typography
						sx={{
							fontFamily: "inherit",
							color: "black",
							fontSize: "1.1rem",
						}}
					>
						Date :
						{` ${
							months[date.getMonth()]
						} ${date.getDate()}, ${date.getFullYear()}`}
					</Typography>
				</CardContent>

				<CardActions
					sx={{ display: "flex", padding: "0.3rem 2rem" }}
					disableSpacing
				>
					<Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
						<Button
							component={"div"}
							sx={{
								display: "flex",
								alignItems: "center",
								cursor: "pointer",
								fontSize: "1.1rem",
							}}
							startIcon={<BsHeart size={23} />}
						>
							{post.likes > 0 && post.likes}
						</Button>
					</Box>
				</CardActions>
			</Box>
			<Box
				component="img"
				sx={{
					height: 200,
					width: 400,
					margin: "1rem",
					borderRadius: "1rem",
					maxHeight: { xs: 200, md: 300 },
					maxWidth: { xs: 200, md: 300 },
				}}
				alt="The house from the offer."
				src={post.image.url}
			/>
		</Card>
	)
}
