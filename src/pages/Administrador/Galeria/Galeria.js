import axios from "axios";
import React from "react";

import { useEffect } from "react";

import "./Galeria.css";
import datos from "./Datos";
import { ROUTES } from "../../../constants/routes";

function Galeria() {
  return (
    <div className="row">
      {datos.map((image) => (
        <div className="cardGaleria">
          <img
            src={require(`./img/${image.ubicacion}`)}
            alt="Imagen del alumno"
            className="imagenTrayectoria "
          />
        </div>
      ))}
    </div>
  );
}

export default Galeria;
