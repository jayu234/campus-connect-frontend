import React from "react"
import Header from "./Header"
import ProfileLeftSidebar from "./ProfileLeftSidebar"
import ProfileRightSidebar from "./ProfileRightSidebar"
import { Grid, Box } from "@mui/material"
import AnswerPageLeftSidebar from "./AnswerPageLeftSidebar"
import AnswerPageRightSidebar from "./AnswerPageRightSidebar"

function AnswerPage() {
	return (
		<>
			<Header />
			<Grid
				container
				spacing={2}
				sx={{
					height: "100%",
					display: "flex",
					backgroundColor: "#f8fafc",
				}}
			>
				<Grid item component={"aside"} xs={3.5} sx={{ marginLeft: "3rem" }}>
					<Box
						sx={{
							position: "sticky",
							top: "20px",
							backgroundColor: "white",
							borderRadius: "1rem",
							border: "1px solid #e2e8f0cc",
							":hover": { borderColor: "#c9c9c9" },
						}}
					>
						<AnswerPageLeftSidebar />
					</Box>
				</Grid>
				<Grid item xs={7}>
					<Box>
						<AnswerPageRightSidebar />
					</Box>
				</Grid>
			</Grid>
		</>
	)
}

export default AnswerPage
