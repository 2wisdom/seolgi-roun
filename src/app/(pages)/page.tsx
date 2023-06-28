import { Typography } from "@mui/material";
import Banner from "../components/Banner";
import ItemCard from "../components/ItemCard";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Banner />
      <ItemCard />
    </main>
  );
}
