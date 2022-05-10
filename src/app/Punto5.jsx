import React, { useEffect, useState } from "react";

import {
  ProjectContainer,
  ProjectsCard,
  ProjectWrapper,
  ProjectsH1,
  ProjectsH2,
  Background,
  Button,
  ProjectsH3,
} from "./styled";

export default function Cliente() {
  const [inmuebles, setInmuebles] = useState([]);
  const [actualizar, setActualizar] = useState(true)
  const onClick = (e) => {
    e.preventDefault();
    const { id } = e.target;
    fetch(`http://localhost:3000/reservar?id=${id}`, {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setActualizar(!actualizar)
        console.log(actualizar);
        
      });
  };
  /*  useEffect(() => {
    console.log(inmuebles)
  },[inmuebles]);
  */

  useEffect(() => {
    console.log(1)
    fetch("http://localhost:3000/consultarInmuebles", {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setInmuebles(json);
      });
  }, [actualizar]);
  return (
    <Background>
      <ProjectsH1>Reservar espacio</ProjectsH1>
      <ProjectsH2>Espacios disponibles</ProjectsH2>
      <ProjectContainer id="services" className="container-fluid">
        <ProjectWrapper>
          {inmuebles.map((inmueble, index) => {
            return (
              <ProjectsCard key={index}>
                <ProjectsH1>{inmueble.inmueble} </ProjectsH1>
                <ProjectsH2>Visitantes: {inmueble.numeroVisitantes} </ProjectsH2>
                <ProjectsH2>Fecha: {inmueble.fecha} </ProjectsH2>
                <ProjectsH2>Inicio: {inmueble.horaInicio} </ProjectsH2>
                <ProjectsH2>Fin: {inmueble.horaFin} </ProjectsH2>
                <Button
                  id={inmueble._id}
                  type="button"
                  className="boton"
                  onClick={onClick}
                >
                  Reservar
                </Button>
                
              </ProjectsCard>
            );
          })}
        </ProjectWrapper>
      </ProjectContainer>
    </Background>
  );
}
