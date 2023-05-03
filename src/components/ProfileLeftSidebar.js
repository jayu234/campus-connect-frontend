import React from "react"
import { Grid, Box, Divider, Typography, Button } from "@mui/material"
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone"
import PlaceTwoToneIcon from "@mui/icons-material/PlaceTwoTone"
import WorkspacePremiumTwoToneIcon from "@mui/icons-material/WorkspacePremiumTwoTone"
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
import Link from "@mui/material/Link"
import { skills } from "../data/skills"
import { useSelector } from "react-redux"

function ProfileLeftSidebar() {
	const { loadUser: { data: { avatar, city, username, firstName, lastName, college, course, skills } } } = useSelector((state) => state.user);
	return (
		<>
			<Box sx={{ paddingX: "1rem", paddingTop: "1rem", paddingBottom: "1rem" }}>
				<Grid container>
					<Grid item component={"aside"} xs={4.5}>
						<img
							style={{
								width: "5.5rem",
								height: "5.5rem",
								borderRadius: "1rem",
							}}
							src={avatar.url}
							alt={"user_profile_avatar"}
						/>
					</Grid>
					<Grid item xs={7.5} sx={{ marginTop: "0.3rem" }}>
						<Box>
							<strong>{firstName + " " + lastName}</strong>
						</Box>
						<Box sx={{ fontSize: "14px" }}>{username}</Box>
					</Grid>
				</Grid>
				{/* {bio.length > 0 && <Box
					sx={{
						marginTop: "0.6rem",
						marginLeft: "0.1rem",
						fontSize: "14px",
						lineHeight: "24px",
					}}
				>
					{bio}
				</Box>} */}
				<Box sx={{ fontSize: "13px" }}>
					<Box
						sx={{ marginTop: "0.6rem", display: "flex", alignItems: "center" }}
					>
						<SchoolTwoToneIcon sx={{ color: "blue", fontSize: "1.3rem" }} />
						<Box sx={{ marginLeft: "0.3rem" }}>
							{college}
						</Box>
					</Box>
					<Box
						sx={{ marginTop: "0.6rem", display: "flex", alignItems: "center" }}
					>
						<WorkspacePremiumTwoToneIcon
							sx={{ color: "blue", fontSize: "1.3rem" }}
						/>
						<Box sx={{ marginLeft: "0.3rem" }}>
							{course}
						</Box>
					</Box>
					<Box
						sx={{ marginTop: "0.6rem", display: "flex", alignItems: "center" }}
					>
						<PlaceTwoToneIcon sx={{ color: "blue", fontSize: "1.3rem" }} />
						<Box sx={{ marginLeft: "0.3rem" }}>{city.label}</Box>
					</Box>
				</Box>

				{/* <Divider orientation="horizontal" flexItem sx={{ marginY: "1rem" }} /> */}
				<Box sx={{ marginTop: "1.5rem" }}>
					<Box>
						<strong>Links</strong>
					</Box>
					<Box sx={{ fontSize: "13px", paddingLeft: "0.2rem" }}>
						{<Box
							sx={{
								marginTop: "0.7rem",
								display: "flex",
								alignItems: "center",
							}}
						>
							<BsGithub size={16} />
							<Link
								href="https://github.com/kashyapmb"
								underline="hover"
								sx={{ color: "black", marginLeft: "0.4rem" }}
							>
								{"kashyapmb"}
							</Link>
						</Box>}
						<Box
							sx={{
								marginTop: "1rem",
								display: "flex",
								alignItems: "center",
							}}
						>
							<BsLinkedin size={16} />
							<Link
								href="https://www.linkedin.com/in/kashyap-bavadiya-0485a2236/"
								underline="hover"
								sx={{ color: "black", marginLeft: "0.4rem" }}
							>
								{"kashyap-bavadiya-0485a2236"}
							</Link>
						</Box>
						<Box
							sx={{
								marginTop: "1rem",
								display: "flex",
								alignItems: "center",
							}}
						>
							<BsTwitter size={16} />
							<Link
								href="https://www.instagram.com/kashyapbavadiya/"
								underline="hover"
								sx={{ color: "black", marginLeft: "0.4rem" }}
							>
								{"kashyapbavadiya"}
							</Link>
						</Box>
					</Box>
					{/* <Box mt={2} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
						<Typography variant="caption" align="center" fontFamily={'inherit'}>You haven't added any links to your profile</Typography>
						<Button variant="text" sx={{marginTop: "0.25rem",paddingY: "0.10rem" , fontSize: "0.75rem" ,textTransform: 'none'}}>+ Add one</Button>
					</Box> */}
				</Box>

				{/* <Divider orientation="horizontal" flexItem sx={{ marginY: "1rem" }} /> */}
				<Box sx={{ marginTop: "1.5rem" }}>
					<Box>
						<strong>Skills</strong>
					</Box>
					<Box sx={{ marginTop: "0.5rem", paddingLeft: '0.3rem', lineHeight: '1.3rem' }}>
						{skills.map((item) => {
							return (
								<Typography fontFamily={'inherit'} fontSize={'14px'}>
									{item}
								</Typography>
							)
						})}
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default ProfileLeftSidebar
