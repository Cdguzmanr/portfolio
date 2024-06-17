"use client";

import Image from "next/image";
import MainBanner from "./components/MainBanner"
import Navbar from "./components/Navbar";
import Extra from "./components/ui/extra";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

import { AppProps } from 'next/app';
import { BrowserRouter } from 'react-router-dom';



export default function Home() {
  return (
    <BrowserRouter>
      <main className="bg-neutral-50 min-h-screen">

<>
  <Navbar />
</>

<>
  <MainBanner />
</>

<div className="clear-both"></div>

<>
  <Profile />
</>

<>
<Skills/>
</>

<>
  < ProjectsSection />
</>

{/* <>
  <Extra />
</> */}

  

<>
  <Footer />
</>

</main>

    </BrowserRouter>
    

  );
}
