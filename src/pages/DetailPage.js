import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import SkillTagList from "../components/SkillTagList";

function DetailPage() {
  const params = useParams();
  const jobId = params.id;
  const job = data.find((job) => job.id.toString() === jobId);
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography gutterBottom variant="h4" component="div" sx={{ mt: 2 }}>
        {job.title}
      </Typography>
      <Divider variant="inset" sx={{ mb: 1 }} />
      <Typography variant="body2" color="text.primary" sx={{ mb: 1 }}>
        {job.description}
      </Typography>

      <Typography gutterBottom variant="h5" component="div" sx={{ mt: 2 }}>
        Skills
      </Typography>

      <SkillTagList job={job} />

      <Typography gutterBottom variant="h5" component="div" sx={{ mt: 2 }}>
        City: {job.city}
      </Typography>
    </Container>
  );
}
export default DetailPage;
