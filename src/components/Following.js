import { Card, CardContent, CardActions, CardMedia, Grid, Typography, Button, CircularProgress, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getFollowing } from '../store/topicSlice';
import ReplayIcon from '@mui/icons-material/Replay';
import Alert from './Alert';

function Following() {

  const { loadUser: { data: { _id } } } = useSelector((state) => state.user);
  const { following: { data, success, isLoading, isError } } = useSelector((state) => state.topic);
  const dispatch = useDispatch();

  const [followingTopics, setFollowingTopics] = useState([]);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleFollowingBtnChange = async (topic) => {
    let newTopics;
    const oldTopics = followingTopics;
    if (topic.following) {
      newTopics = followingTopics.map((item) => (item._id === topic._id) ? { ...item, following: false } : item)
      setFollowingTopics(newTopics);
      axios.defaults.withCredentials = true
      await axios.post(`${process.env.REACT_APP_BASE_URL}/topic/follow/${topic._id}`)
        // .then(() => {
        //   newTopics = followingTopics.map((item) => (item._id === topic._id) ? { ...item, following: false } : item)
        //   setFollowingTopics(newTopics);
        // })
        .catch(() => {
          setFollowingTopics(oldTopics);
          setAlertMessage(`Failed to unfollow ${topic.label}`);
          setOpen(true);
        });
    } else {
      newTopics = followingTopics.map((item) => (item._id === topic._id) ? { ...item, following: true } : item)
      setFollowingTopics(newTopics);
      axios.defaults.withCredentials = true
      await axios.post(`${process.env.REACT_APP_BASE_URL}/topic/follow/${topic._id}`)
        // .then(() => {
        //   newTopics = followingTopics.map((item) => (item._id === topic._id) ? { ...item, following: true } : item)
        //   setFollowingTopics(newTopics);
        // })
        .catch(() => {
          setAlertMessage(`Failed to follow ${topic.label}`);
          setOpen(true);
        });
    }
  }
  // const [suggestedTopics, setSuggestedTopics] = useState(temp2);

  // const handleSuggestedTopicChange = (topic) => {
  //   let newTopics;
  //   if (topic.following) {
  //     newTopics = suggestedTopics.map((item) => (item._id === topic._id) ? { ...item, following: false } : item)
  //   } else {
  //     newTopics = suggestedTopics.map((item) => (item._id === topic._id) ? { ...item, following: true } : item)
  //   }
  //   setSuggestedTopics(newTopics);
  // }
  function _renderFollowing(isLoading, success, isError) {
    if (isLoading) {
      return (
        <Box component={'div'} mt={'1rem'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          <CircularProgress size={30} />
          <Typography>Loading...</Typography>
        </Box>
      )
    }
    else if (success) {
      return (
        <Grid container component={'section'} marginTop={0.75} mb={2} spacing={1} rowSpacing={2}>
          {followingTopics.length > 0 ? followingTopics.map((topic) => {
            return (
              <Grid key={topic._id} item xs={4}>
                <Card sx={{ maxWidth: 300, border: '1px solid #e2e8f0cc', borderRadius: '0.5rem', cursor: 'pointer', paddingBottom: '6px' }}>
                  <CardMedia
                    component="img"
                    alt={topic.hashtag + '_cover'}
                    height="140"
                    src={topic.avatar.url}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" fontFamily={"inherit"} sx={{ fontSize: '16px' }}>
                      {topic.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontFamily={"inherit"}>
                      {topic.description.slice(0, 90).concat("...")}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', justifyContent: 'space-between', paddingX: '16px' }}>
                    <Button
                      id={topic._id}
                      tabIndex={topic.index}
                      onClick={() => { handleFollowingBtnChange(topic) }}
                      size="small"
                      variant={topic.following ? 'outlined' : 'contained'}
                      // variant='outlined'
                      sx={{ textTransform: "none", fontFamily: "inherit" }}
                      disableTouchRipple
                    >
                      {topic.following ? 'Following' : 'Follow'}
                    </Button>
                    <Button size="small" disableTouchRipple sx={{ textTransform: "none", fontFamily: "inherit" }} >Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          }) :
            (
              <Grid item xs={12}>
                <Typography align="center" fontFamily={'inherit'}>You are not following any Topics.</Typography>
              </Grid>
            )}
        </Grid>)
    }
    else if (isError) {
      return (
        <Box component={'div'} mt={'1rem'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
          <Typography align='center'>Sorry, something went wrong.<br />Please refresh the page and try again.</Typography>
          <Button variant="contained" sx={{ marginTop: "0.5rem", textTransform: 'none', borderRadius: '50px' }} startIcon={<ReplayIcon fontSize='20px' />} onClick={() => { window.location.reload() }}>Refresh</Button>
        </Box>
      )
    }
  }
  useEffect(() => {
    dispatch(getFollowing(_id));
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      const temp = data?.map((item) => {
        return {
          ...item,
          following: true
        }
      })
      setFollowingTopics(temp);
    }
  }, [isLoading]);
  return (
    <>
      <Grid container component={'div'} direction={'column'}>
        <Grid item sx={{ position: 'relative' }}>
          <Typography variant='h5' fontFamily={"inherit"} fontWeight="500">
            Following
          </Typography>
          {_renderFollowing(isLoading, success, isError)}
          {/* <Typography variant='h5' fontFamily={"inherit"} fontWeight="500" sx={{marginTop:'30px'}}>
          Suggested
        </Typography>
        <Grid container component={'section'} marginTop={0.75} mb={2} columnSpacing={1} rowSpacing={2}>
          {suggestedTopics.map((topic) => {
            return (
              <Grid key={topic._id} item xs={4}>
                <Card sx={{ maxWidth: 300, border: '1px solid #e2e8f0cc', borderRadius: '0.5rem', cursor: 'pointer', paddingBottom:'6px' }}>
                  <CardMedia
                    component="img"
                    alt="Web Developement"
                    height="140"
                    image={`/images/${topic.imgName}.jpg`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" fontFamily={"inherit"} sx={{fontSize:'16px'}}>
                      {topic.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontFamily={"inherit"}>
                      {topic.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', justifyContent: 'space-between', paddingX:'16px'}}>
                    <Button
                      id={topic._id}
                      tabIndex={topic._id}
                      onClick={() => { handleSuggestedTopicChange(topic) }}
                      size="small"
                      variant={topic.following ? 'outlined' : 'contained'}
                      sx={{ textTransform: "none", fontFamily: "inherit" }}
                      disableTouchRipple
                    >
                      {topic.following ? 'Following' : 'Follow'}
                    </Button>
                    <Button size="small" sx={{ textTransform: "none", fontFamily: "inherit" }} >Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid> */}
        </Grid>
      </Grid>
      {open && <Alert message={alertMessage} severity={'error'} />}
    </>
  )
}

export default Following