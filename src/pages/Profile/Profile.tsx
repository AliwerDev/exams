import { get } from "lodash";
import { connect } from "react-redux";
import Wrapper from "../../containers/Wrapper";
import { IRootState } from "../../redux/reducers";
import StyledProfile from "./StyledProfile";

const Profile = ({ mode }: { mode: string }) => {
  return <StyledProfile mode={mode}></StyledProfile>;
};

const mapStateToProps = (state: IRootState) => {
  return {
    mode: get(state, "settings.mode", "light"),
  };
};
const mapDispatchToProps = (dispatch: () => {}) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
