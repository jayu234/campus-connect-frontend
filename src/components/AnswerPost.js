import React, { useEffect, useState } from "react"
import { Card, CardContent, Typography, Button, IconButton } from "@mui/material"
import CardHeader from "@mui/material/CardHeader"
import Avatar from "@mui/material/Avatar"
import { Divider } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from "react-router"
import ProfileQuestionModal from "./ProfileQuestionModal"
import { BsHeart, BsHeartFill } from "react-icons/bs"
import {  useSelector } from "react-redux"
import axios from "axios"

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

function AnswerPost({ item }) {
	const { _id, author, content, answers, createdAt } = item;

	const { loadUser } = useSelector((state) => state.user);
	const { newAnswer: { data, isLoading, success } } = useSelector((state) => state.answer);
	const userId = loadUser.data._id;
	const navigate = useNavigate();
	const date = new Date(createdAt);

	const [open, setOpen] = useState(false)
	const [isLiked, setIsLiked] = useState(item.likes.includes(userId));
	const [likes, setLikes] = useState(item.likes.length);
	const [answerCount, setAnswerCount] = useState(answers.length);
	const handleToggleLikeUnlike = async () => {
		if (isLiked) {
			setIsLiked(!isLiked);
			setLikes(likes - 1);
			await axios.post(`${process.env.REACT_APP_BASE_URL}/doubt/like/${item._id}`).catch((err) => {
				setLikes(likes + 1);
				setIsLiked(!isLiked);
				console.log("Falied to unlike post", err);
			});
		} else {
			setIsLiked(!isLiked);
			setLikes(likes + 1);
			await axios.post(`${process.env.REACT_APP_BASE_URL}/doubt/like/${item._id}`).catch((err) => {
				setLikes(likes - 1);
				setIsLiked(!isLiked);
				console.log("Falied to like post", err);
			});
		}
	}
	return (
		<>
			{open && <ProfileQuestionModal open={open} tabInd={0} setOpen={setOpen} doubt={item} answerCount={answerCount} setAnswerCount={setAnswerCount}/>}
			<Card
				sx={{
					paddingTop: "0.4rem",
					marginTop: "1rem",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					boxShadow: "none"
				}}
			>
				<CardHeader
					avatar={
						<Avatar
							alt="user_avatar"
							src={author.avatar.url}
							aria-label="recipe"
							sx={{ width: "3rem", height: "3rem" }}
						/>
					}
					title={author.firstName + " " + author.lastName}
					subheader={`${author.username} ~ ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}
					sx={{ padding: "1rem 1.5rem 0.7rem 1.5rem" }}
					subheaderTypographyProps={{
						fontFamily: "inherit",
						fontSize: "0.9rem",
					}}
					titleTypographyProps={{
						fontFamily: "inherit",
						fontSize: "1.2rem",
						fontWeight: "500",
					}}
				/>
				<CardContent sx={{ padding: "0.2rem 1.6rem 0rem 1.6rem" }}>
					<Typography sx={{ fontFamily: "inherit", fontSize: "1.3rem", fontWeight: '500', cursor: "pointer" }} onClick={() => { navigate(`/question/${_id}`) }}
					>
						{content}
					</Typography>
					<Typography
						variant="body1"
						color="text.secondary"
						sx={{ fontFamily: "inherit", fontSize: "14px" }}
					>
						{answerCount > 0
							? (answerCount === 1 ? "1 Answer" : `${answerCount} Answers`)
							: "No answer yet"}
					</Typography>
				</CardContent>
				<Box sx={{ padding: "0.5rem 0rem 1rem 1rem" }}>
					<IconButton color={"black"} onClick={handleToggleLikeUnlike}>
						{isLiked ? <BsHeartFill size={23} /> : <BsHeart size={23} />}
					</IconButton>
					{likes > 0 && <Typography color={"black"} component={"span"} variant="body1" fontFamily={"inherit"} marginRight={"1rem"}>
						{likes}
					</Typography>}
					<Button
						variant="contained"
						sx={{
							marginX: 1,
							backgroundColor: "white",
							borderRadius: "20px",
							textTransform: "none",
							color: "black",
							boxShadow: "none",
							border: "1px solid black",
							":hover": {
								backgroundColor: "#f8fafc",
								borderColor: "white",
							},
						}}
						onClick={() => {
							setOpen(true)
						}}
					>
						Give Answer
					</Button>
				</Box>
				<Divider />
			</Card>
		</>
	)
}

export default AnswerPost
