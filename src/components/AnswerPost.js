import React from "react"

import {
	Card,
	CardContent,
	CardActions,
	CardMedia,
	Grid,
	Typography,
	Button,
} from "@mui/material"

import CardHeader from "@mui/material/CardHeader"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ThumbDownIcon from "@mui/icons-material/ThumbDown"
import { Divider, Menu, MenuItem } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import ShareIcon from "@mui/icons-material/Share"
import { Box } from "@mui/system"
import { answers } from "../data/answers"


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


function AnswerPost({ item }) {
    const [anchorEl, setAnchorEl] = React.useState(null)

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const [open, setOpen] = React.useState(false)

    const date = new Date(item.createdAt)
	return (
		<>
			<Card
				sx={{
					paddingTop: "0.4rem",
					marginTop: "1rem",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					boxShadow: "none",
				}}
			>
				<CardHeader
					avatar={
						<Avatar
							src={`/images/${item.dp}.jpg`}
							aria-label="recipe"
							sx={{ width: "3rem", height: "3rem" }}
						/>
					}
					title={item.name}
					subheader={`${item.username} ~ ${
						months[date.getMonth()]
					} ${date.getDate()}, ${date.getFullYear()}`}
					sx={{ padding: "1rem 1.5rem 0.7rem 1.5rem" }}
					subheaderTypographyProps={{
						fontFamily: "inherit",
						fontSize: "0.9rem",
					}}
					titleTypographyProps={{
						fontFamily: "inherit",
						fontSize: "1.2rem",
						fontWeight: "500",
					}}
				/>
				<CardContent sx={{ padding: "0.2rem 1.6rem 0rem 1.6rem" }}>
					<Typography
						sx={{ fontFamily: "inherit", fontSize: "1.3rem", fontWeight:'500' }}
					>
						{item.question}
					</Typography>
					<Typography
						variant="body1"
						color="text.secondary"
						sx={{ fontFamily: "inherit", fontSize: "14px" }}
					>
						{item.answer.length > 0
							? `${item.answer.length} Answers`
							: "No answer yet"}
					</Typography>
				</CardContent>
				<Box sx={{ padding: "0.5rem 0rem 1rem 1rem" }}>
					<Button
						variant="contained"
						component="p"
						sx={{
							marginX: 1,
							backgroundColor: "white",
							borderRadius: "20px",
							textTransform: "none",
							color: "black",
							boxShadow: "none",
							border: "1px solid black",
							":hover": {
								backgroundColor: "#f8fafc",
								borderColor: "white",
							},
						}}
						onClick={() => {
							setOpen(true)
						}}
					>
						Give Answer
					</Button>
				</Box>

				<Divider />
			</Card>
		</>
	)
}

export default AnswerPost
