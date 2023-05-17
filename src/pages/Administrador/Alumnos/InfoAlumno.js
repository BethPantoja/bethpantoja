import React, { useState } from "react";

//import { IconName } from "react-icons/fa";

import Estudiante from "./img/Estudiante.jpg";

import "./InfoAlumno.css";
import { useLocation } from "react-router-dom";

function InfoAlumno() {
  const location = useLocation();
  //const nombre = props.nombre;
  console.log("nombre es:", location.state.nombre); //"any type"
  const nombre = location.state.nombre;
  const grado = location.state.grado;
  const interes = location.state.interes;
  const laboratorio = location.state.laboratorio;
  const correo = location.state.correo;
  const telefono = location.state.telefono;
  const imagen = location.state.imagen;
  const tipo = location.state.tipo;
  //const [nombre, grado, interes, laboratorio, correo, telefono, imagen] =
  //useLocation().state;
  //console.log("props es:", nombre); //"any type"
  const [datos, setDatos] = useState(0);
  const [datos2, setDatos2] = useState(0);

  const handlerCargarDatos = function (e) {
    const opcion = e.target.value;
    console.log(opcion);
    setDatos(opcion);
  };

  const handlerCargarDatos2 = function (e) {
    const opcion = e.target.value;
    console.log(opcion);
    setDatos2(opcion);
  };
  /*const [nombre] = useState(props.nombre);
  const [grado] = useState(props.grado);
  const [interes] = useState(props.interes);
  const [laboratorio] = useState(props.laboratorio);
  const [correo] = useState(props.correo);
  const [telefono] = useState(props.telefono);
  const [imagen] = useState(props.imagen);*/
  //const {(profileImageSrc, name, grade, description, studentItems)} = studentData;
  return (
    <div className="informacionAlumnoPerfil">
      <br /> <br />
      <div className="infoAlumnoPerfil">
        <div className="contenedorImagenPerfil">
          <img
            src={require(`./img/${imagen}`)}
            alt="Imagen de la institución"
          />
        </div>
        <div className="infoPerfil">
          <div className="nombreAlumnoPerfil">{nombre}</div>
          <br /> <br />
          <div>Grado de estudio: {grado}</div>
          <br />
          <div>Áreas de interés: {interes}</div>
          <br />
          <div>Laboratorio: {laboratorio}</div>
          <br />
          <div>
            Contacto: <br />
            {correo}, <br />
            {telefono}
          </div>
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="informacionTrabajos">
        <select
          name="tipo"
          id="seltipo"
          onClick={handlerCargarDatos}
          className="trabajos"
        >
          {tipo.map((item, i) => (
            <option key={"tipo" + i} value={i}>
              {item.nombre}
            </option>
          ))}
        </select>
        <br />
        <br />
        <br />
        {
          //tipo[datos].nombre !== "Notas" && normal(datos)
          normal(tipo, datos)
          //: notnormal(datos2, handlerCargarDatos)
        }
      </div>
      <br />
      <br />
      <a href="./cv/curriculum.txt" download className="descargarCurriculum">
        Currículum
      </a>
      <br />
      <br />
    </div>
  );
}

export default InfoAlumno;

function normal(tipo, datos) {
  return tipo[datos].datos.map((item, i) => (
    <div className="infoTrabajo">
      <table className="tablaTrabajosAlumno">
        <tr>
          <td className="celdaNombre celda">
            <div className="nombreTrabajo">{item}</div>
          </td>
          <td className="celdaAño celda">{tipo[datos].años[i]}</td>
        </tr>
      </table>
    </div>
  ));
}

function notnormal(tipo, datos, handlerCargarDatos2) {
  return (
    <div>
      <select
        name="tipo"
        id="seltipo"
        onClick={handlerCargarDatos2}
        className="trabajos"
      >
        {tipo[datos].area.map((item, i) => (
          <option key={"tipo" + i} value={i}>
            {item}
          </option>
        ))}
      </select>
      {tipo[datos].area.map((item, i) => (
        <div className="infoTrabajo">
          <table className="tablaTrabajosAlumno">
            {/*tipo[datos].area[i] === "Probabilidad" && (*/}
            <tr>
              <td className="celdaNombre celda">
                <div className="nombreTrabajo">{item}</div>
              </td>
            </tr>
            ){/*}}*/}
          </table>
        </div>
      ))}
    </div>
  );
}
