import React, { useState } from "react";
import "./tarjeta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

const Tarjeta = ({Haiku, autor}) => {
  const [invisible, setInvisible] = useState(true);
  const cambiarVisibilidad = () => {
    if (invisible === false){
      setInvisible(true);
    }else if(invisible === true){
      setInvisible(false);
    }
  }

    return (
      <div className="Tarjeta">
        <div className="ImagenTarjeta" onClick={cambiarVisibilidad}>
        <p className="Haiku" style= {{ display: invisible ? "none" : "block"}}> {Haiku} </p>
          <motion.img src={`https://picsum.photos/500/300`} alt="ImagenHaiku" whileHover={{ scale: 1 }} whileTap={{ scale: 0.8 }} />
        </div>
        <div className="CuerpoTarjeta">
          <div className="InfoTarjeta">
            <img src={`https://picsum.photos/32/32`} alt="PerfilHaiku" className="ImagenPerfil" />
            <h4>{autor}</h4>
          </div>
          <FontAwesomeIcon icon={faShareAlt} className="IconoCompartirTarjeta" />
        </div>
      </div>
    );
  };

  export default Tarjeta;