import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SkillTagList from "../components/SkillTagList";
import apiService from "../app/apiService";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import { useState } from "react";
import LoadingDisplay from "../components/LoadingDisplay";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import React from "react";

const modalStyle = {
  position: "absolute",
  backgroundColor: "#FFF",
  padding: "15px",
  zIndex: "1000",
  width: "100%",
  borderRadius: 4,
};
const style = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "65%",
  backgroundColor: "#fff",
  zIndex: "1000",
  borderRadius: 4,
  overflowY: "auto",
};

function DetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    navigate(from, { replace: true });
  };

  const [jobsInfo, setJobsInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const getJobs = async () => {
        setLoading(true);
        try {
          const res = await apiService.get(`/jobs/${params.id}`);
          console.log(res);
          setJobsInfo(res.data);
          setError("");
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
        setLoading(false);
      };
      getJobs();
    }
  }, [params]);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {loading ? (
        <LoadingDisplay />
      ) : (
        <>
          {error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <>
              <Box sx={style}>
                <Box sx={modalStyle}>
                  <Typography
                    sx={{
                      fontSize: 20,
                      mb: 2,
                      borderBottom: 1,
                      textAlign: "center",
                      color: "#FC9918",
                    }}
                    gutterBottom
                  >
                    {jobsInfo.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{ mb: 1 }}
                  >
                    {jobsInfo.description}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="#ff3838"
                    sx={{ mt: 2 }}
                  >
                    Skills:
                  </Typography>

                  <SkillTagList job={jobsInfo} />

                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ mt: 2 }}
                    color="#ff3838"
                  >
                    City: {jobsInfo.city}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#ff3838",
                      mt: 1,
                    }}
                  >
                    Salary: {jobsInfo.salaryLow} - {jobsInfo.salaryHigh} VNĐ
                  </Typography>
                  <Typography sx={{ mt: 2, mb: 1, color: "#ff3838" }}>
                    Posted: {jobsInfo.postedDate}
                  </Typography>
                </Box>
              </Box>
            </>
          )}
        </>
      )}
    </Modal>
  );
}
export default DetailPage;
