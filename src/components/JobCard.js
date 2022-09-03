import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SkillTagList from "./SkillTagList";
import { useState } from "react";
import { CardActionArea, Button, CardActions, Divider } from "@mui/material";
import Modal from "@mui/material/Modal";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 2,
};

export default function JobCard({ job }) {
  const [open, setOpen] = useState("");
  const handleOpen = (job) => {
    setOpen(job);
  };
  const handleClose = () => {
    setOpen();
  };

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
            onClick={() => handleOpen(job)}
            variant="contained"
            size="small"
          >
            Learn More
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box
              sx={{
                ...styles,
                width: 500,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ mt: 2 }}
              >
                {job.title}
              </Typography>

              <Divider variant="middle" sx={{ mb: 1 }} />

              <Typography variant="body2" color="text.primary" sx={{ mb: 1 }}>
                {job.description}
              </Typography>

              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mt: 2 }}
              >
                Skills
              </Typography>

              <SkillTagList job={job} />

              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mt: 2 }}
              >
                City: {job.city}
              </Typography>
            </Box>
          </Modal>
        </div>
      </CardActions>
    </Card>
  );
}
