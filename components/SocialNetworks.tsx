import * as React from "react";
import { SocialNetworks as SocialN } from "../config/SocialNetworks";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

type SocialNetworksProps = {
  align: string;
  color?: string;
};

export default function SocialNetworks(props: SocialNetworksProps) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          // alignItems: "end",
          textAlign: "right",
          flexWrap: "wrap",
          justifyContent: props.align,
          mr: 1,
        }}
      >
        {SocialN.map((social) => (
          <a href={social.url} target="_blank" key={social.name}>
            <Tooltip title={social.name}>
              <IconButton
                onClick={() => social.icon}
                size="small"
                sx={{
                  mr: props.align === "flex-end" ? 0 : 1.1,
                  ml: props.align === "flex-start" ? 0 : 1.1,
                  mb: 1,
                  color: (theme) =>
                    props.color === "light" ? theme.global.forthyBlue : "black",
                  border: (theme) =>
                    props.color === "light"
                      ? `1px solid ${theme.global.forthyBlue}`
                      : "1px solid black",
                  "&:hover": { color: social.hoverColor },
                  "& svg": { width: ".7em", height: ".7em" },
                }}
              >
                {social.icon}
              </IconButton>
            </Tooltip>
          </a>
        ))}
      </Box>
    </>
  );
}
