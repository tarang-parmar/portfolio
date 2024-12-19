"use client";
import { useForm } from "react-hook-form";
//api import
import axios from "axios";

export default function CTAForm({ title1, title2, subtitle }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {},
  });

  const onSave = async (data) => {
    const formData = new FormData();
    formData.append("name", data.firstName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("description", data.description);
    formData.append("service", "");

    await axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/send-email/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data) {
          reset();
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
        <p className="text-center mb-2 fs-5 text-getquaote">{subtitle}</p>
        <h1 className="text-center mb-4">
          {title1}
          <br />
          {title2}
        </h1>
        <form
          className="lets-talk-form"
          onSubmit={handleSubmit((data) => onSave(data))}
        >
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 col-12">
              <p>
                <label htmlFor="fname">
                  Name <span>*</span>
                </label>
                <input
                  id="fname"
                  {...register("firstName", { required: true })}
                />
              </p>
            </div>
            <div className="col-lg-12 col-sm-12 col-xs-12 col-12">
              <p>
                <label htmlFor="lname">
                  Your Email<span>*</span>
                </label>
                <input
                  id="lname"
                  type="email"
                  {...register("email", { required: true })}
                />
              </p>
            </div>
            <div className="col-lg-12 col-sm-12 col-xs-12 col-12">
              <p>
                <label htmlFor="phoneNo">Your Phone Number</label>

                <input id="phoneNo" type="number" {...register("phone")} />
              </p>
            </div>
            <div className="col-lg-12 col-sm-12 col-xs-12 col-12">
              <p>
                <label htmlFor="projectDesc">
                  Project Description<span>*</span>
                </label>
                <textarea
                  id="projectDesc"
                  {...register("description", { required: true })}
                />
              </p>
            </div>
            <div className="col-lg-12 col-sm-12 col-xs-12 col-12">
              <p>
                <label htmlFor="secure">100% confidential and secure</label>
              </p>
            </div>
          </div>
          <div className="col-lg-12 col-12 text-center">
            <button type="submit" className="primary-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
