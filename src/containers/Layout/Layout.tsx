import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import Flex from "../../components/Flex";
import { StyledLayout } from "./Styledlayaut";
import { FiMoon, FiSettings, FiUser, FiX } from "react-icons/fi";
import DropDown from "../../components/DropDown";
import { connect } from "react-redux";
import { get } from "lodash";
import { IRootState } from "../../redux/reducers";
import { Types } from "../../redux/types";

const navlinks = [
  {
    name: "Exams",
    path: "/exams",
  },
  {
    name: "My exams",
    path: "/myexams",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Profile",
    path: "/profile",
  },
];

const Layout = ({
  children,
  setMode,
  mode,
}: {
  children: ReactNode;
  mode: string;
  setMode: (mode: string) => void;
}) => {
  const [open, setOpen] = React.useState(true);

  const changeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <StyledLayout open={open}>
      <aside>
        <div className="aside-box">
          <Flex justify="space-between" align="center">
            <img
              src={
                mode === "dark"
                  ? "/images/logo/logo_white_large.png"
                  : "/images/logo/logo_large.png"
              }
              style={{ width: "150px" }}
              alt="exams"
            />
            <button
              className="icon-button times"
              onClick={() => setOpen(false)}
            >
              <FiX />
            </button>
          </Flex>

          <div className="list">
            {navlinks.map((link) => (
              <Link className="list-item" key={link.name} to={link.path}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="settings-box">
            <div className="list-item">
              <Flex justify="space-between" align="center">
                <Link to="/profile">
                  <FiUser />
                </Link>
                <DropDown
                  direction="left"
                  list={[
                    { element: <FiMoon />, click: changeMode },
                    { element: "Test", path: "test" },
                  ]}
                >
                  <a>
                    <FiSettings className="setting" />
                  </a>
                </DropDown>
              </Flex>
            </div>
          </div>
        </div>
      </aside>
      <main>{children}</main>
    </StyledLayout>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    mode: get(state, "settings.mode", "light"),
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  setMode: (mode: string) => dispatch({ type: Types.SET_THEME, payload: mode }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
