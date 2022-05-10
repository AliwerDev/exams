import React, { FC, ReactNode } from "react";
import { useSelector } from "react-redux";

import styled, { css } from "styled-components";
import { IRootState } from "../../redux/reducers";
import { colors } from "../../theme/colors";
interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className }) => {
  const mode = useSelector((store: IRootState) => store.settings.mode);
  return (
    <StyledCard className={className} mode={mode}>
      {children}
    </StyledCard>
  );
};

interface PropsStyle {
  mode: string;
}

const StyledCard = styled.div<PropsStyle>`
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background: ${colors.background.main};
  color: ${colors.primary.main};
  ${({ mode }) =>
    mode === "dark" &&
    `
      background: ${colors.primary.main};
      color: #fff;
    `};
`;

export default Card;
