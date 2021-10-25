import React from "react";
import "./Footer.css";
import LinkFooter from "./LinkFooter";
import { faEnvelope, faShare } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div>
        <LinkFooter icono={faEnvelope} texto="Contactanos" />
      </div>
      <div>
        <LinkFooter icono={faShare} texto="Compartir" />
      </div>
    </footer>
  );
};

export default Footer;
