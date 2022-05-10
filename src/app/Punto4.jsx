import React, { useEffect, useState } from "react";

import {
  ProjectContainer,
  ProjectsCard,
  ProjectWrapper,
  ProjectsH1,
  Background,
} from "./styled";

export default function Cliente() {
  const [estado, setEstado] = useState([]);
  const [actualizar, setActualizar] = useState(true)
  const onClick = (e) => {
    e.preventDefault();
    const { code_envio } = e.target;
    fetch(`http://localhost:3000/cambiarEstado?id=${code_envio}&state`, {
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

  useEffect(() => {
    console.log(1)
    fetch("http://localhost:3000/cambiarEstado", {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setEstado(json);
      });
  }, [actualizar]);
  return (
    <Background>
      <ProjectsH1>Estado del envio</ProjectsH1>
      
      <ProjectContainer id="services" className="container-fluid">
        <ProjectWrapper>
          {estado.map((persona, index) => {
            return (
              <ProjectsCard keey={index}>
                <h3>Estado del envio{persona.state} </h3>
                <h3>Codigo de envio{persona.cod_envio}</h3>
              </ProjectsCard>
            );
          })}
        </ProjectWrapper>
      </ProjectContainer>
    </Background>
  );
}