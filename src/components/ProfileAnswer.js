import React from "react"
import { Grid, Box, Avatar, TextField, Button, Divider } from "@mui/material"
import LiveHelpIcon from "@mui/icons-material/LiveHelp"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import RateReviewIcon from "@mui/icons-material/RateReview"
import MainModal from "./MainModal"
import { answers } from "../data/answers"
import ProfileAnswerComponent from "./ProfileAnswerComponent"

function ProfileAnswer() {
	return (
		<Box>
			{[
				answers.map((item) => {
					return <ProfileAnswerComponent key={item.question} post={item} />
				}),
			]}
		</Box>
	)
}

export default ProfileAnswer
