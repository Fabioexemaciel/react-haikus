import React from "react";
import "./contactanos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

const Contactanos = () => {
    return (
      <>
      <div className="ContactanosIconos">
        <FontAwesomeIcon icon={faFacebook} id="Facebook" />
        <FontAwesomeIcon icon={faEnvelope} id="Contactanos" />
          <FontAwesomeIcon icon={faInstagramSquare} id="Instagram" />
      </div>
      <div>
        <p className="TextoContactenos">
          Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. <br /> Praesentium, dolorem! Consectetur <br /> architecto quos facilis dolorem perferendis <br /> reiciendis dolor cum, doloremque molestiae, <br /> recusandae unde possimus, accusamus <br /> ullam ea obcaecati quis in?
        </p>
      </div>
      </>
    );
  };

  export default Contactanos;