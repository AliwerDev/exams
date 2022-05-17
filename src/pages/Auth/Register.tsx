import React, { useEffect, useState, useRef } from "react";
import { FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import instanceAxios, { errorMessege } from "../../services/api";
import StyledAuth from "./StyledAuth";

type Inputs = {
  username: string;
  password: string;
};

const REGISTER_URL = "auth/register";

const Register = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  // const [ ] = useState("");

  useEffect(() => {
    userRef?.current?.focus();
  }, []);

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);

  const [fullName, setFullName] = useState("");

  useEffect(() => {
    if (user.length >= 4 && user.length <= 20) {
      setValidUser(true);
    } else {
      setValidUser(false);
    }
  }, [user]);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  useEffect(() => {
    if (pwd.length >= 8 && pwd.length <= 20) {
      setValidPwd(true);
    } else {
      setValidPwd(false);
    }
  }, [pwd]);

  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validUser || !validPwd) {
      !validUser && userRef?.current?.focus();
      !validPwd && pwdRef?.current?.focus();
      return;
    }

    setLoading(true);
    setErrMsg("");

    try {
      const respons = await instanceAxios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd, fullName })
      );

      console.log(respons?.data);
      setPwd("");
      setUser("");
      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setErrMsg(errorMessege(err));
      setSuccess(false);
      setLoading(false);
    }
  };

  return (
    <StyledAuth>
      <div>
        <div className="logo">
          <img src="/images/logo/logo_large.png" alt="logo" />
        </div>
        {success ? (
          <section>
            <p>Register Succesful</p>
            <Link to={"/auth/login"}>Login</Link>
          </section>
        ) : (
          <section>
            <p className={errMsg ? "err__msg" : "offelement"}>{errMsg}</p>

            <form onSubmit={handleSubmit}>
              <h1 className="title">
                Register <div className={loading ? "loader" : "hide"} />
              </h1>
              <div>
                <label htmlFor="fullname">
                  FullName: <span className="requ_icon">*</span>{" "}
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="fullname..."
                  required
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="username">
                  Username: <span className="requ_icon">*</span>{" "}
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username..."
                  required
                  onChange={(e) => setUser(e.target.value)}
                />
                <p className={!validUser && user ? "info__user" : "hide"}>
                  <FiInfo /> UserName length is (4, 20), and must be unique
                </p>
              </div>
              <div>
                <label htmlFor="password">
                  Password: <span className="requ_icon">*</span>{" "}
                </label>
                <input
                  type="password"
                  ref={pwdRef}
                  name="password"
                  id="password"
                  placeholder="Password..."
                  required
                  onChange={(e) => setPwd(e.target.value)}
                />
                <p className={!validPwd && pwd ? "info__user" : "hide"}>
                  <FiInfo /> Password is required and must length be (8, 20)
                </p>
              </div>
              <Button className="submit__button">Register</Button>
            </form>

            <p className="other">
              Already have an account? <Link to={"/auth/login"}>Login</Link>
            </p>
          </section>
        )}
      </div>
    </StyledAuth>
  );
};

export default Register;
