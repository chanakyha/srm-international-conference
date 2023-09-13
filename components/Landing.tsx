import React from "react";
import Hero from "./landing/Hero";
import Banner from "./landing/Banner";
import About from "./landing/About";
import Footer from "./Footer";
import LandingPageLayout from "@/layout/LandingPageLayout";

function Landing() {
    return (
        <LandingPageLayout>
            <Hero />
            <Banner />
            <About />
        </LandingPageLayout>
    );
}

export default Landing;
