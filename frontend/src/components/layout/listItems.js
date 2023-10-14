import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LanguageIcon from "@mui/icons-material/Language";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Tooltip } from "@mui/material";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search"; // Import the Search icon

export const mainListItems = (
  <React.Fragment>
  
    <NavLink to="/">
      <ListItemButton>
        <ListItemIcon>
          <Tooltip title="Video Search" placement="right" arrow>
            <UploadFileIcon />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Upload" color="primary" />
      </ListItemButton>
    </NavLink>
    <NavLink to="/searchpage">
      <ListItemButton>
        <ListItemIcon>
          <Tooltip title="Search" placement="right" arrow>
            <SearchIcon />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Search"  />
      </ListItemButton>
    </NavLink>
    <NavLink to="/dash-board">
      <ListItemButton>
        <ListItemIcon>
          <Tooltip title="Dashboard" placement="right" arrow>
            <DashboardIcon />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Dashboard"  />
      </ListItemButton>
    </NavLink>
   
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Help
    </ListSubheader> */}
    <NavLink to="/about-us">
      <ListItemButton>
        <ListItemIcon>
          <Tooltip title="About Us" placement="right" arrow>
            <LanguageIcon />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </ListItemButton>
    </NavLink>
    <NavLink to="/settings">
      <ListItemButton>
        <ListItemIcon>
          <Tooltip title="App Settings" placement="right" arrow>
            <AdminPanelSettingsIcon />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="App Settings" />
      </ListItemButton>
    </NavLink>
    <NavLink to="/users">
      <ListItemButton>
        <ListItemIcon>
          <Tooltip title="Users" placement="right" arrow>
            <PeopleAltIcon />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
    </NavLink>
  </React.Fragment>
);
