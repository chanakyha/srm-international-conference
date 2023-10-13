import Cop from "@/components/callforpaper/Cop";
import LandingPageLayout from "@/layout/LandingPageLayout";
import Head from "next/head";
const Paper = () => {
  return (
    <div>
      <>
      <Head>
        <title>ICACST 2023 | Call for Papers</title>
      </Head>
      <LandingPageLayout> 
        <Cop/>
      </LandingPageLayout>
      </>
    </div>
  );
};

export default Paper;
