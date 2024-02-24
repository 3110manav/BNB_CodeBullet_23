import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

function NewsCard() {

    return (
      <Paper square={false} elevation={6} sx={{borderRadius:5}}>
        <Box sx={{ display: 'flex', margin:3, borderRadius:5, }} width="650px" >
            <CardMedia
            component="img"
            
            sx={{ width: 251, borderRadius:"10px" }}
            image="https://images.news18.com/ibnlive/uploads/2021/07/1627122640_savethetiger-1200x800.png?impolicy=website&width=510&height=356"
            alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" fontWeight={600} variant="h5">
                Rare white giraffe spotted in Kenya conservation area
                </Typography>
                <Typography variant="subtitle1" color="#fb6514"  component="div">
                March 2 14:00
                </Typography>
                <Typography variant="subtitle1"   component="div">
                A rare white giraffe and her calf have been spotted at the Ishaqbini Hirola Conservancy in Kenya. The giraffes, which have a condition called leucism, lack pigmentation in their skin cells, resulting in their white appearance.
                </Typography>
            </CardContent>
            </Box>
        </Box>
      </Paper>
    );
}

export default NewsCard