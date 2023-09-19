import LandingPageLayout from "@/layout/LandingPageLayout";
import React from "react";

const PublicationsPage = () => {
  const publications = [
    "All the registered and presented papers will be published in conference proceedings with ISBN number.",
    "The proceedings of ICACST'23 2023 will be indexed to IEEE Xplore Digital library & SCOPUS.",
    "Proceedings of the previous edition of the ICACST'23 (2019) conference series have been published in the IEEE Xplore digital library successfully.",
  ];
  return (
    <LandingPageLayout>
      <div className="p-4 md:px-16 lg:max-w-7xl lg:mx-auto min-h-[calc(100vh-5rem)]">
        <h1 className="text-xl lg:text-4xl font-bold text-center my-10">
          Publications
        </h1>
        <div className="p-4">
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
  );
};

export default PublicationsPage;
