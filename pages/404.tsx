import { useRouter } from "next/router";
// import { createUseStyles } from "react-jss";
import Head from "next/head";
import Link from "next/link";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Link as UILink } from "@mui/material";

type Custom404Props = {
  //pokemon: Array<any>
};

const ItemLink = styled(UILink)(({ theme }) => ({
  textAlign: "center",
  margin: "auto",
  color: theme.global.secondaryBlue,
  textDecoration: "underline",
  fontWeight: 600,
}));

function Custom404(props: Custom404Props) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404 Pokedex - {router.query.pokemonName}</title>
        <meta
          name="description"
          content="Small project for learning purpouses"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        component="div"
        sx={{
          backgroundColor: "white",
          color: (theme) => theme.global.secondaryBlue,
          textAlign: "center",
          fontSize: 22,
          padding: "5px 0px",
          minHeight: "81vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h3>Page not found</h3>
          <h4>
            Go to {` `}
            <Link href={`/`} passHref>
              <ItemLink>Home</ItemLink>
            </Link>
            {` `} or look at the menu above
          </h4>
        </div>
      </Box>
    </>
  );
}

export default Custom404;
