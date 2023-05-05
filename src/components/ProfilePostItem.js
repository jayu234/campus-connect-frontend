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

export default function ProfilePostItem({ post }) {
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const date = new Date(post.createdAt)
	return (
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
				avatar={<Avatar src={post.author.avatar.url} aria-label="recipe" />}
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
				title={post.author.firstName + " " + post.author.lastName}
				subheader={`${
					months[date.getMonth()]
				} ${date.getDate()}, ${date.getFullYear()}`}
				sx={{ padding: "1rem 1rem 0.7rem 1rem" }}
				subheaderTypographyProps={{ fontFamily: "inherit" }}
				titleTypographyProps={{ fontFamily: "inherit" }}
			/>
			<CardContent sx={{ padding: "0rem 1rem" }}>
				<Typography variant="h6" sx={{ fontFamily: "inherit" }}>
					{post.title}
				</Typography>
				<Typography
					variant="body1"
					color="text.secondary"
					sx={{ fontFamily: "inherit" }}
				>
					{post.content}
				</Typography>
			</CardContent>
			<CardActions sx={{ display: "flex" }} disableSpacing>
				<Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
					<Button
						component={"div"}
						sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
						startIcon={<ThumbUpIcon fontSize="small" />}
					>
						{post.likes > 0 && post.likes}
					</Button>
					<Button startIcon={<ThumbDownIcon fontSize="small" />} />
				</Box>
				<Menu
					id="menu-appbar"
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					keepMounted
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose}>
						<EditIcon fontSize="small" sx={{ marginRight: "1rem" }} />
						Edit
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<ShareIcon fontSize="small" sx={{ marginRight: "1rem" }} />
						Share
					</MenuItem>
				</Menu>
			</CardActions>
		</Card>
	)
}
