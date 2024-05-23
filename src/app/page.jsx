import Image from "next/image";
import Header from "./components/Header";
import Pokedata from "./components/PokeData";

export default function Home() {
  return (
    <>
      <Header />
      <Pokedata />
    </>
  );
}
