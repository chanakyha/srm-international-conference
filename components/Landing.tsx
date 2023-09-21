import React from "react";
import Hero from "./landing/Hero";
import Footer from "./Footer";
import LandingPageLayout from "@/layout/LandingPageLayout";

function Landing() {
    return (
        <LandingPageLayout>
            <Hero />
        </LandingPageLayout>
    );
}

export default Landing;
