import React from "react";

const committeeMembers = [
  {
    id: 1,
    title: "Title of Committee Member 1",
    role: "Role of Member 1",
    affiliation: "College Name 1, India",
  },
  {
    id: 2,
    title: "Title of Committee Member 2",
    role: "Role of Member 2",
    affiliation: "College Name 2, India",
  },
  {
    id: 3,
    title: "Title of Committee Member 3",
    role: "Role of Member 3",
    affiliation: "College Name 3, India",
  },
  {
    id: 4,
    title: "Title of Committee Member 4",
    role: "Role of Member 4",
    affiliation: "College Name 4, India",
  },
  // Add more committee members as needed
];

export const Committee = () => {
  return (
    <div className="w-11/12 md:w-[80%] mx-auto max-w-7xl h-[calc(100vh-5rem)]">
      <div>
        <h1 className="text-xl font-bold text-center my-10">COMMITEE MEMBERS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {committeeMembers.map((member) => (
          <div
            key={member.id}
            className="bg-stone-100 text-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="font-bold text-lg">{member.title}</h3>
            <p>{member.role}</p>
            <p className="text-sm leading-snug tracking-wide text-opacity-100">
              {member.affiliation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;

