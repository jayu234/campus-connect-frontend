import React from "react"
import { Grid, Box, Avatar, TextField, Button, Divider } from "@mui/material"
import LiveHelpIcon from "@mui/icons-material/LiveHelp"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import RateReviewIcon from "@mui/icons-material/RateReview"
import MainModal from "./MainModal"
import { posts } from "../data/posts"
import ProfilePostItem from "./ProfilePostItem"

function ProfilePost() {
	const [open, setOpen] = React.useState(false)
	const [tabInd, setTabInd] = React.useState(0)
	return (
		<Box>
				{[
					posts.map((item) => {
						return <ProfilePostItem key={item._id} post={item} />
					}),
				]}
		</Box>
	)
}

export default ProfilePost
