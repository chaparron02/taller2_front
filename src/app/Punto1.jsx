import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Form,
  H3,
  Button,
  Input,
  Label,
  Button2,
  H5,
} from "./styled";

export default function Punto1(props) {
  const [archivo, setArchivo] = useState();
  const [alert, setAlert] = useState(false);

  const onFileChange = (e) => {
    const { files } = "envio_datos.csv";
  };

  const limpiar = (e) => {
    e.preventDefault();
    setAlert(false);
  };

  const onFileUpload = (e) => {
    e.preventDefault();


    formData.append("myFile", archivo, archivo.name);
    
    setAlert(true)
  };

  return (
    <Container>
      {alert ? (
        <Form onSubmit={limpiar}>
          <H3>Subido correctamente</H3>
          <Button type="submit" className="boton">
            limpiar
          </Button>
        </Form>
      ) : (
        <Form>
          <H3>LLamar archivo csv</H3>

          <H5>envio_datos.csv </H5>
          <Button type="submit" className="boton" onClick={onFileUpload}>
            subir
          </Button>
        </Form>
      )}
    </Container>
  );
}
