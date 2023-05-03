import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Divider } from '@mui/material';
import { Box } from '@mui/system';
import { BsHeart } from "react-icons/bs"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function PostItem({ post }) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	}

	const date = new Date(post.createdAt);
	return (
		<Card
			sx={{
				marginTop: "0.2rem",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				boxShadow: "none",
			}}
		>
			<CardHeader
				avatar={
					<Avatar
						src={post.author.avatar.url}
						aria-label="recipe"
						sx={{ width: "3rem", height: "3rem" }}
					/>
				}
				title={post.author.firstName + " " + post.author.lastName}
				subheader={`${post.author.username} ~ ${months[date.getMonth()]
					} ${date.getDate()}, ${date.getFullYear()}`}
				sx={{ padding: "1rem 1.5rem 0.7rem 1.5rem" }}
				subheaderTypographyProps={{ fontFamily: "inherit", fontSize: "0.9rem" }}
				titleTypographyProps={{
					fontFamily: "inherit",
					fontSize: "1.2rem",
					fontWeight: "500",
				}}
			/>
			<CardContent sx={{ padding: "0rem 1.5rem" }}>
				<Typography
					variant="h5"
					sx={{ fontFamily: "inherit", fontWeight: "500" }}
				>
					{post.title}
				</Typography>
				<Typography
					variant="body1"
					color="text.secondary"
					sx={{ fontFamily: "inherit", textAlign: "justify" }}
				>
					{post.content}
				</Typography>
			</CardContent>
			{post.images.length > 0 && <Box
				component="img"
				sx={{
					marginBottom: "0rem",
					marginTop: "1rem",
					height: 500,
					width: 1000,
					maxHeight: { xs: 400, md: 1000 },
					maxWidth: { xs: 400, md: 862 },
				}}
				alt="The house from the offer."
				src={post.images[0].url}
			/>}
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
						{post.likes.length > 0 && post.likes.length}
					</Button>
				</Box>
			</CardActions>
			<Divider />
		</Card>
	);
}
