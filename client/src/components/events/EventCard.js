import * as React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function EventCard() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-md overflow-hidden w-1050">
        <img
          className="h-250 w-1/3 object-cover rounded-l-md"
          src="https://images.unsplash.com/photo-1473260079709-83c808703435?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Live from space album cover"
        />
        <div className="flex flex-col p-4 w-2/3">
          <div className="font-semibold text-xl mb-2">
            Safari for Conservation
          </div>
          <div className="text-green-500 mb-2">
            <CalendarMonthIcon className="inline-block w-5 h-5 mr-2" />
            Saturday, March 15th, 2024, 10:00 AM - 2:00 PM
          </div>
          <div className="text-green-500 mb-2">
            <LocationOnIcon className="inline-block w-5 h-5 mr-2" />
            Serengeti National Park, Tanzania
          </div>
          <div>
            Embark on an unforgettable journey through the heart of the
            Serengeti as we come together to support wildlife conservation
            efforts. Our Safari for Conservation event will immerse you in the
            beauty of nature while raising vital funds to protect endangered
            species and their habitats.
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
