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
import NotificationsIcon from "@mui/icons-material/Notifications"

import { styled } from "@mui/material/styles"
import MainModal from "./MainModal"
import { useLocation, useNavigate } from "react-router-dom"

import { NavLink } from "react-router-dom"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import { color } from "@mui/system"
import { useDispatch } from "react-redux"
import { userLogout } from "../store/userSlice"
const CustomWidthTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))({
	[`& .${tooltipClasses.tooltip}`]: {
		maxWidth: 500,
		maxHeight: 200,
		fontSize: 14,
	},
})


const settings = ["Profile", "Edit profile", "Logout"]

function Navbar() {
	const [anchorElUser, setAnchorElUser] = React.useState(null)
	const dispatch = useDispatch();
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const navigate = useNavigate();
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const handleAction = (setting) => {
		if (setting === "Profile") {
			navigate("/profile");
		}
		if(setting === "Logout"){
			dispatch(userLogout());
		}
		handleCloseUserMenu();
	}
	const [open, setOpen] = React.useState(false);
	const currPage = useLocation().pathname;
	const isHomePage = currPage === "/";
	const isFollowingPage = currPage === "/following";
	const isAnswerPage = currPage === "/answer";
	const isEventsPage = currPage === "/events";

	const iconBtns = [
		{
			name: "Home",
			icon: <HomeIcon sx={{ fontSize: 30 }} color={isHomePage ? 'primary' : '#757575'} />,
			link: "/",
			pageLabel: "/"
		},
		{
			name: "Following",
			icon: <SpeakerNotesIcon sx={{ fontSize: 30 }} color={isFollowingPage ? 'primary' : '#757575'} />,
			link: "following",
			pageLabel: "/following"
		},
		{
			name: "Answer",
			icon: <QuestionAnswerIcon sx={{ fontSize: 30 }} color={isAnswerPage ? 'primary' : '#757575'} />,
			link: "answer",
			pageLabel: "/answer"
		},
		{
			name: "Events",
			icon: <EmojiEventsIcon sx={{ fontSize: 30 }} color={isEventsPage ? 'primary' : '#757575'} />,
			link: "events",
			pageLabel: "/events"
		},
	]
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
									marginRight: "0.2rem",
									textAlign: "center",
									display: "flex",
									alignItems: "center",
									userSelect: "none",
								}}
							/>
						</Box>
						<Box>
							<Typography
								component={"a"}
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
									userSelect: "none",
									letterSpacing: -1,
								}}
							>
								CampusConnect
							</Typography>
						</Box>
						{/* Navigation Navbar */}
						<Box sx={{ flexGrow: 1 }}>
							{iconBtns.map((item) => {
								return (
									<CustomWidthTooltip
										key={item.name}
										title={item.name}
										TransitionComponent={Zoom}
									>
										<IconButton
											disableTouchRipple
											onClick={() => {
												navigate(`${item.link}`)
											}}
											color="#fff"
											sx={{ marginX: "0.7rem", borderRadius: '5px', ":hover": { backgroundColor: '#F1F5F9' } }}
										>
											{item.icon}
										</IconButton>
									</CustomWidthTooltip>
								)
							})}
						</Box>
						{/* Navigation Navbar End */}

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
								onClick={() => {
									setOpen(true)
								}}
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
								sx={{ mt: "45px" }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map((setting) => (
									<MenuItem key={setting} onClick={() => { handleAction(setting) }}>
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
export default Navbar
