import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

function NewsCard({ newItem }) {
    // console.log(newItem);
    // console.log(newItem.title);
    return (
      <Paper square={false} elevation={6} sx={{borderRadius:5}}>
        <a href={newItem.url} target="_blank">
          <Box sx={{ display: 'flex', margin:3, borderRadius:5, }} width="650px" >
              <CardMedia
              component="img"
              
              sx={{ width: 251, borderRadius:"10px" }}
              image={newItem.urlToImage}
              alt="album cover"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" fontWeight={600} variant="h5">
                  {newItem.title}
                  </Typography>
                  <Typography variant="subtitle1" color="green" fontWeight="bold"  component="div">
                  {newItem.publishedAt}
                  </Typography>
                  <Typography variant="subtitle1" color="grey"  component="div">
                  {newItem.source.name}
                  </Typography>
                  <Typography component="div">
                  {newItem.content}
                  </Typography>
              </CardContent>
              </Box>
          </Box>
        </a>
      </Paper>
    );
}

export default NewsCard