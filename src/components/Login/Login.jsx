/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target.elements;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Login Here</h1>
          </div>
          <div
            className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100"
            style={{ width: "25rem" }}
          >
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
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
                  className="input input-bordered"
                  required
                />
                <p className="text-center mt-4">
                  Don't have an account?{" "}
                  <Link className="font-bold text-error" to="/register">
                    Register Now
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success">
                  <p className="font-bold text-xl text-white">Login</p>
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="text-center">
              <button
                className="btn btn-circle btn-neutral text-2xl mb-8 font-bold"
                style={{ color: "#a4eac2" }}
              >
                G
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
