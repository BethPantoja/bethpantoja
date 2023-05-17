import React, { useState } from "react";

import "./Alumnos.css";
import InicioAlumno from "./InicioAlumno";
import Alumno from "./Alumno";

import datos from "./DatosAlumnos";

function Alumnos() {
  const [info, setInfo] = useState(datos);

  return (
    <div>
      <InicioAlumno></InicioAlumno>
      {datos.map((informacion) => (
        <Alumno items={informacion} />
      ))}
    </div>
  );
}

export default Alumnos;
