import { technology_1, technology_2 } from "@/helper/constant";
import Marquee from "react-fast-marquee";

export default function Technology() {
  return (
    <section>
      {/* <p className="text-center display-5 fw-bold text-uppercase ">
        technology expertise
      </p> */}

      <Marquee
        style={{
          display: "flex",
          marginTop: 50,
        }}
      >
        {technology_1.map((item, index) => (
          <span key={index} className="display-5 fw-bold marquee-text">
            {item}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
