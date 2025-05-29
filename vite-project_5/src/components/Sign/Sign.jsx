import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import Logo from "../../assets/imgs/12.png";
import "./Sign.scss";

const Sign = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Viet Email ma bro"),
    }),

    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://reqres.in/api/login",
          {
            email: values.email,
            password: values.password,
          },

          {
            headers: {
              "x-api-key": "reqres-free-v1",
            },
          }
        );
        navigate("/");
        console.log("Login success:", response.data.token);

        localStorage.setItem("token", response.data.token);
      } catch (error) {
        console.error("Loi ne: ", error);
        alert("Đăng nhập không thành công!");
      }
    },
  });
  return (
    <div>
      <div>
        <div className="lonomgin">
          <div className="login_header">
            <div className="login_header--logo">
              <img src={Logo} alt="" />
            </div>
            <div className="boxTMP"></div>
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
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.values.email && (
                  <p className="errorValidateEmail">{formik.errors.email}</p>
                )}
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
                {/* {formik.values.password && <p>{formik.errors.password}</p>} */}
                <br />
                <button className="signIn" type="submit">
                  Sign In
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
