export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg=6 col-md-6 col-sm-6 col-12">
            <p className="fs-6">Made Love with Parth A</p>
          </div>
          <div className="col-lg=6 col-md-6 col-sm-6 col-12">
            <ul className="footer-social-media">
              <li>
                <a
                  target="_blank"
                  aria-label="linkedin-logo"
                  href="https://www.linkedin.com/in/parth-frontend"
                >
                  <i className="bi bi-linkedin" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  aria-label="linkedin-logo"
                  href="https://wa.me/919537630281"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
