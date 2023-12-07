import React from "react";
import Hero from "./landing/Hero";
import Banner from "./landing/Banner";
import About from "./landing/About";
import Footer from "./Footer";
import LandingPageLayout from "@/layout/LandingPageLayout";
import ImpDates from "./landing/ImpDates";
import Info from "./landing/Info";

function Landing() {
    return (
        <>
            <Info/>
        <LandingPageLayout>
            <Hero />
            <Banner />
            <ImpDates/>
            <About />
        </LandingPageLayout>
        </>
    );
}

export default Landing;
