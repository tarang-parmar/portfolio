export default function Main() {
  return (
    <>
      <section className="main-section-bg-image position-relative main-section-view">
        <div className="container z-0">
          <p className="display-4 fw-bolder text-dark ">
            Parth <span style={{ color: "#f36d45" }}>A.</span>
            <br />
            <span style={{ color: "#f36d45" }} className="fs-1">
              Frontend<span style={{ color: "#000" }}> Developer</span>
            </span>
          </p>
          <div className="mt-3">
            <span className="fs-4">
              {`Let's build`}{" "}
              <span style={{ color: "#f36d45" }}>something</span>
              <br />
              <span style={{ marginLeft: "60px" }}>
                extraordinary
                <span style={{ color: "#f36d45" }}> together</span>
              </span>
            </span>
          </div>
          <div className="mt-5">
            <a href="https://calendly.com/parth82-patel/30min" target="_blank">
              <button className="primary-btn fw-bold">schedule a call</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
