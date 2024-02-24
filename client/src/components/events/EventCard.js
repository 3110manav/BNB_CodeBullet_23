import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function EventCard() {

    return (
      <Paper square={false} elevation={6} sx={{borderRadius:5}} >
        <Box sx={{ display: 'flex', margin:3, borderRadius:5, }} width="1050px" >
            <CardMedia
            component="img"
            
            sx={{ height: 250, borderRadius:"10px" }}
            image="https://images.unsplash.com/photo-1473260079709-83c808703435?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" fontWeight={600} variant="h5">
                Safari for Conservation
                </Typography>
                <Typography variant="subtitle1" color="#19ce26"  component="div">
                <CalendarMonthIcon/>Saturday, March 15th, 2024, 10:00 AM - 2:00 PM
                </Typography>
                <Typography variant="subtitle1" color="#19ce26"  component="div">
                <LocationOnIcon/>Serengeti National Park, Tanzania
                </Typography>
                <Typography variant="subtitle1"   component="div">
                Embark on an unforgettable journey through the heart of the Serengeti as we come together to support wildlife conservation efforts. Our Safari for Conservation event will immerse you in the beauty of nature while raising vital funds to protect endangered species and their habitats.
                </Typography>
            </CardContent>
            </Box>
        </Box>
      </Paper>
    );
}

export default EventCard