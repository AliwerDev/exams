import { get } from "lodash";
import React from "react";
import { connect } from "react-redux";
import { IRootState } from "../../redux/reducers";

const Exams = () => {
  return <div>Exams</div>;
};

const mapStateToProps = (state: IRootState) => {
  return {
    mode: get(state, "settings.mode", "light"),
  };
};
const mapDispatchToProps = (dispatch: () => {}) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Exams);
