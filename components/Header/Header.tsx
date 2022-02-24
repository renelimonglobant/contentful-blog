import * as React from "react";
import Grid from "@mui/material/Grid";
import ResponsiveMenu from "./ResponsiveMenu";
import SocialNetworks from "../SocialNetworks";
import Box from "@mui/material/Box";

type HeaderProps = {
  logo: React.ReactNode;
  nav: React.ReactNode;
};

export default function Header(props: HeaderProps) {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: (theme) => theme.global.mainBlue,
        color: "primary.contrastText",
      }}
    >
      <Grid
        container
        spacing={1}
        component="header"
        sx={{ pb: 1 }}
        justifyContent="space-between"
      >
        <Grid item xs={9} sm={4}>
          {props.logo}
        </Grid>
        <Grid item sm={6} sx={{ display: { xs: "none", sm: "block" } }}>
          <div>{props.nav}</div>
          <div>
            <SocialNetworks align="flex-end" color="light" />
          </div>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: { xs: "block", sm: "none" }, textAlign: "right" }}
        >
          <ResponsiveMenu />
        </Grid>
      </Grid>
    </Box>
  );
}
