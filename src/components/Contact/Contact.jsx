import React from "react";

const Contact = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container text-center">

        <h2 className="mb-4">Contact Me</h2>

        <form className="row g-3 justify-content-center">

          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>

          <div className="col-md-4">
            <input type="email" className="form-control" placeholder="Email" />
          </div>

          <div className="col-md-8">
            <textarea className="form-control" rows="4" placeholder="Message"></textarea>
          </div>

          <div className="col-12">
            <button className="btn btn-primary">
              Send Message
            </button>
          </div>

        </form>

      </div>
    </section>
  );
};

export default Contact;