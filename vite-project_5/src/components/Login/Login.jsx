import { useEffect } from "react";
import { Formik, useFormik, validateYupSchema } from "formik";
import { Logo } from "../../assets/imgs/12.png";
import * as Yup from "yup";
import "./Login.scss";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, "4 ki tu tro len ban oi")
        .required("Required"),
      password: Yup.string().min(8, "8 ki tu nhe bro oi").required("Required"),
    }),
  });

  console.log(formik.errors);

  return (
    <div>
      <div className="lonomgin">
        <div className="login_header">
          <div className="login_header--logo">
            <img src={Logo} alt="" />
          </div>
        </div>

        <div className="login_box">
          <div className="login_box--title">
            <p>Sign In</p>
          </div>
          <section>
            <form onSubmit={formik.handleSubmit}>
              <label>Username</label>
              <br />
              <input
                className="inputLogin"
                type="text"
                name="username"
                id="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.values.username && <p>{formik.errors.username}</p>}
              <br />
              <label>Password</label>
              <br />
              <input
                className="inputLogin"
                type="password"
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.values.password && <p>{formik.errors.password}</p>}
              <br />
              <button className="signIn" type="submit">
                Sign In
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
