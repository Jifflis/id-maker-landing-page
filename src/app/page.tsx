

import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar/>
      <Banner/>
    </main>
  );
}
