import styled from "styled-components";

const StyledAuth = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  background-color: #fafafa;
  padding: 20px 10px;

  .logo {
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    img {
      width: 150px;
    }
  }

  section {
    width: 100%;
    max-width: 500px;
    padding: 20px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    .loader {
      display: inline-block;
      width: 20px;
      height: 20px;
    }
    .loader:after {
      content: " ";
      display: block;
      width: 16px;
      margin-left: 10px;
      height: 16px;
      border-radius: 50%;
      border: 3px solid #00fbff;
      border-color: #00fbff transparent #00fbff transparent;
      animation: loading 1.2s linear infinite;
    }
    @keyframes loading {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
    }

    .err__msg {
      padding: 10px;
      border-radius: 5px;
      background-color: #ff00003b;
      color: #f00;
      margin-bottom: 10px;
    }

    input {
      outline: none;
      border: none;
      border: 1px solid #ccc;
      padding: 10px 20px;
      border-radius: 5px;
      width: 100%;
      font-size: 1rem;
      margin: 10px 0;
    }
    .label {
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 5px;
      margin-top: 15px;
    }
    .info__user {
      background: #cccccc;
      padding: 5px;
      border-radius: 5px;
      font-size: 0.8rem;
      color: #000000;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        color: red;
      }
    }
    .hide,
    .offelement {
      display: none;
    }
    .requ_icon {
      color: #f00;
      margin-left: 5px;
      font-size: large;
    }

    .submit__button {
      width: 100%;
      margin-top: 15px;
    }

    .other {
      margin-top: 15px;
      font-size: small;
      font-weight: bold;
    }
  }
`;

export default StyledAuth;
