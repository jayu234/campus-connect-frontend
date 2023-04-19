import React from "react"
import { Grid, Box, Avatar, TextField, Button, Divider } from "@mui/material"
import { events } from "../data/events"
import { List, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material"

function EventPageLeftSidebar() {
	return (
		<>
			<Box sx={{ marginX: "1rem", marginY: "1rem", fontSize:'1.2rem', fontWeight:'500'}}> 🔥 Events in your Area </Box>
			<Divider />
			<Box>
				{events.map((qn,index) => {
					return (
						<ListItemButton
							key={index}
							sx={{ ":hover": { backgroundColor: "#E2E8F0" } }}
						>
							<ListItemText
								primary={qn.title}
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

export default EventPageLeftSidebar
