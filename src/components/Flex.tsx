import React, { ReactNode } from "react";
import styled from "styled-components";

type method =
  | "flex-start"
  | "end"
  | "start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

const Flex = ({
  direction = "row",
  justify = "flex-start",
  align = "start",
  children,
  className,
}: {
  children: ReactNode;
  justify?: method;
  align?: method;
  direction?: "column" | "row";
  className?: string;
}) => {
  return (
    <div
      className={className}
      style={{
        flexDirection: direction,
        display: "flex",
        justifyContent: justify,
        alignItems: align,
      }}
    >
      {children}
    </div>
  );
};
export default Flex;
