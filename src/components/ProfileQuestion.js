import React from "react"
import { Grid, Box, Avatar, TextField, Button, Divider } from "@mui/material"
import LiveHelpIcon from "@mui/icons-material/LiveHelp"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import RateReviewIcon from "@mui/icons-material/RateReview"
import MainModal from "./MainModal"
import { questions } from "../data/questions"
import ProfileQuestionComponent from "./ProfileQuestionComponent"

function ProfileQuestion() {
	return (
		<Box>
			{[
				questions.map((item) => {
					return <ProfileQuestionComponent key={item.question} post={item} />
				}),
			]}
		</Box>
	)
}

export default ProfileQuestion
