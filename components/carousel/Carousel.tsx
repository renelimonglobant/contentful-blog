import Carousel from "react-material-ui-carousel";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";

type ItemProps = {
  item: {
    name: string;
    description: string;
  };
};
function Item(props: ItemProps) {
  return (
    <Box
      component="article"
      sx={{
        background: "url(/header.jpg)",
        backgroundPosition: "center 60%",
        backgroundRepeat: "no-repeat",
        // minHeight: "100vh",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Grid
        container
        // spacing={1}
        sx={{ height: "100%" }}
        justifyContent="center"
        alignContent="center"
      >
        <Grid item xs={11} sm={6} md={5}>
          <h2>{props.item.name}</h2>
          <Typography paragraph sx={{ fontFamily: "Poppins" }}>
            {props.item.description}{" "}
          </Typography>
          <Typography paragraph>{props.item.description} </Typography>
          <Typography variant="paragraph">{props.item.description} </Typography>
          <Button className="CheckButton">Check it out!</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function CarouselD() {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel
      animation="slide"
      IndicatorIcon={<StarIcon />}
      indicatorIconButtonProps={{
        style: {
          padding: "3px",
          color: "white",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: "rgba(0,0,0,0.2)",
        },
      }}
      indicatorContainerProps={{
        style: {
          bottom: "2%",
          textAlign: "center",
          zIndex: 2000,
          position: "absolute",
        },
      }}
      fullHeightHover={true} // We want the nav buttons wrapper to only be as big as the button element is
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: "cornflowerblue",
          borderRadius: 30,
        },
      }}
      navButtonsWrapperProps={{
        // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
          bottom: "0",
          top: "unset",
        },
      }}
      NextIcon={<ChevronRightIcon />}
      PrevIcon={<ChevronLeftIcon />}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
