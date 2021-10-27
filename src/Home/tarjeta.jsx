import React from "react";
import "./tarjeta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const Tarjeta = () => {
    return (
      <div className="Tarjeta">
        <div className="ImagenTarjeta">
          <img src={`https://picsum.photos/500/300`} alt="ImagenHaiku" />
        </div>
        <div className="CuerpoTarjeta">
          <div className="InfoTarjeta">
            <img src={`https://picsum.photos/32/32`} alt="PerfilHaiku" />
            <h4>Titulo del Haiku</h4>
          </div>
          <FontAwesomeIcon icon={faShareAlt} className="IconoCompartirTarjeta" />
        </div>
      </div>
    );
  };

  export default Tarjeta;