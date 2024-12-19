/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CaseStudyView = ({ data, isStatic }) => {
  const router = useRouter();
  console.log("7>>>", data);

  const handleBlog = (pathname) => {
    console.log(pathname);
    const decodedPathname = decodeURIComponent(pathname);
    router.push(`/case-studies/${decodedPathname?.replace(/ /g, "-")}`);
  };

  return (
    <>
      {data?.map((item, index) => {
        console.log(item);
        return (
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-12"
            key={index}
            onClick={() =>
              handleBlog(
                isStatic === "static-data"
                  ? item?.introduction?.pathname
                  : item.name
              )
            }
          >
            <div className="case-study-bx">
              <div className="case-study-img">
                <img
                  className="img-fluid"
                  src={item?.coverImage}
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "300px",
                    maxWidth: "100vw",
                  }}
                />
                <span>{item?.category}</span>
              </div>
              <div className="case-study-bx-title">
                <a href="#" className="text-decoration-none">
                  <span className="title">{item?.introduction?.title}</span>
                </a>
                <ul className="tech-tags">
                  {item?.techStack?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CaseStudyView;
