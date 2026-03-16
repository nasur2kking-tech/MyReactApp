import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5">

      <div className="container text-center">

        <h2 className="mb-5">My Portfolio</h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow-lg h-100">

              <div className="card-body">

                <h5 className="card-title">Project 1</h5>
                <p className="card-text">React Website</p>

                <button className="btn btn-info">
                  View Project
                </button>

              </div>

            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-lg h-100">

              <div className="card-body">

                <h5 className="card-title">Project 2</h5>
                <p className="card-text">Portfolio Website</p>

                <button className="btn btn-info">
                  View Project
                </button>

              </div>

            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-lg h-100">

              <div className="card-body">

                <h5 className="card-title">Project 3</h5>
                <p className="card-text">Business Website</p>

                <button className="btn btn-info">
                  View Project
                </button>

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Portfolio;