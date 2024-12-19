export default function CaseStudyHome({ title, description, img, techStack }) {
  return (
    <div
      className="case-study-banner rocket-lazyload lazyloaded case-study-banner-img"
      style={{
        background: `url(${img ?? "/assets/images/banner.jpg"})`,
        backgroundSize: "contain",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-12 banner-content">
            <div className="case-study-banner-left-box">
              <h2>{title}</h2>
              <p>{description} </p>
              <div className="row">
                {techStack?.map((item, index) => {
                  return (
                    <div key={index} className="col-xl-5">
                      <div
                        key={index}
                        className="d-flex align-items-center gap-2"
                      >
                        <i
                          class="bi bi-check-circle-fill"
                          style={{ color: "#f36d45", fontSize: "22px" }}
                        ></i>
                        <span style={{ color: "#fff" }}>{item}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
