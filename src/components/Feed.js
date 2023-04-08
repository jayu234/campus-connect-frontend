import React from "react"
import { Grid, Box, Avatar, TextField, Button, Divider } from "@mui/material"
import LiveHelpIcon from "@mui/icons-material/LiveHelp"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import RateReviewIcon from "@mui/icons-material/RateReview"
import MainModal from "./MainModal"
import { posts } from "../data/posts"
import { webdevelopment } from "../data/webdevelopment"
import PostItem from "./PostItem"

function Feed() {
	const [open, setOpen] = React.useState(false)
	const [tabInd, setTabInd] = React.useState(0)
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
						padding: "1.5rem",
					}}
				>
					<Box
						mb={1}
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							columnGap: "0.5rem",
						}}
					>
						<Avatar alt="Profile pic" src="/images/Cryst3l.jpg" />
						<TextField
							fullWidth
							variant="outlined"
							placeholder="What do you want to ask or share?"
							sx={{ borderRadius: "16px", marginLeft: "1rem" }}
						/>
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
							}}
							startIcon={<QuestionAnswerIcon />}
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
				{[
					webdevelopment.map((item) => {
						return (
							<Box key={item._id} sx={{ marginBottom: '1rem' }}>
								<PostItem key={item._id} post={item} />
							</Box>
						)
					}),
				]}
			</Box>
		</Grid>
	)
}

export default Feed
