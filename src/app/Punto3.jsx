import React, { useState } from "react";
import { Container, Form, H3, Button, Input, Label, Button2 } from "./styled";
import axios from "axios";
import Popup from "reactjs-popup";

export default function Punto1(props) {
  const [alert, setAlert] = useState("");
  const [id, setId] = useState("");
  const [cedula, setCedula] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "id":
        setId(value);
        break;

      case "cedula":
        setCedula(value);
        break;
    }
  };

  const limpiar = (e) => {
    e.preventDefault();
    setAlert("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const prop = id ? `id=${id}` : `cedula=${cedula}`;
    console.log(prop);

    const baseurl = "https://taller2-ur-web.vercel.app";
    //const baseurl = "localhost:3000"
    //const baseurl = "https://taller2-desarrollo-web.herokuapp.com";

    axios.get(`${baseurl}/consultarEnvio?${prop}`).then((res) => {
      console.log(JSON.stringify(res.data));

      setAlert(res.data[0]);
    });
  };
  return (
    <Container>
      {alert ? (
        <Form onSubmit={limpiar}>
          <H3>alert</H3>
          {Object.entries(alert).map(([key, value]) => {
            return (
              <Label>
                {key}:   {value}
              </Label>
            );
          })}
          <Button type="submit" className="boton">
            limpiar
          </Button>
        </Form>
      ) : (
        <Form onSubmit={handleSubmit}>
          <H3>Crear Envio</H3>

          <div className="form-group">
            <Label>ingrese id</Label>
            <Input
              type="text"
              className="id"
              name="id"
              value={id}
              onChange={handleChange}
            />
          </div>
          <div>o</div>
          <div className="form-group">
            <Label>ingrese cedula de quien recibe</Label>
            <Input
              type="text"
              className="cedula"
              name="cedula"
              value={cedula}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="boton">
            Guardar
          </Button>
        </Form>
      )}
    </Container>
  );
}
