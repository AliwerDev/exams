import React, { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 5px;

  @media screen and (min-width: 999px) {
    width: 90%;
  }
  @media screen and (min-width: 1200px) {
    width: 80%;
  }
  @media screen and (min-width: 1300px) {
    width: 75%;
  }
  @media screen and (min-width: 1440px) {
    width: 70%;
  }
  @media screen and (min-width: 1920px) {
    width: 65%;
  }
`;

export default Wrapper;
