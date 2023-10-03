import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";
import * as yup from "yup"
import {useFormik} from "formik"
import CustomInput from "../components/CustomInput";
import { useDispatch } from "react-redux";
import {createQuery} from "../features/contact/contactSlice"

const contactSchema = yup.object({
  name: yup.string().required("Name is Required"),
  mobile: yup.string().default('').nullable().required("MObile Number is Required"),
  email: yup.string().nullable().email("Email should be valid").required("Email is Required"),
  comment: yup.string().default('').nullable().required("Comment is Required"),
});

const Contact = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      comment: ""
    },
    validationSchema:contactSchema,
    onSubmit: values => {
    dispatch(createQuery({name:values.name, email:values.email, mobile:values.mobile, comment:values.comment}))
    },
  });
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15826.268876352724!2d3.9073036570928954!3d7.402291200000019!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1693418340105!5m2!1sen!2sng"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h4 className="contact-title mb-4">Contact</h4>
                  <form action="" className="d-flex flex-column gap-15" onSubmit={formik.handleSubmit}>
                    <div>
                      <CustomInput
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name= "name"
                        onChange={formik.handleChange("name")}
                        onBlur= {formik.handleBlur("name")}
                        value={formik.values.name}
                      />
                      <div className="errors">
                        {
                          formik.touched.name && formik.errors.name
                        }
                      </div>
                    </div>
                    <div>
                    <CustomInput
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name= "email"
                        onChange={formik.handleChange("email")}
                        onBlur= {formik.handleBlur("email")}
                        value={formik.values.email}
                      />
                      <div className="errors">
                        {
                          formik.touched.email && formik.errors.email
                        }
                      </div>
                   
                    </div>
                    <div>
                    <CustomInput
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                        name= "mobile"
                        onChange={formik.handleChange("mobile")}
                        onBlur= {formik.handleBlur("mobile")}
                        value={formik.values.mobile}
                      />
                      <div className="errors">
                        {
                          formik.touched.mobile && formik.errors.mobile
                        }
                      </div>
                    </div>
                    <div>
                      <textarea
                        id=""
                        cols="30"
                        rows="4"
                        name= "comment"
                        className="w-100 form-control"
                        placeholder="Comment..."
                        onChange={formik.handleChange("comment")}
                        onBlur= {formik.handleBlur("comment")}
                        value={formik.values.comment}
                      ></textarea>
                      <div className="errors">
                        {
                          formik.touched.comment && formik.errors.comment
                        }
                      </div>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h4 className="contact-title">Get in touch with us</h4>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        10, Fiwasaye Area Osogbo Osun State
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+2348036581503">+2348036581503</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:egimsikana@gmail.com">egimsikana@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday-saturday 10AM-10PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
