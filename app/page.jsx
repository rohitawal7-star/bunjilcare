"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Contact from "../components/Contact";
import OurCore from "../components/OurCore";
import OurMission from "../components/OurMission";
import OurService from "../components/OurService";
import HomeBunjil from "../components/HomeBunjil";
import AboutUs from "../components/AboutUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      <HomeBunjil />
      <AboutUs />
      <OurMission />
      <OurService />
      <OurCore />
      <Contact />
      <Footer />
    </main>
  );
}
