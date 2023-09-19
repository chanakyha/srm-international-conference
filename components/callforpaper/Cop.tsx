import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import Link from "next/link";

const accordionsData = [
  {
    id: "item-1",
    question: "Intelligent Information Systems",
    answer: [
      "Novel Information Process",
      "Management Systems",
      "Modelling and Advanced Intelligent",
      "Internet of Things",
      "Human-Computer",
      "Interaction Models Digital Informatics",
      "Wireless Communication and Storage Networks",
      "System Information Modelling Techniques",
      "Artificial and Computational Intelligence Models",
      "Performance Analysis and Evaluation Techniques",
      "Intelligent Information Retrieval Techniques",
    ],
  },
  {
    id: "item-2",
    question: "Bio - Engineering",
    answer: [
      "Bio-Medical Image Analysis",
      "Biomedical Signal",
      "Processing Control Pattern Recognition and Applications",
      "Deep Learning & Image Based Rendering",
      "Speech and Audio Processing",
      "Biometrics",
      "Sensors & Imaging Models",
      "Biological and Perceptual Models for Image/Video",
    ],
  },
  {
    id: "item-3",
    question: "Blockchain Technology",
    answer: [
      "Theories of blockchain",
      "Smart contract, chain code, and distributed ledger",
      "Distributed consensus",
      "Fault tolerance mechanisms",
      "Blockchain schemes for decentralization",
      "Security, privacy and trust of blockchain",
      "Security issues and attacks on blockchain based systems",
    ],
  },
  {
    id: "item-4",
    question: "Ubiquitous Computing & Communications",
    answer: [
      "Cloud Computing",
      "Mobile Computing and Networks",
      "Embedded Computing Frameworks",
      "Modelling and Analysis of Ubiquitous Information Systems",
      "Communication Networking Models",
      "High-Performance Computing",
      "Pervasive Communication Networks",
    ],
  },
  {
    id: "item-5",
    question: "Smart Network Science",
    answer: [
      "Artificial Neural Networks",
      "Sentiment Analysis Natural Language",
      "Processing Social Network Mining",
      "Computing in Mobile Ad hoc Networks",
      "Network Service-based Grid Computing",
    ],
  },
  {
    id: "item-6",
    question: "Computatinal Vision",
    answer: [
      "Modelling and Simulation of Biological Systems",
      "Multi-Sensor Data Analysis, 3D Computer Vision",
      "Object/Target Detection, Recognition and Identification",
      "Big Data, Large-Scale Methods",
      "Deep Learning Techniques",
      "Motion and Tracking, Space Video Analytics Stereo and 3D Vision",
    ],
  },
  {
    id: "item-7",
    question: "Computing Models and Applications",
    answer: [
      "Network Virtualization and Visualization",
      "Social Computing",
      "Smart Computing Architectures",
      "Soft Computing Algorithms and Models",
    ],
  },
];

const instructionsData = [
  "All submissions must be in English and include a brief abstract. It will be evaluated by independent experts (at least three) in the Blind peer review process.",
  "All pages must be numbered in the same order. Tables and figures can be included within the text or placed on other pages with appropriate caption(s).",
  "The title of the paper, the author's name(s), and entire institutional affiliation(s) should all be mentioned on the first page of the manuscript. There should also be an abbreviated title (for running heads).",
  "A list of 4—6 keywords should be provided immediately after the abstract. These keywords should be relatively independent (coordinate index terms) and should best describe the paper as a whole.",
  "Footnotes should be numbered alphabetically and inserted at the end of a text page, apart from acknowledgements and grant information (not to be listed separately).",
  "Authors should mention computing requirements (Hardware & Software) as well as performance issues.",
  "Authors should mention the type of paper (Research/Review/Case Study/Short Communication) on the first page of the manuscript.",
  "Submissions that do not follow the above instructions may be returned to the authors for correction before being published.",
  
];

function CallForPaper() {
  return (
    <section>
      <div className="p-4 md:px-16 lg:mx-auto lg:max-w-7xl min-h-[calc(100vh-5rem)]">
        <h1 className="text-xl lg:text-4xl font-bold text-center my-10">
          Call for Paper
        </h1>
        <p className="text-gray-500 text-base md:px-16 text-center">
          All submitted articles should report novel and unpublished research
          results on experimental or theoretical basis. Articles submitted to
          ICACST&apos;23, should fall under any one domain mentioned below and
          must not be under consideration for publication elsewhere.
        </p>
        <div className="p-4 my-10">
          {accordionsData.map((accordion, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={accordion.id}>
                <AccordionTrigger>
                  <p className="text-lg">
                    Track 0{index + 1}: {accordion.question}
                  </p>
                </AccordionTrigger>
                <AccordionContent className="w-full">
                  <ul>
                    {accordion.answer.map((item, i) => (
                      <li className="pl-2 text-gray-500 text-base " key={i}>
                        {"• " + item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="flex flex-col md:ml-auto md:flex-row md:w-1/2 gap-4 items-center">
          <Button asChild className="w-full" variant={"outline"}>
            <Link target="_blank" href="/assets/Template.pdf">
              Download Template
            </Link>
          </Button>
          <Button asChild className="w-full" variant={"outline"}>
            <Link
              target="_blank"
              href="https://www.springer.com/journal/44230/submission-guidelines"
            >
              Submission Guidlines
            </Link>
          </Button>
        </div>
        <div className="mb-10 p-4">
          <h1 className="text-xl lg:text-4xl font-bold text-center my-10">
            Instructions for Authors
          </h1>
          <div>
            <ul className="list-disc">
              {instructionsData.map((data, idx) => (
                <li key={idx} className="text-gray-500 text-base">
                  {data}
                </li>
              ))}
              <li className="text-gray-500 text-base">
                Upload your Papers to{" "}
                <Link
                  href={"mailto:rmpicacst@srmist.edu.in"}
                  className="hover:underline text-black font-medium hover:text-blue-500 cursor-pointer"
                >
                  rmpicacst@srmist.edu.in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallForPaper;
