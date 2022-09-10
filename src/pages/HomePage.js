import React from "react";
import JobPage from "../components/JobPage";
import { Alert, Container } from "@mui/material";
import { useEffect, useState } from "react";
import apiService from "../app/apiService";
import LoadingDisplay from "../components/LoadingDisplay";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [jobs, setJobs] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiService.get("/jobs");
        // console.log(response);
        setJobs(response.data);
        setError("");
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Container sx={{ mt: 3 }}>
      {loading ? (
        <LoadingDisplay />
      ) : (
        <>
          {error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <JobPage jobs={jobs}></JobPage>
          )}
        </>
      )}
    </Container>
  );
}

export default HomePage;
