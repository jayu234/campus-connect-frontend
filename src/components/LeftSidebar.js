import React from "react"
import { List, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material"
import { topics } from "../data/topics"

function LeftSidebar() {
  return (
    <List sx={{border: '1px solid #e2e8f0cc', borderRadius: "0.5rem", backgroundColor: '#fff', marginBottom: "2rem" }}>
      <React.Fragment>
        {topics.map((item) => {
          return (
            <ListItemButton key={item.label} sx={{ ":hover": { backgroundColor: "#E2E8F0" } }}>
              <ListItemIcon sx={{ minWidth: 'auto', marginRight: '1rem' }}>
                <img alt="" src={`/images/${item.imgName}.jpg`} width='30px' height='30px' style={{ borderRadius: '20px' }} />
              </ListItemIcon>
              <ListItemText primary={item.label} sx={{ fontSize: '14px' }} primaryTypographyProps={{ fontFamily: "inherit" }} />
            </ListItemButton>
          )
        })}
      </React.Fragment>
    </List>
  )
}

export default LeftSidebar
