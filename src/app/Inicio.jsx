import React, { Fragment } from "react";
import {
  ProjectContainer,
  ProjectsCard,
  ProjectWrapper,
  ProjectsH1,
  ProjectsH2,
} from "./styled";
import { useNavigate } from "react-router-dom";

export default function Inicio() {
  const historyHook = useNavigate();
  const onClick = (e) => {
    const { id } = e.target;
    historyHook(`/${id}`);
  };
  return (
    <ProjectContainer id="services" className="container-fluid">
      <ProjectsH1>Parcial 2</ProjectsH1>
      <ProjectWrapper>
        <ProjectsCard id="punto1" onClick={onClick}>
          <ProjectsH1>Punto1</ProjectsH1>
        </ProjectsCard>
        <ProjectsCard id="punto2" onClick={onClick}>
          <ProjectsH1>Punto2</ProjectsH1>
        </ProjectsCard>
        <ProjectsCard id="punto3" onClick={onClick}>
          <ProjectsH1>Punto3</ProjectsH1>
        </ProjectsCard>
        <ProjectsCard id="punto4" onClick={onClick}>
          <ProjectsH1>Punto4</ProjectsH1>
        </ProjectsCard>
        <ProjectsCard id="punto5" onClick={onClick}>
          <ProjectsH1>Punto5</ProjectsH1>
        </ProjectsCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
}
