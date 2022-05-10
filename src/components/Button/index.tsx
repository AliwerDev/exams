import React, { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IRootState } from "../../redux/reducers";
import { colors } from "../../theme/colors";

interface IProps {
  children: ReactNode | string;
  variant?: "primary" | "secondary" | "error" | "warning" | "success";
  size?: "small" | "medium" | "large";
  isIcon?: boolean;
  mode?: string;
  onClick?: () => void;
  className?: string;
}

const Button: FC<IProps> = ({
  size = "medium",
  variant = "primary",
  children,
  ...props
}) => {
  const mode = useSelector((state: IRootState) => state.settings.mode);
  return (
    <Styled size={size} variant={variant} {...props} mode={mode}>
      {children}
    </Styled>
  );
};

const Styled = styled.button<IProps>`
  cursor: pointer;
  border: 1px solid;
  outline: none;
  backdrop-filter: blur(20px);
  padding: ${({ size, isIcon }) =>
    isIcon
      ? 0
      : size === "small"
      ? "5px 10px"
      : size == "medium"
      ? "10px 20px"
      : "15px 30px"};
  border-radius: ${({ size, isIcon }) =>
    isIcon
      ? "50%"
      : (size === "small" && "5px") || size == "medium"
      ? "5px"
      : "10px"};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 10px;
  font-size: 16px;
  display: ${({ isIcon }) => (isIcon ? "flex" : "inline-block")};
  justify-content: center;
  align-items: center;
  ${({ size, isIcon }) =>
    isIcon &&
    `
    width: ${size === "small" ? "60px" : size == "medium" ? "40px" : "50px"};
    height: ${size === "small" ? "60px" : size == "medium" ? "40px" : "50px"};
  `}
  background: ${({ variant, mode }) =>
    variant === "primary" && mode === "dark"
      ? colors.primary.main
      : variant === "primary" && mode === "light"
      ? colors.background.light
      : variant === "secondary"
      ? colors.secondary.main
      : variant === "error"
      ? colors.error.main
      : variant === "warning"
      ? colors.warning.main
      : variant === "success"
      ? colors.success.main
      : colors.primary.main};
  border-color: ${({ variant, mode }) =>
    variant === "primary" && mode === "dark"
      ? colors.primary.dark
      : variant === "primary" && mode === "light"
      ? colors.primary.main
      : variant === "secondary"
      ? colors.secondary.dark
      : variant === "error"
      ? colors.error.dark
      : variant === "warning"
      ? colors.warning.dark
      : variant === "success"
      ? colors.success.dark
      : colors.primary.dark};
  & i,
  & svg,
  & a,
  & {
    color: ${({ mode, variant }) =>
      variant === "primary"
        ? mode === "dark"
          ? "#fff"
          : colors.primary.main
        : "#fff"};
  }
`;

export default Button;
