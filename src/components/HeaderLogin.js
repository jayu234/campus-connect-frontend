import React from "react"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"

export const HeaderLogin = () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "row",
					alignItems: "center",
					backgroundColor: "white",
					paddingY:'1rem',
				}}
			>
				<Box>
					<Typography
						component={"img"}
						src="/images/logo1.png"
						href="/"
						width={"30px"}
						sx={{
							cursor: "pointer",
							marginRight: "0.3rem",
							textAlign: "center",
							display: "flex",
							alignItems: "center",
							userSelect: "none",
						}}
					/>
				</Box>
				<Box>
					<Typography
						component={"a"}
						href="/"
						sx={{
							backgroundColor: "#fff",
							color: "black",
							fontSize: "1.6rem",
							textAlign: "center",
							marginRight: "1.8rem",
							fontFamily: "'Inter', sans-serif",
							fontWeight: "600",
							cursor: "pointer",
							textDecoration: "none",
							userSelect: "none",
						}}
					>
						CampusConnect
					</Typography>
				</Box>
			</Box>
		</>
	)
}
