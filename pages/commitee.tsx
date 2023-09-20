import LandingPageLayout from "@/layout/LandingPageLayout";
import React from "react";

const committeeMembers = [
  {
    id: 1,
    title: "Prof. THOMAS CHEN",
    role: "",
    affiliation: "City, University of London, UK",
  },
  {
    id: 2,
    title: "Dr.G.Glorindal",
    role: "Deputy Vice Chancellor, Research and Innovation",
    affiliation: "St. John the Baptist University, Malawi, East Africa",
  },
  {
    id: 3,
    title: "Dr. Mithileysh Sathiyanarayanan",
    role: "Founder and CEO",
    affiliation: "MIT Square, London",
  },
  {
    id: 4,
    title: "Dr. Vijanth S Asirvadam",
    role: "Department of Electrical and Electronic Engineering",
    affiliation: "Universiti Teknologi Petronoas, Malaysia",
  },
];
const chiefPatrons = [
  {
    id: 1,
    title: "Dr. R. Shivakumar ",
    role: "",
    affiliation: "Chairman, SRM Group of Institutions, Ramapuram & Trichy",
  },
  {
    id: 2,
    title: "Mr. S. Niranjan",
    role: "",
    affiliation: "Co-Chairman, SRM Group of Institutions, Ramapuram & Trichy",
  },
];

const patrons = [
  {
    id: 3,
    title: "Dr. V. Subbiah Bharathi",
    role: "",
    affiliation: "Director, SRM Group of Institutions,Ramapuram",
  },
  {
    id: 4,
    title: "Dr. M. Muralikrishna",
    role: "",
    affiliation: "Dean (E&T), SRMIST, Ramapuram",
  },
  {
    id: 5,
    title: "Dr. Balika J Chelliah",
    role: "Deputy HOD/AIML,",
    affiliation: "Vice Principal (Admin), SRMIST, Ramapuram",
  },
  {
    id: 6,
    title: "Dr. G. Prabhakaran",
    role: "",
    affiliation: "Vice Principal (Academic), SRMIST,Ramapuram",
  },
];
const nationalCommitteeMembers = [
  {
    id: 1,
    title: "Dr.K.Vivekanandan",
    role: "Department of Computer Science and Engineering",
    affiliation: "Pondicherry Engineering College, Pondicherry",
  },
  {
    id: 2,
    title: "Dr. V.S.Prakash Attili",
    role: "",
    affiliation: "Information Technology and Systems, IIM Lucknow",
  },
  {
    id: 3,
    title: "Dr. Jitendra Kumar",
    role: "",
    affiliation:
      "Department of Computer Applications, NIT, Tiruchirappalli, Tamilnadu",
  },
  {
    id: 4,
    title: "Dr. P. Uma Maheswari",
    role: "",
    affiliation:
      "Department of Computer Science and Engineering, Anna University, Chennai",
  },
  {
    id: 5,
    title: "Dr.Jayashree Padmanabhan",
    role: "",
    affiliation: "Department of Computer Technology, Anna University, Chennai",
  },
  {
    id: 6,
    title: "Dr. D. K. Shaw",
    role: "",
    affiliation:
      "Department of Computer Applications, NIT, Jamshedpur, Jharkand",
  },
  {
    id: 7,
    title: "Dr.M.Venkatesan",
    role: "Department of Computer Science and Engineering",
    affiliation: "NIT, Puducherry",
  },
];

const convenor = [
  {
    id: 1,
    title: "Dr. K. Raja",
    role: "Professor & HoD,",
    affiliation:
      "Department of Computer Science and Engineering, SRMIST, Ramapuram",
  },
];

const coConvenor = [
  {
    id: 1,
    title: "Dr. Balika J Chelliah",
    role: "Deputy HOD/AIML,",
    affiliation: "Vice Principal (Admin), SRMIST, Ramapuram",
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
        <h1 className="my-4 text-lg font-semibold">Chief Patrons </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chiefPatrons.map((member) => (
            <div
              key={member.id}
              className="bg-slate-50 text-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-bold text-lg">{member.title}</h3>
              <p>{member.role}</p>
              <p className="text-base leading-snug tracking-wide text-opacity-100">
                {member.affiliation}
              </p>
            </div>
          ))}
        </div>
        <h1 className="my-4 text-lg font-semibold">Patrons </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patrons.map((member) => (
            <div
              key={member.id}
              className="bg-slate-50 text-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-bold text-lg">{member.title}</h3>
              <p>{member.role}</p>
              <p className="text-base leading-snug tracking-wide text-opacity-100">
                {member.affiliation}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full">
          <h1 className="my-4 w-full text-lg font-semibold">Convenor</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {convenor.map((member) => (
              <div
                key={member.id}
                className="bg-slate-50 text-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-bold text-lg">{member.title}</h3>
                <p>{member.role}</p>
                <p className="text-base leading-snug tracking-wide text-opacity-100">
                  {member.affiliation}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <h1 className="my-4  text-lg font-semibold">Co-Convenor</h1>
          <div className="grid items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coConvenor.map((member) => (
              <div
                key={member.id}
                className="bg-slate-50 text-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-bold text-lg">{member.title}</h3>
                <p>{member.role}</p>
                <p className="text-base leading-snug tracking-wide text-opacity-100">
                  {member.affiliation}
                </p>
              </div>
            ))}
          </div>
        </div>

        <h1 className="my-4 text-lg font-semibold">International Experts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member) => (
            <div
              key={member.id}
              className="bg-slate-50 text-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-bold text-lg">{member.title}</h3>
              <p>{member.role}</p>
              <p className="text-base leading-snug tracking-wide text-opacity-100">
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
              <h3 className="font-bold text-lg">{member.title}</h3>
              <p>{member.role}</p>
              <p className="text-base leading-snug tracking-wide text-opacity-100">
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
