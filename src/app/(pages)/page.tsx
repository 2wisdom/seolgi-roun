import { Typography } from "@mui/material";
import Banner from "../components/Banner";
import ItemCard from "../components/ItemCard";
import Link from "next/link";
import { GlobalWrapper } from "../style/GlobalWrapper";

export default function Home() {
  return (
    <main>
      <Banner />
      <GlobalWrapper>
        <ItemCard />
      </GlobalWrapper>
    </main>
  );
}
