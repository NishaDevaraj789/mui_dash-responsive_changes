import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useSubmit, useRouteLoaderData } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import digi_logo from "../../assets/digi_logo.png";
import Person2Icon from "@mui/icons-material/Person2";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CenteredImage = styled("img")({
  display: "block",
  margin: "0 auto",
  maxWidth: "100%",
  height: "auto", // Maintain the aspect ratio
});

function NavBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const submit = useSubmit();
  const token = useRouteLoaderData("root");
  var decoded = jwt_decode(token);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (type) => {
    setAnchorEl(null);

    if (type === "logout") {
      submit(null, { action: "/logout", method: "POST" });
    }
  };

  return (
    <>
      <AppBar position="absolute" open={props.open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open sidebar"
            onClick={props.toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(props.open && { display: "none" }),
            }}
          >
            {props.open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>

          <Typography
            component="div"
            variant="h5"
            color="inherit"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
          > VideoSrch
            <CenteredImage
              src={digi_logo}
              alt="Digital Logo"
              className="digi_logo"
            />
          </Typography>

          <div
            style={{ position: "relative", cursor: "pointer" }}
            onMouseEnter={handleMenu}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to={`/${decoded.id}`} style={{ textDecoration: "none" }}>
                <ListItem button onClick={handleClose}>
                  <ListItemIcon>
                    <Person2Icon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>
              </Link>

              <ListItem button onClick={() => handleClose("logout")}>
                <ListItemIcon>
                  <PowerSettingsNewIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
