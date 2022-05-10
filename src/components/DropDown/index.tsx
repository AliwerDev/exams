import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IRootState } from "../../redux/reducers";
import { colors } from "../../theme/colors";
type ItemType = {
  element: string | ReactNode;
  path?: string;
  click?: (...props: any) => void;
};
type directionType = "up" | "down" | "left" | "right";

const DropDown = ({
  children,
  list,
  direction = "down",
}: {
  children: ReactNode;
  list: ItemType[];
  direction?: directionType;
}) => {
  const [open, setOpen] = React.useState(false);
  const mode = useSelector((state: IRootState) => state.settings.mode);
  return (
    <StyledDropDown
      mode={mode}
      open={open}
      direction={direction}
      className="drop-down"
    >
      <div className="drop-button" onClick={() => setOpen(!open)}>
        {children}
      </div>
      {open && (
        <div className="drop-box">
          <div className="drop-box-list">
            {list.map((item, i) => (
              <div
                className="drop-box-item"
                onClick={item.click ? item.click : () => {}}
                key={i}
              >
                {item.path ? (
                  <Link to={"/" + item.path}>{item.element}</Link>
                ) : (
                  item.element
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </StyledDropDown>
  );
};

interface IProps {
  children: ReactNode;
  direction: directionType;
  open: boolean;
  mode: string;
}

const StyledDropDown = styled.div<IProps>(({ direction, open, mode }) => ({
  position: "relative",
  ".drop-box": {
    position: "absolute",
    ...(direction == "up"
      ? pos.upStyle
      : direction == "down"
      ? pos.downStyle
      : direction == "left"
      ? pos.leftStyle
      : pos.rightStyle),
  },
  ".drop-box-list": {
    padding: "5px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
    zIndex: "1",
    display: open ? "block" : "none",
    ".drop-box-item": {
      padding: "5px",
      fontSize: "18px",
      cursor: "pointer",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: mode === "light" ? "#fafafa" : colors.primary.light,
      },
    },
    ...(mode == "dark" && {
      backgroundColor: colors.primary.main,
      color: colors.background.light,
    }),
  },
}));

const pos = {
  upStyle: {
    top: 0,
    left: 0,
    transform: "translateY(-110%)",
  },
  downStyle: {
    top: 0,
    left: 0,
    transform: "translateY(110%)",
  },
  leftStyle: {
    top: 0,
    left: "100%",
    transform: "translateX(5px)",
  },
  rightStyle: {
    top: 0,
    right: "100%",
    transform: "translateX(-5px)",
  },
};

export default DropDown;
