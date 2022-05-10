import React, { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 5px;

  @media screen and (min-width: 768px) {
    width: 90%;
  }
  @media screen and (min-width: 769px) {
    width: 80%;
  }
  @media screen and (min-width: 1024px) {
    width: 75%;
  }
  @media screen and (min-width: 1280px) {
    width: 70%;
  }
  @media screen and (min-width: 1440px) {
    width: 65%;
  }
  @media screen and (min-width: 1920px) {
    width: 60%;
  }
`;

export default Wrapper;
