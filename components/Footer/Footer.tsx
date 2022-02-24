import * as React from "react";
import Grid from "@mui/material/Grid";
import SocialNetworks from "../SocialNetworks";
import Logo from "../Header/Logo";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

// const LogoBox = styled(Box)({
//   backgroundColor: "black",
//   color: "white",
// });
const LogoBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.global.mainBlue,
  color: theme.global.forthyBlue,
  padding: "5px",
  textAlign: "center",
}));

export default function Footer() {
  return (
    <>
      <CssBaseline />
      <Box
        component="footer"
        sx={{ backgroundColor: (theme) => theme.global.terciaryBlue }}
      >
        <Divider />
        <Grid
          container
          spacing={1}
          component="section"
          sx={{ minHeight: "240px", py: 8, my: "20px" }}
          // justifyContent="space-between"
          // alignItems="center"
        >
          <Grid item xs={12} sm={3} md={3}>
            <Logo />
          </Grid>
          {/* <Grid item sm={5} sx={{ display: { xs: "none", sm: "block" } }}> */}
          <Grid item xs={12} sm={5} md={5}>
            <div>
              <Grid
                container
                component="section"
                justifyContent="space-between"
              >
                <Grid item xs={12} sm={6}>
                  <Typography variant="blueTitle" component="h2">
                    Title
                  </Typography>
                  <nav aria-label="main mailbox folders">
                    <List>
                      <ListItem disablePadding>
                        <Link
                          href="#"
                          color="inherit"
                          sx={{ textTransform: "uppercase" }}
                        >
                          link
                        </Link>
                      </ListItem>
                      <ListItem disablePadding>
                        <Link
                          href="#"
                          color="inherit"
                          sx={{ textTransform: "uppercase" }}
                        >
                          link
                        </Link>
                      </ListItem>
                    </List>
                  </nav>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="blueTitle" component="h2">
                    Title
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            // sx={{ height: "100%" }}
          >
            <Typography variant="blueTitle" component="h2">
              Title
            </Typography>
            <Box sx={{py: '8px'}}>
              <SocialNetworks align="flex-start" />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1} component="section">
          <Grid item xs={12}>
            <LogoBox>Reserved</LogoBox>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
