import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, CardActions, Divider } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import SkillTagList from "./SkillTagList";

// const styles = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
//   borderRadius: 2,
// };

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Card sx={{ maxWidth: 345, height: 300, position: "relative" }}>
      <CardActionArea sx={{ height: 300 }}>
        <CardContent sx={{ position: "absolute", top: 0 }}>
          <Typography gutterBottom variant="h6" component="div">
            {job.title}
          </Typography>

          <SkillTagList job={job} />

          <Divider variant="middle" sx={{ mb: 1 }} />

          <Typography variant="body2" color="text.secondary">
            {job.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div>
          <Button
            variant="contained"
            size="small"
            onClick={() => navigate(`/jobs/${job.id}`)}
            state={{ from: location }}
            to={`/jobs/${job.id}`}
          >
            Learn More
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
