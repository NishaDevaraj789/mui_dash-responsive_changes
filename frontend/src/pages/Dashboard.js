import React from "react";
import { Typography, Tooltip, Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function Dashboard() {
  const gradient1 = "linear-gradient(135deg, #f25022, #FF5733)";
  const gradient2 = "linear-gradient(135deg, #00FF00, #33FF77)";
  const gradient3 = "linear-gradient(135deg, #0074cc, #33a6e2)";

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Tooltip title="No of Queries" arrow placement="top">
          <Card
            sx={{
              backgroundImage: gradient1,
              color: "#fff",
              padding: "16px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
              height: "100px", // Set the height to 100 pixels
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end", // Align content to the end
              background: "rgba(255, 215, 0, 0.5)", // Semi-transparent background
            }}
          >
            <Link to="/card1" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h6" style={{ fontWeight: "bold", fontSize: "12px" }}> {/* Smaller word size */}
                No of Queries
              </Typography>
            </Link>
            <Typography variant="body2" style={{ fontSize: "18px", fontWeight: "bold" }}>
              1234
            </Typography>
            <MailOutlineIcon color="primary" style={{ fontSize: "30px" }} />
          </Card>
        </Tooltip>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Tooltip title="No of Queries Answered" arrow placement="top">
          <Card
            sx={{
              backgroundImage: gradient2,
              color: "#fff",
              padding: "16px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
              height: "100px", // Set the height to 100 pixels
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end", // Align content to the end
              background: "rgba(0, 255, 0, 0.5)", // Semi-transparent background
            }}
          >
            <Link to="/card2" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h6" style={{ fontWeight: "bold", fontSize: "12px" }}>
                No of Queries Answered
              </Typography>
            </Link>
            <Typography variant="body2" style={{ fontSize: "18px", fontWeight: "bold" }}>
              5678
            </Typography>
            <CheckCircleIcon color="success" style={{ fontSize: "30px" }} />
          </Card>
        </Tooltip>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Tooltip title="No of Queries Unanswered" arrow placement="top">
          <Card
            sx={{
              backgroundImage: gradient3,
              color: "#fff",
              padding: "16px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.05)",
              },
              height: "100px", // Set the height to 100 pixels
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end", // Align content to the end
              background: "rgba(0, 116, 204, 0.5)", // Semi-transparent background
            }}
          >
            <Link to="/card3" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h6" style={{ fontWeight: "bold", fontSize: "12px" }}>
                No of Queries Unanswered
              </Typography>
            </Link>
            <Typography variant="body2" style={{ fontSize: "18px", fontWeight: "bold" }}>
              9876
            </Typography>
            <CancelIcon color="error" style={{ fontSize: "30px" }} />
          </Card>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
