import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

function CallForPaper() {
  return (
    <section>
      <div className="w-11/12 md:w-[80%] mx-auto max-w-7xl h-[calc(100vh-5rem)]">
        <h1 className="text-xl font-bold text-center my-10">Call for Paper</h1>
        <div className="p-4">
          {accordionsData.map((accordion, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={accordion.id}>
                <AccordionTrigger>{accordion.question}</AccordionTrigger>
                <AccordionContent className="w-full">
                  <ul>
                    {accordion.answer.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CallForPaper;

