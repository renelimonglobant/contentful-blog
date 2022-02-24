import * as React from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { Link as UILink } from "@mui/material";

type ContainerProps = {
  url: string;
  title: string;
};

const ItemLink = styled(UILink)(({ theme }) => ({
  textAlign: "center",
  margin: "auto",
  color: theme.global.forthyBlue,
  textDecoration: "none",
}));

export default function NavBarItem(props: ContainerProps) {
  return (
    <Link href={props.url} passHref>
      <ItemLink>{props.title}</ItemLink>
    </Link>
  );
}
