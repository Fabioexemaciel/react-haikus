import React from "react";
import "./Home.css";
import Tarjeta from "./tarjeta";

const Home = () =>
{
    return(
        <>
    <h4 className="H4">Coleccion</h4>
    <div id="galeria">
    <Tarjeta haiku="Hola Fonseca" autor="Noobmaster69"/>
    <Tarjeta />
    <Tarjeta />
    </div>
    </>
    );
};

export default Home;