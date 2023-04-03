import React from "react"
import { Grid, Box, Avatar, TextField, Button, Divider } from "@mui/material"
import { relatedquestions } from "../data/relatedquestions"
import { List, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material"

function AnswerPageLeftSidebar() {
	return (
		<>
			<Box sx={{ marginX: "1rem", marginY: "1rem" }}> 🔥 Related Question</Box>
			<Divider />
			<Box>
				{relatedquestions.map((qn,index) => {
					return (
						<ListItemButton
							key={index}
							sx={{ ":hover": { backgroundColor: "#E2E8F0" } }}
						>
							<ListItemText
								primary={qn.question}
								sx={{ fontSize: "14px" }}
								primaryTypographyProps={{ fontFamily: "inherit" }}
							/>
						</ListItemButton>
					)
				})}
			</Box>
		</>
	)
}

export default AnswerPageLeftSidebar
