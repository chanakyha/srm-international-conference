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
    <div className="w-11/12 md:w-[80%] mx-auto max-w-7xl">
      <div>
        <h1 className="text-4xl font-bold text-center my-10">COMMITEE MEMBERS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {committeeMembers.map((member) => (
          <div
            key={member.id}
            className="bg-stone-100 text-gray-800 rounded-lg shadow-xl p-6 transition-all duration-300 hover:scale-90 hover:bg-blue-700 hover:text-white"
          >
            <h3 className="font-bold text-xl">{member.title}</h3>
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

