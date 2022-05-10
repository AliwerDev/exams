import { FC } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../theme/colors";
const asideWidth = 300;

interface Props {
  children: React.ReactNode;
  mode?: string;
  open?: boolean;
}

export const StyledLayout = styled.div<Props>`
  display: flex;
  position: relative;
  aside {
    width: ${asideWidth}px;
    position: absolute;
    top: 0;
    left: ${({ open }) => (open ? 0 : -asideWidth)}px;
    background-color: ${colors.background.dark};
    display: flex;
    flex-direction: column;
    transition: left 0.3s ease-in-out;
    .aside-box {
      width: 100%;
      height: 100%;
      padding: 20px 10px;
      position: relative;
      min-height: 100vh;

      .settings-box {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 10px;
        width: 100%;
        .setting {
          animation: routing 5s linear;
          animation-iteration-count: infinite;
        }
        a {
          font-size: 24px;
          cursor: pointer;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }

    .list {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin-top: 20px;
    }
    .list-item {
      margin-bottom: 10px;
      padding: 10px 20px;
      border-radius: 5px;
      background-color: ${colors.background.light};
      color: ${colors.primary.dark};
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
      a {
        color: ${colors.primary.dark};
        font-size: 16px;
        font-weight: 600;
        &:hover {
          text-decoration: underline;
        }
      }
      &:hover {
        background-color: #fafafa;
      }
    }
  }

  main {
    background: ${colors.background.light};
    color: ${colors.primary.dark};
    width: 100%;
    min-height: 100vh;
    padding: 20px;
  }

  @media screen and (min-width: 990px) {
    aside {
      width: ${asideWidth}px;
      position: static;
      .times {
        display: none;
      }
    }
    main {
      width: calc(100% - ${asideWidth}px);
    }
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    `
        aside{
            background-color: ${colors.primary.dark};
            color: #fff;

            .list-item{
              background-color: ${colors.primary.main};
              color: #fff;
              a{
                color: #fff;
              }
              &:hover{
                background-color: ${colors.primary.light};
              }
            }
        }
        main{
          background-color: ${colors.primary.main};
          color: #fff;
        }
    `}

  @keyframes routing {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
