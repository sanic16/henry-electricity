import React from "react";
import SectionHeading from "./SectionHeading";

interface SectionProps {
  title: string;
  children?: React.ReactNode;
}
const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="py-12 border-t-[1px] border-dashed border-black dark:border-gray-300 mx-4">
      <SectionHeading title={title} />
      <div className="mt-12">{children}</div>
    </div>
  );
};

export default Section;