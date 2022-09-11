import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import JobCard from "./JobCard";

function JobPage({ jobs }) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  console.log(setLimit);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const pageCount = Math.ceil(jobs.length / limit);
  return (
    <div>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {jobs &&
          jobs.slice((page - 1) * limit, page * limit).map((job) => (
            <Grid item xs={12} md={3}>
              <JobCard key={job.id} job={job} />
            </Grid>
          ))}
      </Grid>
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
          mb: 2,
        }}
      >
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </div>
  );
}

export default JobPage;
