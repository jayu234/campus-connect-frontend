import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography, Divider } from '@mui/material'
import React from 'react'
import { posts } from '../data/posts'

function RightSidebar() {
  const events = posts.filter((item) => item.tags.includes("event") || item.tags.includes("competition"))
  return (
    <Box sx={{ backgroundColor: '#fff', border: '1px solid #e2e8f0cc', borderRadius: "0.5rem", paddingY: "0.5rem", paddingX: "1rem" }}>
      <Typography variant='h6' fontFamily="inherit" fontWeight={600}>Events & Competition</Typography>
      <Box>
        <List>
          {/* {events.map((item) => {
            return (
              <div key={item._id}>
                <ListItem sx={{cursor: "pointer", marginY: "0.5rem", borderRadius: "10px",":hover": { backgroundColor: "#E2E8F0" }}}>
                  <ListItemAvatar><Avatar src='/images/event.jpg' sx={{ width: 34, height: 34, borderRadius: "6px" }} /></ListItemAvatar>
                  <ListItemText primary={item.title} primaryTypographyProps={{ fontFamily: "inherit" }} />
                </ListItem>
              </div>
            )
          })} */}
          <ListItem sx={{ cursor: "pointer", marginY: "0.5rem", borderRadius: "10px", ":hover": { backgroundColor: "#E2E8F0" } }}>
            <ListItemAvatar><Avatar src='/images/event1.jpg' sx={{ width: 34, height: 34, borderRadius: "6px" }} /></ListItemAvatar>
            <ListItemText primary={"Udaan - BVM Cultural Festival"} primaryTypographyProps={{ fontFamily: "inherit" }} />
          </ListItem>
          <Divider/>
          <ListItem sx={{ cursor: "pointer", marginY: "0.5rem", borderRadius: "10px", ":hover": { backgroundColor: "#E2E8F0" } }}>
            <ListItemAvatar><Avatar src='/images/event2.jpg' sx={{ width: 34, height: 34, borderRadius: "6px" }} /></ListItemAvatar>
            <ListItemText primary={"CodeRatri"} primaryTypographyProps={{ fontFamily: "inherit" }} />
          </ListItem>
          <Divider/>
          <ListItem sx={{ cursor: "pointer", marginY: "0.5rem", borderRadius: "10px", ":hover": { backgroundColor: "#E2E8F0" } }}>
            <ListItemAvatar><Avatar src='/images/event3.jpg' sx={{ width: 34, height: 34, borderRadius: "6px" }} /></ListItemAvatar>
            <ListItemText primary={"Genisis - BVM Tech Festival"} primaryTypographyProps={{ fontFamily: "inherit" }} />
          </ListItem>
          <Divider/>
          <ListItem sx={{ cursor: "pointer", marginY: "0.5rem", borderRadius: "10px", ":hover": { backgroundColor: "#E2E8F0" } }}>
            <ListItemAvatar><Avatar src='/images/event1.jpg' sx={{ width: 34, height: 34, borderRadius: "6px" }} /></ListItemAvatar>
            <ListItemText primary={"Spectrum - ADIT Annual Fest"} primaryTypographyProps={{ fontFamily: "inherit" }} />
          </ListItem>
        </List>
      </Box>
    </Box >
  )
}

export default RightSidebar