import { Card, CardContent, CardActions, CardMedia, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import { topics } from "../data/topics"

function Following() {
  const [selectedTopic, setSelectedTopic] = React.useState(null);
  const handleBtnChange = (topic) => {
    setSelectedTopic({
      ...topic,
      following: !topic.following
    })
  }
  return (
    <Grid container component={'div'} direction={'column'}>
      <Grid item >
        <Typography variant='h5' fontFamily={"inherit"} fontWeight="500">
          Following
        </Typography>
        <Grid container component={'section'} marginTop={0.75} mb={2} spacing={1} rowSpacing={2}>
          {topics.map((topic) => {
            return (
              <Grid key={topic._id} item xs={4}>
                <Card sx={{ maxWidth: 300, border: '1px solid #e2e8f0cc', borderRadius: '0.5rem', cursor: 'pointer' }}>
                  <CardMedia
                    component="img"
                    alt="Web Developement"
                    height="140"
                    image={`/images/${topic.imgName}.jpg`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" fontFamily={"inherit"}>
                      {topic.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontFamily={"inherit"}>
                      {topic.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button
                      // onClick={()=>{handleBtnChange(topic)}}
                      size="small"
                      variant='outlined'
                      // variant={selectedTopic._id === topic._id && selectedTopic.following ? 'outlined' : 'contained'}
                      sx={{ textTransform: "none", fontFamily: "inherit" }}
                    >
                      {/* {selectedTopic && selectedTopic._id === topic._id ? 'Following' : 'Follow'} */}
                      Following
                    </Button>
                    <Button size="small" sx={{ textTransform: "none", fontFamily: "inherit" }} >Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
        <Typography variant='h5' fontFamily={"inherit"} fontWeight="500">
          Suggested
        </Typography>
        <Grid container component={'section'} marginTop={0.75} mb={2} columnSpacing={2} rowSpacing={2}>
          {topics.map((topic) => {
            return (
              <Grid key={topic.label} item xs={4}>
                <Card sx={{ width: "280px", border: '1px solid #e2e8f0cc', borderRadius: '0.5rem', cursor: 'pointer' }}>
                  <CardMedia
                    component="img"
                    alt="Web Developement"
                    height="140"
                    image={`/images/${topic.imgName}.jpg`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" fontFamily={"inherit"}>
                      {topic.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontFamily={"inherit"}>
                      {topic.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant='contained' sx={{ textTransform: "none", fontFamily: "inherit" }} >Follow</Button>
                    <Button size="small" sx={{ textTransform: "none", fontFamily: "inherit" }} >Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Following