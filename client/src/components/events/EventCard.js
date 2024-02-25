import * as React from "react";
import { Button, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function EventCard({ event }) {

    return (
      <Paper square={false} elevation={6} sx={{borderRadius:5, width:1000}}>
        <div className="flex bg-white shadow-lg rounded-md overflow-hidden">
            <img
            className="h-250 w-1/3 object-cover rounded-l-md"
            src="https://images.unsplash.com/photo-1473260079709-83c808703435?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Live from space album cover"
            />
            <div className="flex flex-col p-4 w-2/3">
            <div className="font-semibold text-xl mb-2">{event.eventName}</div>
            <div className="text-green-500 mb-2">
                <CalendarMonthIcon className="inline-block w-5 h-5 mr-2" />
                {event.date}, {event.time}
            </div>
            <div className="text-green-500 mb-2">
                <LocationOnIcon className="inline-block w-5 h-5 mr-2" />
                {event.location}
            </div>
            <div>
                {event.eventDetails}
            </div>
            <div style={{marginTop:10}}>
                <Button style={{ textTransform:"none" }} color="success" variant="contained">Register for Campaign</Button>
                <Button style={{ textTransform:"none", marginLeft:20 }} color="success" variant="outlined">View Details</Button>
            </div>
            </div>
        </div>
      </Paper>

    );
}

export default EventCard;
