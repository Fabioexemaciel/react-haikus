import React from "react";
import "./contactanos.css";
import LinkFooter from "./LinkFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

const Contactanos = () => {
    return (
      <div>
        <LinkFooter icono={faFacebook} texto="Facebook" />
      </div>
      <div>
        <LinkFooter icono={faEnvelope} texto="Contactanos" />
      </div>
      <div>
          <LinkFooter icono={faInstagramSquare} texto="Instagram" />
      </div>
    );
  };