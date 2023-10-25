import React from "react";
import { Typography, Card, Grid, CardContent, Box } from "@mui/material";
import BarsDataset from "../components/charts/BarChart";
import PieActiveArc from "../components/charts/PieChart";
import Title from "../components/Title";
import BasicLineChart from "../components/charts/LineChart";
import PieChartWithCustomizedLabel from "../components/charts/PieChartLabled";

function Dashboard() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        {/* card1 */}
        <Card
          variant="outlined"
          style={{
            backgroundColor: "#FFFFFF", // White background
            borderTop: "4px solid #48CFAD", // Top border in green
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            borderRadius: "8px", // Rounded corners
          }}
        >
          <CardContent>
            <Typography
              variant="subtitle2"
              style={{
                color: "#333", // Dark gray title color
                fontSize: "18px",
              }}
            >
              No of queries
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Typography
                variant="h4"
                style={{
                  color: "#48CFAD", // green
                  fontSize: "32px",
                  fontWeight: "bold",
                }}
              >
                10,011
              </Typography>
            </Box>
          </CardContent>
        </Card>
        {/* card2 */}
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          variant="outlined"
          style={{
            backgroundColor: "#FFFFFF", // White background
            borderTop: "4px solid #FED730", // Top border in yellow
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            borderRadius: "8px", // Rounded corners
          }}
        >
          <CardContent>
            <Typography
              variant="subtitle2"
              style={{
                color: "#333", // Dark gray title color
                fontSize: "18px",
              }}
            >
              No. of queries answered
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Typography
                variant="h4"
                style={{
                  color: "#FED330", // Dark yellow
                  fontSize: "32px",
                  fontWeight: "bold",
                }}
              >
                9899
              </Typography>
            </Box>
          </CardContent>
        </Card>
        {/* card3 */}
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          variant="outlined"
          style={{
            backgroundColor: "#FFFFFF", // White background
            borderTop: "4px solid #FA8231", // Top border in orange
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            borderRadius: "8px", // Rounded corners
          }}
        >
          <CardContent>
            <Typography
              variant="subtitle2"
              style={{
                color: "#333", // Dark gray title color
                fontSize: "18px",
              }}
            >
              No. of queries unanswered
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Typography
                variant="h4"
                style={{
                  color: "#FA8231", // orange
                  fontSize: "32px",
                  fontWeight: "bold",
                }}
              >
                221
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      {/* card4 */}
      <Grid item xs={12} md={3}>
        <Card
          variant="outlined"
          style={{
            backgroundColor: "#FFFFFF", // White background
            borderTop: "4px solid #4FC1E9", // Top border in Dark Royal Blue
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            borderRadius: "8px", // Rounded corners
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.05)",
            }, // Zoom-in effect on hover
          }}
        >
          <CardContent>
            <Typography
              variant="subtitle2"
              style={{
                color: "#333", // Dark gray title color
                fontSize: "18px",
              }}
            >
              Videos Uploaded
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Typography
                variant="h4"
                style={{
                  color: "#4FC1E9", // Dark Royal Blue number color
                  fontSize: "32px",
                  fontWeight: "bold",
                }}
              >
                789
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      
      
          {/* Graph starts */}
   
      <Grid item xs={12} sm={8}>
        <Card
          sx={{
            padding: "16px",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Title color="primary">Top cities</Title>
          <BarsDataset />
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card
          sx={{
            padding: "16px",
            borderRadius: "10px",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Title color="primary">Grouped</Title>
          <PieChartWithCustomizedLabel />
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card
          sx={{
            padding: "16px",
            borderRadius: "10px",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Title color="primary">Series</Title>
          <PieActiveArc />
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card
          sx={{
            padding: "16px",
            borderRadius: "10px",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Title color="primary">Flow</Title>
          <BasicLineChart />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
