import React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ThumbDownIcon from "@mui/icons-material/ThumbDown"
import { Button, Divider, Menu, MenuItem } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import ShareIcon from "@mui/icons-material/Share"
import { Box } from "@mui/system"
import ProfileQuestionModal from "./ProfileQuestionModal"
import { questionanswer } from "../data/questionanswer"
import AnswerPageComponent from "./AnswerPageComponent"

function AnswerPageRightSidebar() {
	const [open, setOpen] = React.useState(false)
	return (
		<>
			{open && (
				<ProfileQuestionModal open={open} tabInd={0} setOpen={setOpen} />
			)}
			<Box>
				<Box
					sx={{
						backgroundColor: "white",
						borderRadius: "1rem",
						border: "1px solid #e2e8f0cc",
						":hover": { borderColor: "#29a9f2" },
					}}
				>
					<Box
						sx={{
							textAlign: "center",
							marginY: "1rem",
							fontSize: "1.5rem",
							fontWeight: "500",
						}}
					>
						What is the full form of GPT in chatGPT?
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							margin: "1.4rem 1rem 0rem 1rem",
						}}
					>
						<Avatar
							src={`/images/z1.jpg`}
							aria-label="recipe"
							sx={{ width: "3rem", height: "3rem" }}
						/>
					</Box>
					<Box
						sx={{
							textAlign: "center",
							margin: "0.5rem 1rem 0.3rem 1rem",
							fontSize: "1.2rem",
							fontWeight: "400",
						}}
					>
						Kashyap, can you answer this question?
					</Box>
					<Box
						sx={{
							textAlign: "center",
							margin: "0rem 1rem 1rem 1rem",
							fontSize: "1rem",
							fontWeight: "200",
						}}
					>
						People are searching for a better answer to this question.
					</Box>
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<Button
							variant="contained"
							component="p"
							sx={{
								margin: "0rem 1rem 1.5rem 1rem",
								backgroundColor: "white",
								border: "1px solid #000",
								borderRadius: "20px",
								textTransform: "none",
								color: "black",
								boxShadow: "none",
								transition: "0.4s",
								":hover": { backgroundColor: "#f8fafc", borderColor: "#fff" },
							}}
							onClick={() => {
								setOpen(true)
							}}
						>
							Give Answer
						</Button>
					</Box>
				</Box>

				<Box>
					{questionanswer.map((qa) => {
						return <>
						<AnswerPageComponent post={qa} />
						</>
					})}
				</Box>
			</Box>
		</>
	)
}

export default AnswerPageRightSidebar
