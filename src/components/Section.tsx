import React from "react";
import SectionHeading from "./SectionHeading";

interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  padding?: string;
  id?: string;
}
const Section: React.FC<SectionProps> = ({
  title,
  description,
  padding,
  children,
  id,
}) => {
  return (
    <div
      id={id}
      className={`${
        padding ? padding : "py-12 md:py-20"
      } border-t-[1px] border-dashed border-black dark:border-gray-300`}
    >
      <SectionHeading title={title} description={description} />
      <div className={`${title ? "mt-12" : ""}`}>{children}</div>
    </div>
  );
};

export default Section;
