import { Box } from "@mui/material";
import Image from "next/image";
const HeroSection = ({
  PrimaryImage,
  title,
  description,
  // stacks,
  indrustyName,
}) => {
  return (
    <div>
      <section id="services-hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
              <div className="service-banner-left">
                <h2>{title}</h2>
                <p>{description}</p>
                <ul className="case-study-ul">
                  <li>
                    <h3>Industry</h3>
                    <span>{indrustyName}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
              <div className="service-banner-right">
                <Box height={"100%"} width={"100%"}>
                  <Image
                    alt=""
                    src={PrimaryImage}
                    width={300}
                    height={300}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                      maxWidth: "100vw",
                      maxHeight: "auto",
                    }}
                  />
                </Box>
          
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
