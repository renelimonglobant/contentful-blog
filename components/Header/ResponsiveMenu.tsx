import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AdjustIcon from "@mui/icons-material/Adjust";
import MenuIcon from "@mui/icons-material/Menu";
import { Paths } from "../../config/Paths";
import { useRouter } from "next/router";
import Divider from "@mui/material/Divider";
import ResponsiveSocialNetworks from "./ResponsiveSocialNetworks";

import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(true);
  const [state, setState] = React.useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

  const list = () => {
    const router = useRouter();
    return (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        // onClick={toggleDrawer(false)}
        // onKeyDown={toggleDrawer(false)}
      >
        <List>
          {Paths.map((path) =>
            path.sub ? (
              <React.Fragment key={path.name}>
                <ListItemButton onClick={() => setOpen(!open)}>
                  <ListItemText primary={path.name} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {path.sub.map((sub, j) => (
                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => router.push(sub.pathname)}
                        key={j}
                      >
                        <ListItemText primary={sub.name} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            ) : (
              <ListItem
                button
                key={path.name}
                onClick={() => router.push(path.pathname as string)}
              >
                <ListItemText primary={path.name} />
              </ListItem>
            )
          )}
          <Divider />
          <ListSubheader component="div" id="nested-list-subheader">
            Follow us
          </ListSubheader>
          <ResponsiveSocialNetworks />
        </List>
      </Box>
    );
  };

  return (
    <div>
      <Button
        sx={{ color: (theme) => theme.global.forthyBlue }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </Button>
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
