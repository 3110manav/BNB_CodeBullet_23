import React from "react";
import EventCard from "./EventCard";

function Events() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-10 mb-10">
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
}

export default Events;
