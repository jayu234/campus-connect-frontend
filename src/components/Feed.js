import React from "react"
import { Grid, Box, Typography, Avatar, TextField, CircularProgress, Button, Divider } from "@mui/material"
import ReplayIcon from '@mui/icons-material/Replay';
import LiveHelpIcon from "@mui/icons-material/LiveHelp"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import RateReviewIcon from "@mui/icons-material/RateReview"
import MainModal from "./MainModal"
import PostItem from "./PostItem"
import { useDispatch, useSelector } from "react-redux"
import { getFeedData } from "../store/feedSlice"
import { useNavigate } from "react-router-dom";

function Feed() {
	const [open, setOpen] = React.useState(false)
	const [tabInd, setTabInd] = React.useState(0);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { feed: { data, isLoading, isError, success } } = useSelector((state) => state.feed);
	const { loadUser: { data: { avatar } } } = useSelector((state) => state.user);
	React.useEffect(() => {
		dispatch(getFeedData());
	}, [dispatch]);
	return (
		<Grid component={"div"} container direction={"column"}>
			<Grid
				item
				sx={{
					border: "1px solid #e2e8f0cc",
					borderRadius: "0.5rem",
					backgroundColor: "#fff",
					marginBottom: "1rem",
					":hover": { borderColor: "#cfcfcf" },
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						columnGap: "1rem",
						padding: "1.5rem 1.5rem 0.75rem",
					}}
				>
					<Box
						mb={2}
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							columnGap: "0.5rem",
						}}
					>
						<Avatar alt="profile_pic" src={avatar.url} />
						<Box component={'div'} sx={{ width: "100%", border: "2px solid #efefef", padding: "0.75rem 1rem", borderRadius: "16px", marginLeft: "0.75rem", cursor: "pointer" }} onClick={() => {
							setTabInd(0)
							setOpen(true)
						}}>
							<Typography fontFamily={'inherit'} color={'#979797'}>
								What do you want to ask or share?
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							columnGap: "1rem",
						}}
					>
						<Button
							onClick={() => {
								setTabInd(0)
								setOpen(true)
							}}
							fullWidth
							sx={{
								borderRadius: "16px",
								padding: "0.5rem",
								textTransform: "none",
								fontFamily: "inherit"
							}}
							startIcon={<LiveHelpIcon />}
						>
							Ask
						</Button>
						<Divider orientation="vertical" flexItem />
						<Button
							fullWidth
							sx={{
								borderRadius: "16px",
								padding: "0.5rem",
								textTransform: "none",
								fontFamily: "inherit"
							}}
							startIcon={<QuestionAnswerIcon />}
							onClick={() => { navigate("/answer") }}
						>
							Answer
						</Button>
						<Divider orientation="vertical" flexItem />
						<Button
							onClick={() => {
								setTabInd(1)
								setOpen(true)
							}}
							fullWidth
							sx={{
								borderRadius: "16px",
								padding: "0.5rem",
								textTransform: "none",
								fontFamily: "inherit"
							}}
							startIcon={<RateReviewIcon />}
						>
							Post
						</Button>
					</Box>
				</Box>
				{open && <MainModal open={open} tabInd={tabInd} setOpen={setOpen} />}
			</Grid>
			<Box>
				{_renderContent()}
			</Box>
		</Grid>
	)

	function _renderContent() {
		if (isLoading) {
			return (
				<Box component={'div'} mt={'1rem'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
					<CircularProgress size={30} />
					<Typography>Loading...</Typography>
				</Box>
			)
		}
		else if (success) {
			return (data.length > 0 ? (data.map((item) => {
				return (
					<Box key={item._id} sx={{ marginBottom: '1rem' }}>
						<PostItem key={item._id} post={item} />
					</Box>
				)
			})) : (
				<Typography align="center" fontFamily={'inherit'}>No data to display.</Typography>
			))
		}
		else if (isError) {
			return (<Box component={'div'} mt={'1rem'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
				<Typography align='center' fontFamily={'inherit'}>Sorry, something went wrong.<br />Please refresh the page and try again.</Typography>
				<Button variant="contained" sx={{ marginTop: "0.5rem", textTransform: 'none', borderRadius: '50px' }} startIcon={<ReplayIcon fontSize='20px' />} onClick={() => { window.location.reload() }}>Refresh</Button>
			</Box>)
		}
	}
}

export default Feed
