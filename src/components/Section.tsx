import React from "react";
import SectionHeading from "./SectionHeading";

interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  padding?: string;
}
const Section: React.FC<SectionProps> = ({
  title,
  description,
  padding,
  children,
}) => {
  return (
    <div
      className={`${
        padding ? padding : "py-16"
      } border-t-[1px] border-dashed border-black dark:border-gray-300 mx-4`}
    >
      {title && <SectionHeading title={title} description={description} />}
      <div className={`${title ? "mt-12" : ""}`}>{children}</div>
    </div>
  );
};

export default Section;
