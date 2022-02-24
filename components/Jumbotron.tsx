import * as React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const ImageBox = styled(Box)({
  "& img": {
    width: "100%",
  },
});

// type JumbotronProps = {
//   logo: React.ReactNode;
//   nav: React.ReactNode;
// };

// export default function Jumbotron(props: JumbotronProps) {
export default function Jumbotron() {
  return (
    <ImageBox>
      <img src="/header.jpg" alt="jumbotron" />
      {/* <Image src="/header.jpg" alt="jumbotron" width={1200} height={900} /> */}
    </ImageBox>
  );
}
