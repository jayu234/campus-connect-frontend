import React from "react"
import { Grid, Box, Avatar, TextField, Button, Divider } from "@mui/material"
import LiveHelpIcon from "@mui/icons-material/LiveHelp"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import RateReviewIcon from "@mui/icons-material/RateReview"
import MainModal from "./MainModal"
import { webdevelopment } from "../data/webdevelopment"
import { events } from "../data/events"
import PostItem from "./PostItem"
import TopicPostItem from "./TopicPostItem"
import EventsPostItem from "./EventsPostItem"

function EventsPost() {
	const [open, setOpen] = React.useState(false)
	const [tabInd, setTabInd] = React.useState(0)

	return (
		<>
			<Box>
				{[
					events.map((item) => {
						return (
							<>
								<EventsPostItem key={item._id} post={item} />
							</>
						)
					}),
				]}
			</Box>
		</>
	)
}

export default EventsPost
