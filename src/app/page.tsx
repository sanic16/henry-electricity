import Brands from "@/sections/Brands";
import Feature from "@/sections/Feature";
import Header from "@/sections/Header";
import NewsLetter from "@/sections/NewsLetter";
import Questions from "@/sections/Questions";
import Services from "@/sections/Services";
import Standards from "@/sections/Standards";

export default function Home() {
  return (
    <>
      <Header />
      <Feature />
      <Services />
      <Standards />
      <Questions />
      <Brands />
      <NewsLetter />
    </>
  );
}
