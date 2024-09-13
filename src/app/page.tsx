import Feature from "@/sections/Feature";
import Header from "@/sections/Header";
import Navbar from "@/sections/Navbar";
import Services from "@/sections/Services";
import Standards from "@/sections/Standards";

export default function Home() {
  return (
    <div className="bg-[whitesmoke] dark:bg-black overflow-x-hidden">
      <Navbar />
      <Header />
      <Feature />
      <Services />
      <Standards />
    </div>
  );
}
