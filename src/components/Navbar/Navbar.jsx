/** @format */

import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./_navbar.css";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { CiWallet } from "react-icons/ci";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdOutlineInsertChart } from "react-icons/md";
import { BiSolidHome } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
const drawerWidth = 60;
const miniDrawerWidth = 60;

const navItems = [
  { name: "Home", icon: <BiSolidHome /> },
  { name: "dashboard", icon: <MdOutlineInsertChart /> },
  { name: "cart 1", icon: <LiaNotesMedicalSolid /> },
  { name: "wallet", icon: <CiWallet /> },
  { name: "checkout", icon: <BsFillBagCheckFill /> },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setMobileOpen(false);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: drawerWidth,
        textAlign: "center",
      }}
      onClick={handleDrawerToggle}
    >
      <Box className='drawer-item'>
        <Typography variant='h6' sx={{ my: 2 }}>
          Demo
        </Typography>{" "}
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                selected={selectedItem === item.icon}
                onClick={() => handleItemClick(item.icon)}
                sx={{
                  justifyContent: drawerOpen ? "initial" : "center",
                  px: 2.5,
                }}
              >
                {item.icon && (
                  <span
                    style={{
                      marginRight: drawerOpen ? 10 : 0,
                      fontSize: "1.5em",
                      height: "1.5em",
                    }}
                  >
                    {item.icon}
                  </span>
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ p: 2 }}>
        <span>
          <IoMdLogOut style={{ fontSize: "1.5em" }} />
        </span>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <div className='nav-bar'>
          <IconButton
            color='#7294ff'
            aria-label='open drawer'
            edge='start'
            onClick={drawerOpen ? handleDrawerClose : handleDrawerOpen}
            sx={{ mr: 2, color: "#7294ff" }}
            className='drawer-btn-expand'
          >
            <HiMiniSquares2X2 />
          </IconButton>
          <div className='nav-bar-content'>
            <Typography
              className='nav-bar-search-bar'
              variant='h6'
              component='div'
            >
              <Paper
                component='div'
                sx={{
                  p: "1px 2px",
                  height: "35px",
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",

                  width: "100%",
                  maxWidth: "300px",
                }}
              >
                <IconButton type='button' sx={{ p: "7px" }} aria-label='search'>
                  <SearchIcon />
                </IconButton>

                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder='Search'
                  inputProps={{ "aria-label": "search" }}
                />
              </Paper>
            </Typography>
            <Box
              className='nav-bar-content-right-side'
              sx={{
                display: "flex",
                alignItems: "normal",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  fontSize: "1.5em",
                }}
                onClick={props.toggleColorMode}
                color='inherit'
              >
                {props.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </Box>
              <Box
                sx={{
                  fontSize: "1.5em",
                }}
              >
                <MdOutlineEmail />
              </Box>
              <Box
                sx={{
                  fontSize: "1.5em",
                }}
              >
                <IoSettingsOutline />
              </Box>
              <Box
                sx={{
                  fontSize: "1.5em",
                }}
              >
                <IoNotificationsCircleSharp />
              </Box>
              <Box
                sx={{
                  width: "2em",
                  height: "2em",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src='../assets/profile.jpg'
                  alt='Profile'
                />
              </Box>
            </Box>
          </div>
        </div>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          open={drawerOpen}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerOpen ? drawerWidth : miniDrawerWidth,
              transition: "width 0.3s",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
  toggleColorMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export { Navbar };
