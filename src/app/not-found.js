import Link from "next/link";
export default function NotFound() {
  return (
    <div>
      <section id="services-hero-section">
        <div
          className="container"
          style={{ margin: "40px auto", textAlign: "center" }}
        >
          <div className="row">
            <div className="col-12">
              <div className="service-banner-left">
                <h1 style={{ color: "#f36d45" }}> 404</h1>
                <h1>Oops! Page Not Found</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 text-left">
              <Link href="/" className="text-decoration-none">
                <button className="btn big-button">Back to Home</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
