import React from "react";
import { styled } from "@mui/material/styles";
import { mainListItems, secondaryListItems } from "./listItems";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import { CardMedia, Card, CardContent, Grid, Typography } from "@mui/material";
import videosrch_logo from "../../assets/videosrch_logo.jpg";

import useMediaQuery from "@mui/material/useMediaQuery";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return {
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(isMobile && {
        width: "100%",
      }),
      ...(!open && {
        overflowX: "hidden",
        width: isMobile ? "0" : theme.spacing(7),
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.up("sm")]: {
          width: isMobile ? "100%" : theme.spacing(7),
        },
      }),
    },
  };
});

function SideBar(props) {
  return (
    <>
      <Drawer className="left_drawer" variant="permanent" open={props.open}>
        <Toolbar
          className="left_bar"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <Card variant="outlined" sx={{ border: "none" }}>
            <CardContent sx={{ padding: "0" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <CardMedia
                  component="img"
                  image={videosrch_logo}
                  sx={{
                    width: "30%",
                  }}
                />
                <Typography variant="body1" style={{ marginLeft: "8px" }}>
                  <b>VS</b>
                </Typography>
              </div>
            </CardContent>
          </Card>

          <IconButton onClick={props.toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems}
        </List>
      </Drawer>
    </>
  );
}

export default SideBar;
