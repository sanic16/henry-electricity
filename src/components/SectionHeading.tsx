import React from "react";

interface SectionHeadingProps {
  title: string;
}
const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <div className="w-fit mx-auto border-2 border-yellow-600 rounded-md py-4 px-6">
      <h1 className="text-3xl lg:text-4xl font-bold tracking-wider uppercase text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-black dark:to-yellow-200">
        {title}
      </h1>
    </div>
  );
};

export default SectionHeading;