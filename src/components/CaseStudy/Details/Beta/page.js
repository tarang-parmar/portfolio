import Image from "next/image";
const Beta = ({ id, name, description, image }) => {
  return (
    <div>
      <section id="cs-need">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12">
              <div className="cs-s-content-left">
                <h2>
                  <span>{id}</span>
                  {name}
                </h2>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 col-12"></div>
          </div>
        </div>
      </section>
      <section id="cs-result" style={{ marginBottom: 60 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12 col-12">
              <ul className="circle-list-style">
                {description?.map((des, index) => (
                  <div style={{ display: "flex" }} key={index}>
                    <i
                      class="bi bi-check-circle-fill"
                      style={{ color: "#f36d45", fontSize: "22px" }}
                    ></i>
                    <div>
                      <li> {des}</li>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12 col-12">
              <Image
                alt=""
                priority="true"
                className="img-fluid"
                src={image}
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beta;
