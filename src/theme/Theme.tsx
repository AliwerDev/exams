import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { get } from "lodash";
import { connect } from "react-redux";
import { IRootState } from "../redux/reducers";

const Theme = ({ mode, children }: { mode: string; children: ReactNode }) => {
  return (
    <ThemeProvider theme={{ mode }}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
const mapStateToProps = (state: IRootState) => {
  return {
    mode: get(state, "settings.mode", "light"),
  };
};
const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
