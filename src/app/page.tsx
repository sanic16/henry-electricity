import Header from "@/sections/Header";
import Navbar from "@/sections/Navbar";
import Services from "@/sections/Services";
import Standards from "@/Standards";

export default function Home() {
  return (
    <div className="bg-[whitesmoke] dark:bg-black">
      <Navbar />
      <Header />
      <Services />
      <Standards />
    </div>
  );
}
