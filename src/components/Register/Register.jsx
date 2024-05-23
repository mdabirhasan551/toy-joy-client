/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target.elements;
    const name = form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        createdUser.displayName = name;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Registered",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(createdUser);
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "<p>Please try again with valid credentials</p>",
        });
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Register Here</h1>
          </div>
          <div
            className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100"
            style={{ width: "25rem" }}
          >
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="displayName"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  Already have an account?{" "}
                  <Link className="font-bold text-success" to="/login">
                    Login
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error">
                  <p className="font-bold text-xl text-white">Register</p>
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
      <Footer />
    </div>
  );
};

export default Register;
