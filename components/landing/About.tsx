import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function About() {
  return (
    <section className="p-4 md:px-16 lg:p-0 lg:max-w-6xl lg:mx-auto">
      <div className="flex flex-col lg:items-center lg:w-full gap-4 my-10 lg:my-20">
        <h1 className="text-lg md:text-xl lg:text-2xl border-b-2 pb-1 lg:pb-2 border-gray-800 w-fit font-bold tracking-wider">
          Scope of ICACST
        </h1>
        <p className="text-sm md:text-base text-slate-500 font-medium text-justify">
          The International Conference on Advances in Computer Science and
          Technologies (ICACST) is a premier forum for the presentation of new
          advances and research results in the field of Computer Science and
          Technologies. The conference will bring together leading academic
          scientists, researchers and scholars in the domain of interest from
          around the world.
        </p>
      </div>
      <div className="flex flex-col lg:items-center lg:w-full gap-4 my-10 lg:my-20">
        <h1 className="text-lg md:text-xl lg:text-2xl border-b-2 pb-1 lg:pb-2 border-gray-800 w-fit font-bold tracking-wider">
          About SRMIST
        </h1>
        <p className="text-sm md:text-base text-slate-500 font-medium text-justify">
          SRM Institute of Science and Technology (formerly known as SRM
          University) is one of the top ranking university in India with over
          20,000 students and 1,500 faculty, offering a wide range of
          undergraduate, postgraduate and doctoral programs in Engineering,
          Management, Medicine and Health sciences, Science and Humanities.
        </p>
        <Link
          className="self-end"
          href="https://srmrmp.edu.in/"
          target={"_blank"}
        >
          <Button variant={"outline"}>More About SRM</Button>
        </Link>
      </div>
      <div className="flex flex-col lg:items-center lg:w-full gap-4 my-10 lg:my-20">
        <h1 className="text-lg md:text-xl lg:text-2xl border-b-2 pb-1 lg:pb-2 border-gray-800 w-fit font-bold tracking-wider">
          About CSE
        </h1>
        <p className="text-sm md:text-base text-slate-500 font-medium text-justify">
          The department of Computer Science and Engineering (CSE) at SRM
          Institute of Science and Technology was established in the year 2004
          with the aim of imparting quality education to students and bring out
          the best in them. The key goal of the department is to provide best IT
          infrastructure, world class learning and research environment, adopt
          industry practices through industry collaborations and inculcate moral
          and ethical values. With students hailing from all States and union
          territories of India, the department was established to meet the
          demand for well-qualified computer professionals. The promptness of
          the students to learn makes it easier for the industry-trained
          experienced faculty to produce top-notch engineers who are being
          recruited by reputed companies all over the world. The department is
          renowned for imparting state of the art undergraduate education and
          preparing its students for real world challenges. The department is
          accredited by NAAC as Grade A++ and placed by MHRD in category A. Our
          alumni have done extremely well which include managing top companies,
          designing revolutionary products, and contributing to fundamental
          research.
        </p>
        <h1 className="font-bold tracking-wider self-start text-lg md:text-xl lg:text-2xl mt-10">
          Courses Offered
        </h1>
        <p className="text-sm md:text-base text-slate-500 self-start font-medium text-left">
          <p>B.Tech - Computer Science & Engineering </p>
          <p>
            B.Tech - CSE with specialization in Artificial Intelligence and
            Machine Learning
          </p>
          <p>B.Tech - CSE with Specialization in Cloud Computing</p>
          <p>B.Tech - CSE with Specialization in Gaming Technology</p>
          <p>B.Tech - CSE with Specialization in Big Data Analytics </p>
          <p>B.Tech - CSE with Specialization in Internet of Things </p>
          <p>B.Tech - CSE with Specialization in Cyber Security </p>
          <p>B.Tech - Computer Science and Business Systems</p>
        </p>
        <h1 className="font-bold tracking-wider self-start text-lg md:text-xl lg:text-2xl mt-10">
          Vision
        </h1>
        <p className="text-sm md:text-base text-slate-500 font-medium text-justify">
          To become a world class department in imparting high quality knowledge
          and in providing students a unique learning and research experience in
          Computer Science and Engineering.
        </p>
        <h1 className="text-lg md:text-xl lg:text-2xl mt-10 self-start font-bold tracking-wider">
          Mission
        </h1>
        <ul className="list-disc self-start">
          <li className="text-sm md:text-base text-slate-500 font-medium text-justify">
            To impart knowledge in cutting edge technologies on part with
            industrial standards.
          </li>
          <li className="text-sm md:text-base text-slate-500 font-medium text-justify">
            To collaborate with renowned academic institutions in research and
            development.
          </li>
          <li className="text-sm md:text-base text-slate-500 font-medium text-justify">
            To instill societal and ethical responsibilities in all professional
            activities.
          </li>
        </ul>
        <Link
          className="self-end"
          href="https://srmrmp.edu.in/academics/department-of-computer-science-and-engineering/"
          target={"_blank"}
        >
          <Button variant={"outline"}>More About CSE</Button>
        </Link>
      </div>
    </section>
  );
}

export default About;
