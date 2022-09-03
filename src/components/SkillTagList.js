import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

export default function MiddleDividers({ job }) {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", mb: 3 }}
    >
      {job.skills.map((jobSkill, index) => (
        <Typography key={index} component={"span"}>
          <Chip
            label={jobSkill}
            sx={{ mr: 0.5, mb: 1, borderRadius: 2 }}
            color="primary"
          />
        </Typography>
      ))}
    </Box>
  );
}
