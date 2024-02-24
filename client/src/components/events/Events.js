import React from "react";
import EventCard from "./EventCard";

function Events() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-screen h-screen">
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
}

export default Events;
