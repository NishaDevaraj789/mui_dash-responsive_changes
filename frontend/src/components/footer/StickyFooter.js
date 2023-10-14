import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Copyright from "./Copyright";

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#cfd8dc" : theme.palette.grey[800],
        position: "fixed", // Make the footer fixed
        bottom: 0, // Stick it to the bottom of the viewport
        width: "100%", // Occupy the full width
        height: "30px",
        padding:"6px",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} sx={{ height: "30px" }}>
            {/* <Grid item xs={4}>
              <Logo isLight={false} />
            </Grid>
            <Divider
              sx={{ px: 2, margin: "16px auto" }}
              orientation="vertical"
              variant="middle"
              flexItem
            /> */}
            <Grid xs={7.5} sx={{ margin: "auto", paddingTop: "0px" }}>
              <Copyright />
              {/* <FooterData /> */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
