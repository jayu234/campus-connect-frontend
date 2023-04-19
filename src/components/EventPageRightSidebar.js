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

import { BsHeart } from "react-icons/bs"

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]

function EventPageRightSidebar({ props }) {
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<>
			<Box sx={{ marginBottom: "7rem" }}>
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
						BVM Engineering College
					</Box>
				</Box>

				<Card
					sx={{
						marginTop: "1rem",
						width: "100%",
						display: "flex",
						flexDirection: "column",
						boxShadow: "none",
						paddingTop: "1rem",
					}}
				>
					<CardContent sx={{ padding: "0rem 1.5rem" }}>
						<Typography
							variant="h5"
							sx={{ fontFamily: "inherit", fontWeight: "500" }}
						>
							Udaan - BVM Cultural Festival
						</Typography>
						<Typography
							variant="body1"
							color="text.secondary"
							sx={{
								fontFamily: "inherit",
								textAlign: "justify",
								fontSize: "1.25rem",
								fontWeight: "500",
							}}
						>
							A new Beauty of Event
						</Typography>
						<Typography
							variant="body1"
							color="text.secondary"
							sx={{ fontFamily: "inherit", textAlign: "justify" }}
						>
							"Web development has come a long way since its inception, and one
							tool that has made a significant impact is Chrome DevTools. It has
							revolutionized how web developers, QAs, and backend developers
							develop, test & debug web apps. Today, you can't imagine building
							web apps without access to Chrome Devtools. It provides complete
							visibility into what's happening inside your web application, from
							the HTML DOM at any given point to the network requests your app
							fired.
						</Typography>
						<Typography
							sx={{
								fontFamily: "inherit",
								color: "black",
								fontSize: "1.1rem",
								marginTop: "0.5rem",
							}}
						>
							Time : 8pm
						</Typography>
						<Typography
							sx={{
								fontFamily: "inherit",
								color: "black",
								fontSize: "1.1rem",
							}}
						>
							Date : 2023-02-24
						</Typography>
						<Typography
							sx={{
								fontFamily: "inherit",
								color: "black",
								fontSize: "1.1rem",
							}}
						>
							Location : V.V.Nagar, Anand
						</Typography>
						<Typography
							sx={{
								fontFamily: "inherit",
								color: "black",
								fontSize: "1.1rem",
							}}
						>
							Entry Fees : 5$
						</Typography>
					</CardContent>
					<Box
						component="img"
						sx={{
							marginBottom: "0rem",
							marginTop: "1rem",
							height: 500,
							width: 1000,
							maxHeight: { xs: 400, md: 1000 },
							maxWidth: { xs: 400, md: 1000 },
						}}
						alt="The house from the offer."
						src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
					/>
					<CardActions
						sx={{ display: "flex", padding: "0.3rem 2rem" }}
						disableSpacing
					>
						<Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
							<Button
								component={"div"}
								sx={{
									display: "flex",
									alignItems: "center",
									cursor: "pointer",
									fontSize: "1.1rem",
								}}
								startIcon={<BsHeart size={23} />}
							>
								50
							</Button>
						</Box>
					</CardActions>
					<Divider />
				</Card>
			</Box>
		</>
	)
}

export default EventPageRightSidebar
