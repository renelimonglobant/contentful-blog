// import HomeIcon from '@mui/icons-material/Home';

export const Paths = [
  {
    name: "Home",
    pathname: "/",
  },
  {
    name: "About",
    pathname: "/about",
  },
  {
    name: "Extra",
    // pathname: "/about",
    sub: [
      {
        name: "More",
        pathname: "/more",
      },
    ],
  },
];
