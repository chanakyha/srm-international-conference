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
        question: "Is it accessible?",
        answer: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            "Duis aute irure dolor in reprehenderit in voluptate velit.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        ],
    },
    {
        id: "item-2",
        question: "Is it accessible?",
        answer: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            "Duis aute irure dolor in reprehenderit in voluptate velit.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        ],
    },
    {
        id: "item-3",
        question: "Is it accessible?",
        answer: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            "Duis aute irure dolor in reprehenderit in voluptate velit.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        ],
    },
    {
        id: "item-4",
        question: "Is it accessible?",
        answer: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            "Duis aute irure dolor in reprehenderit in voluptate velit.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
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
                    All submitted articles should report novel and unpublished
                    research results on experimental or theoretical basis.
                    Articles submitted to ViTECoN, 2023 should fall under any
                    one domain mentioned below and must not be under
                    consideration for publication elsewhere.
                </p>
                <div className="p-4 my-10">
                    {accordionsData.map((accordion, index) => (
                        <Accordion key={index} type="single" collapsible>
                            <AccordionItem value={accordion.id}>
                                <AccordionTrigger>
                                    {accordion.question}
                                </AccordionTrigger>
                                <AccordionContent className="w-full">
                                    <ul>
                                        {accordion.answer.map((item, i) => (
                                            <li
                                                className="pl-2 text-gray-500 text-base "
                                                key={i}
                                            >
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
                                <li
                                    key={idx}
                                    className="text-gray-500 text-base"
                                >
                                    {data}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallForPaper;
