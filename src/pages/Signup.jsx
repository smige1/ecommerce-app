import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { useFormik } from "formik";
import * as yup from 'yup';
import CustomInput from "../components/CustomInput";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userSlice";

const signUpSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required").nullable(),
  email: yup.string().nullable().email("Email is Required"),
  mobile: yup.string().required("Mobile No is Required"),
  password: yup.string().required("Password is Required"),
});

const Signup = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form
                  onSubmit={formik.handleSubmit}
                  action=""
                  className="d-flex flex-column gap-15"
                >
                  <CustomInput
                      type="Firstname"
                      name="Firstname"
                      placeholder="First Name"
                      Value={formik.values.firstname}
                      onChange={formik.handleChange("firstname")}
                      onBlur={formik.handleBlur("firstname")}
                    />
                    <div className="error">
                      {formik.touched.firstname && formik.errors.firstname}
                    </div>
                  <CustomInput
                      type="lastname"
                      name="lastname"
                      placeholder="Last Name"
                      className="form-control"
                      Value={formik.values.lastname}
                      onChange={formik.handleChange("lastname")}
                      onBlur={formik.handleBlur("lastname")}
                    />
                    <div className="error">
                      {formik.touched.lastname && formik.errors.lastname}
                    </div>
                  <CustomInput
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      Value={formik.values.email}
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("femail")}
                    />
                    <div className="error">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  <CustomInput
                      type="tel"
                      name="tel"
                      placeholder="Mobile Number"
                      className="form-control"
                      Value={formik.values.mobile}
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                    />
                    <div className="error">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>
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
                  <div>
                    <div className="mt-3 d-flex justify-content-center gap-10 align-items-center">
                      <button className="button border-0">Sign Up</button>
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

export default Signup;
