import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>traking</span> app
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            doloremque tempore placeat, nisi quae hic maiores labore est aperiam
            corporis?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Facilis veritatis dolorem nisi quasi saepe obcaecati, ipsa vitae
            voluptas iste consequuntur.
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
