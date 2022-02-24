import * as React from "react";
import { SocialNetworks } from "../../config/SocialNetworks";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function ResponsiveSocialNetworks() {
  return (
    <>
      {SocialNetworks.map((social) => (
        <ListItem
          button
          key={social.name}
          onClick={() => window.open(social.url, "_blank")}
          sx={{"&:hover svg": { color: social.hoverColor }}}
        >
          <ListItemIcon>{social.icon}</ListItemIcon>
          <ListItemText primary={social.name} />
        </ListItem>
      ))}
    </>
  );
}
