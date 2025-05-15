import { Timeline as MuiTimeline } from "@mui/lab"; // Renamed to avoid conflict
import React from "react";
import TimelineCard from "./TimelineCard";

const TimelineStructure = () => {
  return (
    <MuiTimeline position="alternate">
      <TimelineCard />
    </MuiTimeline>
  );
};

export default TimelineStructure;
