import React from "react";

const Header = () => {
  return (
    <header>
      <section className="container main-hero-container">
        <div className="row">
          <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-item-start">
            <h1 className="display-2">
              Online Payment Made <br /> Easy For YOu.
            </h1>
            <p className="main-hero-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              libero praesentium ducimus, voluptatibus alias tempore aspernatur
              at dolorum odio totam facilis animi corporis suscipit rerum
              voluptatum maxime pariatur eveniet quisquam?
            </p>
            <h3>Get early access for you</h3>
            <div className="input-group mt-3">
              <input
                type="text"
                className="rounded-pill w-75 me3 p-2 form-control-text"
              />
              <div className="input-group-text">Get it now</div>
            </div>
          </div>
          {/* main header right side */}
          <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-item-center">
            <img
              src="../images/hero1.jpg"
              alt="heroimg"
              className="img-fluid"
            />
            <img
              src="../images/hero4.jpg"
              alt="heroimg4"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
