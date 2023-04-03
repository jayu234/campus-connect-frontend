import React from "react"
import {
	Card,
	CardContent,
	CardActions,
	CardMedia,
	Grid,
	Typography,
	Button,
} from "@mui/material"

import CardHeader from "@mui/material/CardHeader"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ThumbDownIcon from "@mui/icons-material/ThumbDown"
import { Divider, Menu, MenuItem } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import ShareIcon from "@mui/icons-material/Share"
import { Box } from "@mui/system"
import { answers } from "../data/answers"
import AnswerPost from "./AnswerPost"


function Answer() {
	return (
		<>
			<Typography variant="h5" fontFamily={"inherit"} fontWeight="500">
				Questions for you
			</Typography>
			{answers.map((item) => {
				return (
					<AnswerPost item={item} />
				)
			})}
		</>
	)
}

export default Answer
