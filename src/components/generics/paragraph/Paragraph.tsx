import React, { ReactNode } from "react";
import "./paragraph.css";
interface ParagraphProps {
  children: ReactNode;
  classname?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  classname,
}) => {
  return <p className={`${classname} paragraph`}>{children}</p>;
};

export const ParagraphCard: React.FC<ParagraphProps> = ({
  children,
  classname,
}) => {
  return <p className={`${classname} paragraphCard`}>{children}</p>;
};
