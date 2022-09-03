import React from "react";
import JobCard from "../components/JobCard";
import Grid from "@mui/material/Grid";
import Pagination from "../components/Pagination";
import data from "../data.json";

function App() {
  return (
    <div>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {data.map((job) => (
          <Grid item xs={12} md={3}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Pagination />
    </div>
  );
}

export default App;
