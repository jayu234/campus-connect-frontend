import * as React from "react"
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Container,
	Avatar,
	Button,
	Tooltip,
	tooltipClasses,
	Zoom,
} from "@mui/material"

import HomeIcon from "@mui/icons-material/Home"
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import CreateIcon from "@mui/icons-material/Create"

import { styled } from "@mui/material/styles"
import MainModal from "./MainModal"

const CustomWidthTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))({
	[`& .${tooltipClasses.tooltip}`]: {
		maxWidth: 500,
		maxHeight: 200,
		fontSize: 14,
	},
})

const iconBtns = [
	{
		name: "Home",
		icon: <HomeIcon sx={{ fontSize: 30 }} />,
	},
	{
		name: "Follwing",
		icon: <SpeakerNotesIcon sx={{ fontSize: 30 }} />,
	},
	{
		name: "Answer",
		icon: <QuestionAnswerIcon sx={{ fontSize: 30 }} />,
	},
	{
		name: "Events",
		icon: <EmojiEventsIcon sx={{ fontSize: 30 }} />,
	},
]

function Header() {
    const [open, setOpen] = React.useState(false);
	return (
		<>
			<MainModal open={open} tabInd={0} setOpen={setOpen} />
			<AppBar
				position="static"
				sx={{
					marginY: "0.5rem",
					boxShadow: "none",
					bgcolor: "#FFFFFF",
					border: "1.5px solid #efefef",
				}}
			>
				<Container maxWidth="xl">
					<Toolbar disableGutters variant="regular">
						<Box>
							<Typography
								component={"img"}
								src="/images/logo1.png"
								href="/"
								width={"28px"}
								sx={{
									cursor: "pointer",
									marginRight: "0.1rem",
									textAlign: "center",
									display: "flex",
									alignItems: "center",
								}}
							/>
						</Box>
						<Box
							sx={{
								backgroundColor: "#fff",
								color: "black",
								fontSize: "1.6rem",
								textAlign: "center",
								marginRight: "1.8rem",
							}}
						>
							<strong>CampusConnect</strong>
						</Box>
						<Box sx={{ flexGrow: 1 }}>
							{iconBtns.map((item) => {
								return (
									<CustomWidthTooltip
										key={item.name}
										title={item.name}
										TransitionComponent={Zoom}
									>
										<IconButton color="#fff" sx={{ marginX: "0.5rem" }}>
											{item.icon}
										</IconButton>
									</CustomWidthTooltip>
								)
							})}
						</Box>
						<Box sx={{ flexGrow: 0, marginX: 2 }}>
							<Button
								variant="contained"
								component="p"
								sx={{
									marginX: 1,
									backgroundColor: "#2563EB",
									borderRadius: "20px",
									textTransform: "none",
									boxShadow: "none",
									":hover": { boxShadow: "none" },
								}}
								onClick={()=>{ setOpen(true) }}
							>
								<CreateIcon sx={{ fontSize: 18, marginRight: "0.35rem" }} />
								Ask Doubt
							</Button>
							<IconButton>
								<DarkModeIcon />
							</IconButton>
							<IconButton>
								<Avatar alt="Profile pic" src="/images/avatar.png" />
							</IconButton>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	)
}
export default Header
