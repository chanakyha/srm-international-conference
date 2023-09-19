import LandingPageLayout from "@/layout/LandingPageLayout";
import React from "react";

const committeeMembers = [
    {
        id: 1,
        title: "Prof. Thomas",
        role: "",
        affiliation: "CHEN University of London, UK",
    },
    {
        id: 2,
        title: "Dr. G Glorindal",
        role: "Deputy Vice Chancellor, Research and Innovation",
        affiliation: "St. John the Baptist University, Malawi, East Africa",
    },
    {
        id: 3,
        title: "Dr. Mithileysh Sathitanarayanan",
        role: "Founder and CEO",
        affiliation: "MIT Square, London",
    },
    {
        id: 4,
        title: "Vijanth S Asirvadam",
        role: "Department of Electrical and Electronic Engineering",
        affiliation: "Universiti Teknologi Petronoas, Malaysia",
    },
];
const nationalCommitteeMembers = [
    {
        id: 1,
        title: "Dr. K. VIVEKANANDAN",
        role: "",
        affiliation:
            "Pondicherry Engineering college, Pondicherry, Tamilnadu, India",
    },
    {
        id: 2,
        title: "Prof. V S PRAKASH ATTILI",
        role: "",
        affiliation: "Information Technology and Systems, IM Lucknow, Lucknow",
    },
    {
        id: 3,
        title: "Dr. JITENDRA KUMAR",
        role: "",
        affiliation:
            "Department of Computer Applications, NIT, Tiruchirappalli, Tamilnadu",
    },
    {
        id: 4,
        title: "Dr. P. UMA MAHESWARI",
        role: "",
        affiliation:
            "Department of Computer Science and Engineering, Anna University, Chennai",
    },
    {
        id: 5,
        title: "DR. JAYASHREE PADMANABHAN",
        role: "",
        affiliation:
            "Department of Computer Technology, Anna University, Chennai",
    },
    {
        id: 6,
        title: "Dr. D. K. SHAW",
        role: "",
        affiliation:
            "Department of Computer Applications, NIT, Jamshedpur, Jharkand",
    },
    {
        id: 7,
        title: "Dr. M. VENKATESAN",
        role: "",
        affiliation:
            "Department of Computer Science and Engineering, NIT, Suratkal, India",
    },
];

export const Committee = () => {
    return (
        <LandingPageLayout>
            <div className="w-11/12 md:w-[80%] lg:py-16 mx-auto max-w-7xl min-h-[calc(100vh-5rem)]">
                <div>
                    <h1 className="text-xl font-bold text-center my-10">
                        COMMITEE MEMBERS
                    </h1>
                </div>
                <h1 className="my-4 text-lg font-semibold">International Experts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {committeeMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-slate-50 text-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-1"
                        >
                            <h3 className="font-bold text-lg">
                                {member.title}
                            </h3>
                            <p>{member.role}</p>
                            <p className="text-sm leading-snug tracking-wide text-opacity-100">
                                {member.affiliation}
                            </p>
                        </div>
                    ))}
                </div>
                <h1 className="mb-4 mt-12 text-lg font-semibold">National Experts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {nationalCommitteeMembers.map((member) => (
                        <div
                            key={member.id}
                            className="bg-slate-50 text-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-1"
                        >
                            <h3 className="font-bold text-lg">
                                {member.title}
                            </h3>
                            <p>{member.role}</p>
                            <p className="text-sm leading-snug tracking-wide text-opacity-100">
                                {member.affiliation}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </LandingPageLayout>
    );
};

export default Committee;
