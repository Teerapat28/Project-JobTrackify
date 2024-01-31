import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo, Main } from "../assets/components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Are you tired of juggling multiple job applications and losing track
            of your progress? Look no further – JobTrackify is here to simplify
            and streamline your job search journey.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <Main />
      </div>
    </Wrapper>
  );
};

export default Landing;
