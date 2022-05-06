import type { NextPage } from "next";
import Head from "next/head";

import NavBar from "../components/Nav-Bar/NavBar";
import FirstSection from "../components/FirstSection.tsx/FirstSection";
import SecondSection from "../components/Second Section/SecondSection";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import ThirdSection from "../components/Third section/ThirdSection";
import FourthSection from "../components/Fourth Section/FourthSection";
import FifthSection from "../components/Fifth Section/FifthSection";
config.autoAddCss = false; /* eslint-disable import/first */

const Home: NextPage = () => {
   return (
      <>
         <Head>
            <title>Resturant App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <NavBar />
         <FirstSection />
         <SecondSection />
         <ThirdSection />
         <FourthSection />
         <FifthSection />
      </>
   );
};

export default Home;
