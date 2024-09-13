import React from "react";

interface SectionHeadingProps {
  title: string;
  description?: string;
}
const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
}) => {
  return (
    <div>
      <div className="w-fit mx-auto border-2 border-blue-800 dark:border-yellow-600 rounded-md py-4 px-6">
        <h1 className="text-3xl lg:text-5xl font-[500] tracking-wider uppercase text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 dark:from-yellow-500 to-black dark:to-yellow-200">
          {title}
        </h1>
      </div>

      <p className="text-center text-lg mt-4 w-full mx-auto md:w-4/5 lg:w-3/5">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
