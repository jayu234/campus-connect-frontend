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
	Menu,
	MenuItem,
	Zoom,
} from "@mui/material"

import HomeIcon from "@mui/icons-material/Home"
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import CreateIcon from "@mui/icons-material/Create"
import NotificationsIcon from '@mui/icons-material/Notifications';

import { styled } from "@mui/material/styles"
import MainModal from "./MainModal"
import { useNavigate } from "react-router-dom"

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
		link: "/"
	},
	{
		name: "Following",
		icon: <SpeakerNotesIcon sx={{ fontSize: 30 }} />,
		link: "following"
	},
	{
		name: "Answer",
		icon: <QuestionAnswerIcon sx={{ fontSize: 30 }} />,
		link: "answer"
	},
	{
		name: "Events",
		icon: <EmojiEventsIcon sx={{ fontSize: 30 }} />,
		link: "events"
	},
]
const settings = ['Profile', 'Edit profile', 'Logout'];

function Header() {
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const [open, setOpen] = React.useState(false);
	const navigate = useNavigate();
	return (
		<>
			{open && <MainModal open={open} tabInd={0} setOpen={setOpen} />}
			<AppBar
				position="static"
				sx={{
					marginBottom: "1rem",
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
									marginRight: "0.5rem",
									textAlign: "center",
									display: "flex",
									alignItems: "center",
									userSelect: "none"
								}}
							/>
						</Box>
						<Box>
							<Typography
								component={'a'}
								href="/"
								sx={{
									backgroundColor: "#fff",
									color: "black",
									fontSize: "1.6rem",
									textAlign: "center",
									marginRight: "1.8rem",
									fontFamily: "'Inter', sans-serif",
									fontWeight: "600",
									cursor: "pointer",
									textDecoration: "none",
									userSelect: "none"
								}}>CampusConnect</Typography>
						</Box>
						<Box sx={{ flexGrow: 1 }}>
							{iconBtns.map((item) => {
								return (
									<CustomWidthTooltip
										key={item.name}
										title={item.name}
										TransitionComponent={Zoom}
									>
										<IconButton onClick={() => { navigate(`${item.link}`) }} color="#fff" sx={{ marginX: "0.5rem" }}>
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
								onClick={() => { setOpen(true) }}
							>
								<CreateIcon sx={{ fontSize: 18, marginRight: "0.35rem" }} />
								Ask Doubt
							</Button>
							<IconButton>
								<DarkModeIcon />
							</IconButton>
							<IconButton>
								<NotificationsIcon />
							</IconButton>
							<IconButton onClick={handleOpenUserMenu}>
								<Avatar alt="Profile pic" src="/images/avatar.png" />
							</IconButton>
							<Menu
								sx={{ mt: '45px' }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map((setting) => (
									<MenuItem key={setting} onClick={handleCloseUserMenu}>
										<Typography textAlign="center">{setting}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	)
}
export default Header
