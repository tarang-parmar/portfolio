"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header/page";
import { case_study_data } from "@/helper/constant";
import CTAForm from "@/components/CTAForm/page";
import Main from "@/components/Main/page";
import Technology from "@/components/Technology/page";

export default function Home() {
  const router = useRouter();

  const handleBlog = (pathname) => {
    router.push(`/case-studies/${pathname}`);
  };

  return (
    <div>
      <Header />

      <div>
        <Main description="I'm frontend developer" />
      </div>

      <section id="service-exp">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12">
              <div className="service-exp-head">
                <h2>Technology Expertise</h2>
                <p>
                  {`I'm a React.js and JavaScript expert with 6+ years of
                  experience in frontend development.where innovation meets
                  elegance in every line of code`}
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 col-12">
              <div className="row carousel-main">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                  <div className="service-exp-item">
                    <h3>Front end</h3>
                    <ul>
                      <li>React</li>
                      <li>Next JS</li>
                      <li>Vue JS</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                  <div className="service-exp-item">
                    <h3>Database</h3>
                    <ul>
                      <li>Node JS</li>
                      <li>Mongo DB</li>
                      <li>My Sql</li>
                      <li>firebase</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                  <div className="service-exp-item">
                    <h3>Languages</h3>
                    <ul>
                      <li>JavaScript</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                  <div className="service-exp-item">
                    <h3>Project Mangement</h3>
                    <ul>
                      <li>Jira</li>
                      <li>slack</li>
                      <li>github</li>
                      <li>Gitlab</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-study-section">
        <h2 className="text-center mt-5 text-uppercase fs-1">Portfolio</h2>
        <div className="text-work-portfolio" />
        <div className="container mt-5">
          <div className="row">
            {case_study_data.map((item, index) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-12"
                  key={index}
                  onClick={() => handleBlog(item.details.pathname)}
                >
                  <div className="case-study-bx">
                    <div className="case-study-img">
                      <Image
                        priority="true"
                        className="img-fluid"
                        src={item.details.img}
                        alt=""
                        style={{  
                          objectFit: "cover",
                          width: "100%",
                          height: "300px",
                          maxWidth: "100vw",
                        }}
                      />
                      <span>{item.details.tag}</span>
                    </div>
                    <div className="case-study-bx-title">
                      <a href="#" className="text-decoration-none">
                        <span>{item.details.title}</span>
                      </a>
                      <ul className="tech-tags">
                        {item.details.tech_tag.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="my-5">
        <Technology />
      </section>

      <div id="contact-us" style={{ backgroundColor: "#e7f1f7", padding: 30 }}>
        <section style={{ paddingTop: 50 }}>
          <CTAForm
            title1="PARTNER FOR YOUR PROJECT?"
            title2="I AM READY!"
            subtitle="GET IN TOUCH"
          />
        </section>
      </div>
    </div>
  );
}
