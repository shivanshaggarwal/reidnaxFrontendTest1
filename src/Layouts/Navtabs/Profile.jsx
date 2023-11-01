import React, { useState } from "react";
import {
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Avatar,
  Divider,
  Stack,
  Box,
  Button
} from "@mui/material";

import { styled, alpha } from "@mui/material/styles";



import { useNavigate } from "react-router-dom";
// import defaultAvatar from "../../../assets/Images/defaultAvatar.png";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 220,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Profile = () => {
  const navigate = useNavigate();

  // let { firstName, lastName, email } = user;
  // firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  // lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  // let profilePic = user.profilePic ? user.profilePic  defaultAvatar;

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    navigate("/");
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {/* <Avatar sx={{ width: 40, height: 40 }} src={defaultAvatar}> */}
        <Avatar sx={{ width: 40, height: 40 }}>
          SA
        </Avatar>
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          <Stack>
            <Typography variant='subtitle1' color='text.primary' sx={{ fontWeight: 'bold', fontFamily: "Public Sans,sans-serif" }}>
              Shivansh Aggarwal
            </Typography>
            <Typography variant='subtitle2' color='text.secondary' sx={{ fontFamily: "Public Sans,sans-serif" }}>shivansh12432@gmail.com</Typography>
          </Stack>

        </MenuItem>
        <Divider sx={{ my: 1 }} />

        <Box sx={{ p: 2, pt: 2 }}>
          <Button
            size="small"
            fullWidth
            color="error"
            variant="contained"
            sx={{ fontFamily: "Public Sans,sans-serif" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </StyledMenu>
    </div >
  );
};

export default Profile;
