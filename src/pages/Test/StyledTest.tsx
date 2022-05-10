import styled from "styled-components";
import { colors } from "../../theme/colors";

interface IProps {
  mode: string;
  open: boolean;
}
const asideWidth = 400;

const StyledTest = styled.div<IProps>`
  display: flex;
  overflow: hidden;
  position: relative;
  .main {
    width: ${({ open }) => (open ? `calc(100% - ${asideWidth}px)` : "100%")};
    min-height: 100vh;
    padding: 20px;
    background: ${colors.background.light};
    transition: width 0.3s ease-in-out;
  }
  .test {
    width: 100%;
    max-width: 900px;
    margin: 20px auto;
    font-size: 18px;

    .test-box {
      margin-bottom: 20px;
      border-bottom: 1px solid #fefefe3b;
    }
    .question {
      font-size: 20px;
      margin-bottom: 10px;
    }
    .ans-item {
      width: 100%;
      min-height: 40px;
      display: flex;
      align-items: center;
      padding: 10px;
      cursor: pointer;
      transition: all 0.1s ease-in-out;

      &.active {
        background: ${colors.secondary.main} !important;
        color: #fefefe;
      }
      &:hover {
        background: rgba(255, 101, 14, 0.3);
      }
    }

    .char {
      font-weight: bold;
      font-size: 20px;
    }
  }
  .test_title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .openBtn {
    position: absolute;
    top: 5px;
    left: 0;
    transform: translateX(-100%);
    z-index: 1;
    display: ${({ open }) => (open ? "none" : "block")};
  }
  .times_aside svg {
    font-size: 24px;
    cursor: pointer;
    ${({ mode }) =>
      mode === "dark" ? "color: #fff" : `color: ${colors.primary.dark}`};
  }
  .controle {
    min-height: 100vh;
    right: ${({ open }) => (open ? 0 : -asideWidth)}px;
    top: 0;
    display: flex;
    flex-direction: column;
    width: ${asideWidth}px;
    background: #fff;
    position: fixed;
    z-index: 1;
    transition: right 0.3s ease-in-out;

    .controle-header {
      padding: 10px 20px;
      border-bottom: 1px solid #e5e5e573;
    }

    .controle-body {
      flex: 1;
      padding: 20px;
      .tests_buttons {
        padding: 10px 0;
        display: flex;
        align-items: start;
        flex: 1;
        gap: 10px;
        flex-wrap: wrap;
        button {
          margin-bottom: 10px;
        }
      }
      .controle_footer {
        width: 100%;
        padding-top: 15px;
      }
    }
  }

  ${({ mode }) =>
    mode == "dark" &&
    `
    color: #fff;
    .main{
      background: ${colors.primary.dark};
    }
    .controle{
      background: ${colors.primary.main};
    }
    background: ${colors.primary.dark};
  `}

  @media screen and (max-width: 800px) {
    .main {
      width: 100%;
    }
  }
`;

export default StyledTest;
