import React, { ReactNode } from "react";
import "./paragraph.css";
interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
}) => {
  return <p className={`${className} paragraph`}>{children}</p>;
};

export const ParagraphCard: React.FC<ParagraphProps> = ({
  children,
  className,
}) => {
  return <p className={`${className} paragraphCard`}>{children}</p>;
};
