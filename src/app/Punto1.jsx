import React, { useState } from "react";
import axios from "axios";
import { Container, Form, H3, Button, Input, Label, Button2, H5 } from "./styled";

export default function Punto1(props) {
  const [archivo, setArchivo] = useState();
  const [alert, setAlert] = useState("");

  const onFileChange = (e) => {
    const { files } = "envio_datos.csv";
    
  };

  const onFileUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append(
      "myFile",
      archivo,
      archivo.name
    );
  


      axios.post("localhost:3000/convertirCsv", formData);
    };
    return (
      <Container>
        <Form >

          <H3>LLamar archivo csv</H3>

          <H5>envio_datos.csv </H5>
          <Button type="submit" className="boton" onClick={onFileUpload}>
          subir
        </Button>
      </Form>
    </Container>
  );
}
