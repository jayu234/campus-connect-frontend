import React from "react"
import { Grid, Box, Divider } from "@mui/material"
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone"
import PlaceTwoToneIcon from "@mui/icons-material/PlaceTwoTone"
import WorkspacePremiumTwoToneIcon from "@mui/icons-material/WorkspacePremiumTwoTone"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
import Link from "@mui/material/Link"
import { skills } from "../data/skills"

function ProfileLeftSidebar() {
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
							src="/images/z1.jpg"
							alt="Welcome to our website"
						/>
					</Grid>
					<Grid item xs={7.5} sx={{ marginTop: "0.3rem" }}>
						<Box>
							<strong>Kashyap Bavadiya</strong>
						</Box>
						<Box sx={{ fontSize: "14px" }}>kashyapmb</Box>
					</Grid>
				</Grid>
				<Box
					sx={{
						marginTop: "0.6rem",
						marginLeft: "0.1rem",
						fontSize: "14px",
						lineHeight: "24px",
					}}
				>
					Hi, I am a Third Year Information Technology undergraduate student at
					Birla Vishvakarma Mahavidyalaya.]
				</Box>
				<Box sx={{ fontSize: "13px" }}>
					<Box
						sx={{ marginTop: "0.6rem", display: "flex", alignItems: "center" }}
					>
						<WorkspacePremiumTwoToneIcon
							sx={{ color: "blue", fontSize: "1.3rem" }}
						/>
						<Box sx={{ marginLeft: "0.3rem" }}>
							BTech - Information Technology
						</Box>
					</Box>
					<Box
						sx={{ marginTop: "0.6rem", display: "flex", alignItems: "center" }}
					>
						<SchoolTwoToneIcon sx={{ color: "blue", fontSize: "1.3rem" }} />
						<Box sx={{ marginLeft: "0.3rem" }}>
							Birla Vishvarkarma Mahavidyalay
						</Box>
					</Box>
					<Box
						sx={{ marginTop: "0.6rem", display: "flex", alignItems: "center" }}
					>
						<PlaceTwoToneIcon sx={{ color: "blue", fontSize: "1.3rem" }} />
						<Box sx={{ marginLeft: "0.3rem" }}>Anand, gujarat</Box>
					</Box>
				</Box>

				{/* <Divider orientation="horizontal" flexItem sx={{ marginY: "1rem" }} /> */}
				<Box sx={{ marginTop: "1.5rem" }}>
					<Box>
						<strong>Links</strong>
					</Box>
					<Box sx={{ fontSize: "13px", paddingLeft: "0.2rem" }}>
						<Box
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
						</Box>
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
							<FaInstagram size={16} />
							<Link
								href="https://www.instagram.com/kashyapbavadiya/"
								underline="hover"
								sx={{ color: "black", marginLeft: "0.4rem" }}
							>
								{"kashyapbavadiya"}
							</Link>
						</Box>
					</Box>
				</Box>

				{/* <Divider orientation="horizontal" flexItem sx={{ marginY: "1rem" }} /> */}
				<Box sx={{ marginTop: "1.5rem" }}>
					<Box>
						<strong>Skills</strong>
					</Box>
					<Box sx={{ marginTop: "0.5rem", paddingLeft:'0.3rem', lineHeight:'1.3rem' }}>
						{skills.map((item) => {
							return (
								<Box
									sx={{
										fontSize: "14px",
										backgroundColor: "#f8fafc",
									}}
								>
									{item.skill}
								</Box>
							)
						})}
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default ProfileLeftSidebar
