// @mui
import { styled } from "@mui/material/styles";
// components
import Page from "../components/Page";
import HomeHero from "../sections/home/HomeHero";
import HomeMinimal from "../sections/home/HomeMinimal";
// ----------------------------------------------------------------------
const RootStyle = styled("div")(() => ({
  height: "100%",
}));
// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Trang chủ">
      <RootStyle>

        <HomeHero />
        <HomeMinimal />
      </RootStyle>
    </Page>
  );
}