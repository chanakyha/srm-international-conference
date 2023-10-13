import LandingPageLayout from "@/layout/LandingPageLayout";
import Head from "next/head";
import React from "react";

const PublicationsPage = () => {

    const publications = [
        "All accepted papers will be published in the conference proceedings with ISBN number.",
        "All presented papers will be published in SCI / SCOPUS / WOS / UGC CARE based on author's interest.",
    ];
    return (
        <>
        <Head>
            <title>ICACST 2023 | Publications</title>
        </Head>
        <LandingPageLayout>
            <div className="p-4 md:px-16 lg:max-w-7xl lg:mx-auto min-h-[calc(100vh-5rem)]">
                <h1 className="text-xl lg:text-4xl font-bold text-center my-10">
                    Publications
                </h1>
                <div className='p-4'>
                    <ul className="list-disc flex flex-col gap-8">
                        {publications.map((data, idx) => (
                            <li key={idx} className="text-gray-500 text-base">
                                {data}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </LandingPageLayout>
        </>
    );
}

export default PublicationsPage
