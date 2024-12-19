"use client";
import Image from "next/image";
//contant data import
import { case_study_data } from "@/helper/constant";
import { useRouter } from "next/navigation";
import CaseStudyHome from "@/components/CaseStudy/CaseStudyHome";

export default function CaseStudy() {
  const router = useRouter();

  const handleBlog = (pathname) => {
    router.push(`/case-studies/${pathname}`);
  };

  return (
    <div>
      <section className="case-study-home-banner">
        <CaseStudyHome
          title="Case Studies"
          description="Reduce development costs to increase profits without compromise. With a huge pool of talented and experienced technology experts."
        />
      </section>

      {/* case study box section starts  */}
      <section id="case-study-section">
        <div className="container">
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
    </div>
  );
}
