import React from "react";

interface CardProps {
  title: string;
  content: string;
}

export const Card = ({ title, content }: CardProps) => {
  if (!title || !content) {
    return null;
  }
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </>
  );
};
