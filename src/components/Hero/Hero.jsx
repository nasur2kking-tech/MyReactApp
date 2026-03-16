import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import "./Hero.css";
import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <section className="hero-section">

      <div className="container-fluid">

        <div className="row align-items-center hero-row">

          {/* LEFT SIDE */}
          <div className="col-md-6 hero-left">

            <h5>Hi, I am</h5>

            <h1 className="hero-name">
              Nasurudeen
            </h1>

            {/* TYPING ANIMATION */}
            <p className="hero-role">

              <ReactTyped
                strings={[
                  "Front-end Developer",
                  "React Developer",
                  "UI Designer",
                  "Website Creator",
                  "Back-end Developer"

                ]}
                typeSpeed={80}
                backSpeed={40}
                loop
              />

            </p>

            <div className="hero-icons">

              <a href="#">
                <FaEnvelope />
              </a>

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 hero-right">

            <img
              src={profile}
              alt="profile"
              className="hero-img"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;