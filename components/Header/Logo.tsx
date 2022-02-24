import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { Link as UILink } from "@mui/material";

const HomeLink = styled(UILink)({
  color: "white",
  padding: "5px",
  textAlign: "center",
  margin: 'auto',
  textDecoration: "none",
  display: "block",
});

export default function NavBar() {
  return (
    <Link href={`/`} passHref>
      <HomeLink className="link-logo">
        <Image src="/logo.png" alt="Vercel Logo" width={120} height={50} />
      </HomeLink>
    </Link>
  );
}
