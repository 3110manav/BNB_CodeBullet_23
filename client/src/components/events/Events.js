import React from "react";
import EventCard from "./EventCard";

function Events() {
  return(
    <div style={{display:'flex', flexDirection:"column", alignItems:"center",  justifyContent:"center", width:1200, gap:20}} >
      <EventCard/>
      <EventCard/>
      <EventCard/>
    </div>
  )
}


export default Events