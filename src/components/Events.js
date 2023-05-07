import React from 'react'
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { Button } from "@mui/material"
import { topics } from "../data/topics"
import CreateIcon from "@mui/icons-material/Create"
import { FiPlus } from "react-icons/fi"
import { BsCheck2 } from "react-icons/bs"
import { IoPeopleOutline } from "react-icons/io5"
import { GrArticle } from "react-icons/gr"
import { TiFlashOutline } from "react-icons/ti"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { color, fontSize } from "@mui/system"
import TopicPost from "./TopicPost"
import EventsPost from "./EventsPost"

function Events() {
	return (
		<React.Fragment>
			<Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}} >
				<Box
					sx={{
						display: "flex",
						width: "100%",
						marginY: '1rem',
						fontSize: "1.3rem",
						fontWeight: "600",
						background: "#fff",
						borderRadius: "0.5rem",
						height: "3rem",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					🔥 Upcoming Events
				</Box>
				<Button
					variant="contained"
					sx={{
						width: "100%",
						flexShrink: "4",
						marginX: "1rem",
						backgroundColor: "#2563EB",
						textTransform: "none",
						boxShadow: "none",
						fontFamily: "inherit",
						":hover": { boxShadow: "none" }
					}}
					startIcon={<AddRoundedIcon />}
				>
					Add Event
				</Button>
			</Box>
			<EventsPost />
		</React.Fragment>
	)
}

export default Events