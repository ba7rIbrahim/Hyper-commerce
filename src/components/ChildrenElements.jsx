import React from "react";

export default function ChildrenElements({ children }) {
  console.log(children);
  return <div>{children}</div>;
}
