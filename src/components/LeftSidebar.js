import { Box } from "@mui/system"
import React from "react"

import {
	IconButton,
	Typography,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material"

import HomeIcon from "@mui/icons-material/Home"
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"

const topics = [
	{
		title: "Web Development",
		icon: <HomeIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "Competitive Programming",
		icon: <SpeakerNotesIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "App Development",
		icon: <SpeakerNotesIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "HTML, CSS and JavaScript",
		icon: <SpeakerNotesIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "Technology",
		icon: <QuestionAnswerIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "Software Engineering",
		icon: <QuestionAnswerIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "Testing and Development",
		icon: <QuestionAnswerIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "UI/UX",
		icon: <EmojiEventsIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "Data Science",
		icon: <EmojiEventsIcon sx={{ fontSize: 30 }} />,
	},
]

const footer = [
	{
		title: "About",
		icon: <HomeIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "Careers",
		icon: <SpeakerNotesIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "Teams",
		icon: <SpeakerNotesIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "Privacy",
		icon: <SpeakerNotesIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "Acceptance Use",
		icon: <QuestionAnswerIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "Businesses",
		icon: <QuestionAnswerIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "Press",
		icon: <QuestionAnswerIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "Choices",
		icon: <EmojiEventsIcon sx={{ fontSize: 30 }} />,
	},
	{
		title: "Grievance Officer",
		icon: <EmojiEventsIcon sx={{ fontSize: 30 }} />,
	},
]

function LeftSidebar() {
	return (
		<Box
			sx={{
				border: "1px solid #e2e8f0cc",
				padding: 2,
				borderRadius: "0.5rem",
				backgroundColor: "#fff",
				marginBottom: "1rem",
				":hover": { borderColor: "#cfcfcf" },
				marginX: 1,
			}}
		>
			<Box>
				{topics.map((item) => {
					return (
						<>
							<Box
								sx={{
									padding: "0.5rem",
									marginBottom: "0.5rem",
									display: "flex",
									alignItems: "center",
									":hover": { backgroundColor: "#f2fafd" },
								}}
							>
								<Typography
									component={"img"}
									src="/images/logo1.png"
									href="/"
									width={"28px"}
									sx={{
										cursor: "pointer",
										marginRight: "0.6rem",
										textAlign: "center",
									}}
								/>
								{item.title}
							</Box>
						</>
					)
				})}
			</Box>
			<Box sx={{ flexGrow: 1, marginTop: "1rem" }}>
				{footer.map((item) => {
					return (
						<IconButton
							color="#fff"
							sx={{ marginX: "0.2rem", fontSize: "0.8rem" }}
						>
							{" ● "}
							{item.title}
						</IconButton>
					)
				})}
			</Box>
		</Box>
	)
}

export default LeftSidebar
