import React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { Button } from "@mui/material"
import { topics } from "../data/topics"
import CreateIcon from "@mui/icons-material/Create"
import { FiPlus } from "react-icons/fi"
import { BsCheck2 } from "react-icons/bs"
import { IoPeopleOutline } from "react-icons/io5"
import { GrArticle } from "react-icons/gr"
import { TiFlashOutline } from "react-icons/ti"

import { color, fontSize } from "@mui/system"
import TopicPost from "./TopicPost"

function Topic() {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const temp1 = topics.map((item) => ({ ...item, following: true }))
	const temp2 = topics.map((item) => ({ ...item, following: false }))
	const [followingTopics, setFollowingTopics] = React.useState(temp1)

	const [follow, setFollow] = React.useState(true)

	const handleFollowingBtnChange = (follow) => {
		setFollow(!follow)
	}

	return (
		<>
			<Box
				sx={{
					height: "250px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					// backgroundImage: `url("/images/topicBG.jpg")`,
					objectFit: "cover",
					backgroundColor: "white",
					border: "1px solid #83c8e4",
					borderRadius: "0.5rem",
				}}
			>
				<Box>
					<CardHeader
						avatar={
							<Avatar
								src="/images/webdev.jpg"
								aria-label="recipe"
								sx={{ borderRadius: "7px", width: "65px", height: "65px" }}
							/>
						}
						title="Web Development"
						subheader="#web-dev"
						sx={{ padding: "0.5rem 1rem" }}
						subheaderTypographyProps={{
							fontFamily: "inherit",
							fontSize: "15px",
							fontWeight: "100",
						}}
						titleTypographyProps={{
							fontFamily: "inherit",
							fontSize: "27px",
							fontWeight: "800",
						}}
					/>
				</Box>
				<CardActions sx={{ marginTop: "12px" }}>
					<Button
						onClick={() => {
							handleFollowingBtnChange(follow)
						}}
						size="small"
						variant={"outlined"}
						sx={{
							textTransform: "none",
							fontFamily: "inherit",
							height: "37.4px",
							width: "130px",
							marginRight: "10px",
							borderRadius: "20px",
							fontWeight: "500",
							fontSize: "14px",
						}}
						disableTouchRipple
					>
						<Box
							sx={{
								fontSize: "20px",
								display: "flex",
								alignItems: "center",
								marginRight: "5px",
							}}
						>
							{follow ? <BsCheck2 sx={{ fontWeight: "900" }} /> : <FiPlus />}
						</Box>
						{follow ? "Following" : "Follow Tag"}
					</Button>
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
					>
						<CreateIcon sx={{ fontSize: 18, marginRight: "0.35rem" }} />
						Add An Article
					</Button>
				</CardActions>
				<Box sx={{ marginTop: "8px", display: "flex" }}>
					<Box sx={{ display: "flex", marginX: "16px" }}>
						<Box
							sx={{ display: "flex", alignItems: "center", marginRight: "5px" }}
						>
							<IoPeopleOutline />
						</Box>
						107.3K Followers
					</Box>
					<Box sx={{ display: "flex", marginX: "16px" }}>
						<Box
							sx={{ display: "flex", alignItems: "center", marginRight: "5px" }}
						>
							<GrArticle />
						</Box>
						35K Articles
					</Box>
					<Box sx={{ display: "flex", marginX: "16px" }}>
						<Box
							sx={{ display: "flex", alignItems: "center", marginRight: "5px" }}
						>
							<TiFlashOutline />
						</Box>
						5 Post Today
					</Box>
				</Box>
			</Box>

			<Box
				sx={{
					display: "flex",
					marginY:'1rem',
					fontSize: "1.3rem",
					fontWeight: "600",
					background: "#fff",
					borderRadius: "0.5rem",
					height: "3rem",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				🔥 Popular this week
			</Box>

			<TopicPost />
		</>
	)
}

export default Topic
