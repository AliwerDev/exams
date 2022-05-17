import React, { useEffect, useState, useRef } from "react";
import { FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import instanceAxios, { errorMessege } from "../../services/api";
import StyledAuth from "./StyledAuth";

const LOGIN_URL = "auth/login";

const Login = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const { setAuth } = useAuth();

  useEffect(() => {
    userRef?.current?.focus();
  }, []);

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setErrMsg("");

    try {
      const respons = await instanceAxios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd })
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
            <p>Login Succesful</p>
            <Link to={"/"}>Go Home</Link>
          </section>
        ) : (
          <section>
            <p className={errMsg ? "err__msg" : "offelement"}>{errMsg}</p>

            <form onSubmit={handleSubmit}>
              <h1 className="title">
                Login <span className={loading ? "loader" : "hide"} />
              </h1>
              <div>
                <label htmlFor="username">
                  Username <span className="requ_icon">*</span>:{" "}
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username..."
                  required
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">
                  Password <span className="requ_icon">*</span>:{" "}
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password..."
                  required
                  onChange={(e) => setPwd(e.target.value)}
                />
              </div>
              <Button className="submit__button">Login</Button>
            </form>

            <p className="other">
              Don't have account? <Link to={"/auth/register"}>Register</Link>
            </p>
          </section>
        )}
      </div>
    </StyledAuth>
  );
};

export default Login;
