import React, { useEffect, useState } from "react"
import { Typography, Button, CircularProgress} from "@mui/material"
import ReplayIcon from '@mui/icons-material/Replay';
import { Box } from "@mui/system"
import AnswerPost from "./AnswerPost"
import { useDispatch, useSelector } from "react-redux"
import { getRelatedDoubts } from "../store/doubtSlice"


function Answer() {
	const dispatch = useDispatch();
	const { relatedDoubts: { data, isLoading, success, isError } } = useSelector((state) => state.doubt);
	const [content, setContent] = useState([]);

	useEffect(() => {
		dispatch(getRelatedDoubts())
	}, [dispatch])

	useEffect(() => {
		if(success){
			setContent(data);
		}
	}, [isLoading])
	return (
		<>
			<Typography variant="h5" fontFamily={"inherit"} fontWeight="500">
				Questions for you
			</Typography>
			{_renderContent(isLoading, success, isError, content)}
		</>
	)
}
export default Answer

function _renderContent(isLoading, success, isError, data) {
	if (isLoading) {
		return (
			<Box component={'div'} mt={'1rem'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} marginTop={2}>
				<CircularProgress size={30} />
				<Typography>Loading...</Typography>
			</Box>
		)
	}
	else if (success) {
		return (
			<React.Fragment>
				{data.length > 0 ? data.map((item) => {
					return (
						<AnswerPost item={item} />
					)
				}): (
					<Typography align="center" fontFamily={'inherit'} mt={4}>
						No data to display.
					</Typography>
				)}
			</React.Fragment>
		)
	}
	else if (isError) {
		<Box component={'div'} mt={'1rem'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
			<Typography align='center'>Sorry, something went wrong.<br />Please refresh the page and try again.</Typography>
			<Button variant="contained" sx={{ marginTop: "0.5rem", textTransform: 'none', borderRadius: '50px' }} startIcon={<ReplayIcon fontSize='20px' />} onClick={() => { window.location.reload() }}>Refresh</Button>
		</Box>
	}
}