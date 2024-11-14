import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    userLogin(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        alert(" Sign-in Successfully");
        console.log(user);
        // ...
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        // const errorMessage = error.message;
        // alert(errorCode);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="input rounded-none bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input rounded-none bg-[#F3F3F3]"
              required
            />
            <label className="label">
              {error.login && (
                <p className="text-red-600 text-sm "> {error.login} </p>
              )}{" "}
            </label>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="text-sm text-center font-semibold">
          Dont’t Have An Account ?{" "}
          <Link state={location} to="/auth/register" className="text-red-600">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
