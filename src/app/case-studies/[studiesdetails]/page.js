"use client";
//relative path import
import HeroSection from "@/components/CaseStudy/Details/HeroSection/page";
import Alpha from "@/components/CaseStudy/Details/Alpha/page";
import Beta from "@/components/CaseStudy/Details/Beta/page";

//constant data import
import { caseStudy_list, case_study_data } from "@/helper/constant";
import CaseStudyHome from "@/components/CaseStudy/CaseStudyHome";
import CaseStudyHeader from "@/components/Header/CaseStudy/page";

export default function CaseStudyDetails({ params }) {
  const data = caseStudy_list.filter((e) => e.brand === params.studiesdetails);
  const banner = case_study_data.filter(
    (e) => e.details.pathname === params.studiesdetails
  );

  return (
    <>
      <CaseStudyHeader />
      <section className="case-study-home-banner">
        <CaseStudyHome
          img={banner[0].details.img.src}
          title={banner[0].details.title}
          techStack={banner[0].details.tech_tag}
        />
      </section>
      <HeroSection
        title={data[0].hero.title}
        description={data[0].hero.description}
        PrimaryImage={data[0].hero.img}
        stacks={[]}
        indrustyName={data[0].hero.industry_type}
      />

      {/* backstory  */}
      <Alpha
        id={data[0].backStory?.id}
        name={data[0].backStory?.title}
        image={data[0].backStory?.img}
        description={data[0].backStory?.description}
      />
      {/* challange */}
      <Beta
        id={data[0].challange?.id}
        name={data[0].challange?.title}
        image={data[0].challange?.img}
        description={data[0].challange?.description}
      />
      {/* <HomeBanner /> */}
      {/* solution */}
      <Alpha
        id={data[0].solution?.id}
        name={data[0].solution?.title}
        image={data[0].solution?.img}
        description={data[0].solution?.description}
      />
      {/* result */}
      <Beta
        id={data[0].result?.id}
        name={data[0].result?.title}
        image={data[0].result?.img}
        description={data[0].result?.description}
      />
    </>
  );
}
