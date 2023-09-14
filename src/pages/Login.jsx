import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';
import CustomInput from "../components/CustomInput";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";

const loginSchema = yup.object({
  email: yup.string().email("Email is Required")
  .required('Email Address id required'),
  password: yup.string().required("Password is Required"),
});



const Login = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  return (
    <>
      <Meta title={"login"} />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
          
                  <CustomInput
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                    />
                    <div className="error">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  <div>
                  <CustomInput
                      type="password"
                      name="password"
                      placeholder="password"
                      className="form-control"
                      Value={formik.values.password}
                      onChange={formik.handleChange("password")}
                      onBlur={formik.handleBlur("password")}
                    />
                    <div className="error">
                      {formik.touched.password && formik.errors.password}
                    </div>
                  </div>
                  <div>
                    <Link to="/forget-password">Forget Password?</Link>

                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                        <button className="button border-0">Login</button>
                        <Link to="/signup" className="button signup">SignUp</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
