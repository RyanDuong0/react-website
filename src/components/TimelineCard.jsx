import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";
import React from "react";

const TimelineCard = ({darkMode}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color={darkMode ? "dark-mode" : "light-mode"}
      >
        9:00 AM
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          <FreeBreakfastIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography>Eat Breakfast</Typography>
        <Typography color={darkMode ? "dark-mode" : "light-mode"}>Eggs and Bacon</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineCard;
