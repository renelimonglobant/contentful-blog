import React, { useState } from "react";
import { Paths } from "../../config/Paths";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import NavBarItem from "./NavBarItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /*
  const Item = styled(ListItem)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    color: theme.global.forthyBlue,
  }));
*/

  return (
    <header>
      <Box
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "flex-end",
          // border: (theme) => `1px solid ${theme.palette.divider}`,
          // bgcolor: "background.paper",
          // color: (theme) => theme.global.forthyBlue,
        }}
      >
        {Paths.map((path, i) =>
          path.sub ? (
            <React.Fragment key={i}>
              <Divider orientation="vertical" flexItem />
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ fontWeight: 400 ,lineHeight: '1.5',fontSize: '1rem', textTransform: "inherit", margin: "auto", color: (theme) => theme.global.forthyBlue }}
              >
                {path.name}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {path.sub.map((sub, j) => (
                  <MenuItem onClick={handleClose} key={j}>
                    {sub.name}
                  </MenuItem>
                ))}
              </Menu>
            </React.Fragment>
          ) : (
            <React.Fragment key={i}>
              <Divider orientation="vertical" flexItem />
              <NavBarItem title={path.name} url={path.pathname} />
            </React.Fragment>
          )
        )}
      </Box>
    </header>
  );
}
