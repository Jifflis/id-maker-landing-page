
import Image from 'next/image';
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import 'swiper/css';
import 'swiper/css/pagination';


export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Banner />
      <Features />
      <PromoVideos/>
      <Footer/>
    </main>
  );
}


export function Features() {
  return (
    <section className="bg-gradient-to-b 
from-blue-900 from-[0%] 
  via-blue-900 via-[1%] 
  to-gray-900 
  flex flex-col items-center py-8">

      {/* Top center heading */}
      <div className="text-center mb-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 mt-8 text-white">
          Why You&apos;ll Love It?
        </h1>
        <p className="text-gray-200 max-w-2xl">
          A <strong>free</strong> app with amazing features. Whether you&apos;re creating IDs for a school, company, event, or organization — this tool has everything you need in one place.
          💼 Fast. Flexible. Powerful.
        </p>
      </div>

      {/* Side-by-side section */}
      <div className="flex flex-col md:flex-row items-center  w-full max-w-6xl px-6 mb-24">

        {/* Right: Feature text */}
        <div className="md:w-1/2 md:text-right">
          <h2 className="text-x2 sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            100+ Stunning Templates
          </h2>
          <p className="mb-8 text-gray-200">
            Fully customizable to match your brand, event, or organization — no design skills needed!
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 relative w-full h-64 md:h-96">
          <Image
            src="/templates.svg"
            alt="templates"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center  w-full max-w-6xl px-6 mb-24">

        {/* Right: Feature text */}
        <div className="md:w-1/2 relative w-full h-64 md:h-96">
          <Image
            src="/create_template.svg"
            alt="create_template"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 md:text-left">
          <h2 className="text-x2 sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Create & Save Your Own Templates
          </h2>
          <p className="mb-8 text-gray-200">
            Design once, use forever. Build your own custom templates to fit any need or style.
          </p>
        </div>

      </div>

      {/* Side-by-side section */}
      <div className="flex flex-col md:flex-row items-center  w-full max-w-6xl px-6 mb-24">

        {/* Right: Feature text */}
        <div className="md:w-1/2 md:text-right">
          <h2 className="text-x2 sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            One-Tap Bulk Generation
          </h2>
          <p className="mb-8 text-gray-200">
            Got a spreadsheet? Turn your CSV file into hundreds of ID cards instantly — perfect for schools, events, and companies.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 relative w-full h-64 md:h-96">
          <Image
            src="/csv_generator.svg"
            alt="csv_generator"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center  w-full max-w-6xl px-6 mb-24">

        {/* Right: Feature text */}
        <div className="md:w-1/2 relative w-full h-64 md:h-96">
          <Image
            src="/manual.svg"
            alt="manual"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 md:text-left">
          <h2 className="text-x2 sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Manual Generation Made Easy
          </h2>
          <p className="mb-8 text-gray-200">
            Only need a few cards? Use manual input for quick, precise creation — no hassle.
          </p>
        </div>

      </div>

      {/* Side-by-side section */}
      <div className="flex flex-col md:flex-row items-center  w-full max-w-6xl px-6 mb-24">

        {/* Right: Feature text */}
        <div className="md:w-1/2 md:text-right">
          <h2 className="text-x2 sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Smart Auto-Cropping with Face Detection
          </h2>
          <p className="mb-8 text-gray-200">
            Import photos in any size !Q— we’ll auto-detect faces and crop them perfectly.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 relative w-full h-64 md:h-96">
          <Image
            src="/crop_image.svg"
            alt="crop_image"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export function PromoVideos() {
  return (
    <section className="px-4 py-32 bg-gray-900 px-12">
      <h2 className="text-4xl font-black mb-18 text-center">Promotional Videos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Video 1 */}
        <div className="text-center">
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/lF0ouuURMSk"
              title="Bulk Generation"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="mt-3 text-lg font-semibold">Bulk Generation</h3>
        </div>

        {/* Video 2 */}
        <div className="text-center">
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/elr-l8qVgg4"
              title="Auto-Cropping "
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="mt-3 text-lg font-semibold">Auto-Cropping </h3>
        </div>

        {/* Video 3 */}
        <div className="text-center">
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/u1BWP63rdo4"
              title="Manual Generation"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="mt-3 text-lg font-semibold">Manual Generation</h3>
        </div>

        {/* Video 4 */}
        <div className="text-center">
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/ut8aq_DTJyw"
              title="Customizable Templates"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="mt-3 text-lg font-semibold">Customizable Templates</h3>
        </div>
      </div>
    </section>
  );
}


export function Footer() {
  return (
    <footer className="bg-black text-white py-8 pt-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            This app helps you generate ID cards quickly and efficiently for free. Ideal for students, companies, and event organizers.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold mb-4">Donation</h3>
          <p className="text-sm text-gray-400 mb-3">
            Your support helps us continue improving this app and keep it free for everyone.
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>PayPal: jifflisotomier@gmail.com</li>
            <li>Wise: jifflisotomier@gmail.com</li>
            <li>Payoneer: jifflisotomier@gmail.com</li>
            <li>GCash: 09482845780</li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: jifflisotomier@gmail.com</li>
            <li>WhatsApp: +639482845780</li>
            <li>Telegram: +639482845780</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-24 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ID Maker. Developed by Jeffrey C. Abaniel. All rights reserved.
      </div>
    </footer>
  );
}
