import React from "react";
import EventCard from "./EventCard";
import events from '../../constant/campaing.json'

function Events() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-10 mb-10">
      {events.map(event=>(
        <EventCard event={event}/>
      ))}
    </div>
  );
}

export default Events;
