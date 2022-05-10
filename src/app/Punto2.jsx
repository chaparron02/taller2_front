import React, { useState } from "react";
import { Container, Form, H3, Button, Input, Label, Button2 } from "./styled";
import axios from "axios";
import Popup from "reactjs-popup";

export default function Punto1(props) {
  const [alert, setAlert] = useState("");
  const [envio, setEnvio] = useState({
    cod_envio: "",
    address_from_name: "",
    address_from_email: "",
    address_from_street1: "",
    address_from_city: "",
    address_from_province: "",
    address_from_postal_code: "",
    address_from_country_code: "",
    address_to_name: "",
    address_to_email: "",
    address_to_street1: "",
    address_to_city: "",
    address_to_province: "",
    address_to_postal_code: "",
    address_to_country_code: "",
    parcel_length: "",
    parcel_width: "",
    parcel_height: "",
    parcel_dimensions_unit: "",
    parcel_weight: "",
    parcel_weight_unit: "",
    state: "",
    cedula: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnvio((envio) => {
      return {
        ...envio,
        [name]: value,
      };
    });
  };

  const limpiar = (e) => {
    e.preventDefault();
    setAlert("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(envio);
    const data = {};
    console.log(data);

    
    axios
      .post("https://taller2-ur-web.vercel.app/crearCliente", envio)
      .then((res) => {
        setAlert(res.data.id);
      });
  };
  return (
    <Container>
      {alert ? (
        <Form onSubmit={limpiar}>
          <H3>{alert}</H3>
          <Button type="submit" className="boton">
            limpiar
          </Button>
        </Form>
      ) : (
        <Form onSubmit={handleSubmit}>
          <H3>Crear Envio</H3>

          <div className="form-group">
            <Label>codigo de envio</Label>
            <Input
              type="text"
              className="cod_envio"
              name="cod_envio"
              value={envio.cod_envio}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="form-group">
            <Label>address_from_name</Label>
            <Input
              type="address_from_name"
              className="address_from_name"
              name="address_from_name"
              value={envio.address_from_name}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="form-group">
            <Label>address_from_email</Label>
            <Input
              type="address_from_email"
              className="address_from_email"
              name="address_from_email"
              value={envio.address_from_email}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>address_from_street1</Label>
            <Input
              type="address_from_street1"
              className="address_from_street1"
              name="address_from_street1"
              value={envio.address_from_street1}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>address_from_city</Label>
            <Input
              type="address_from_city"
              className="address_from_city"
              name="address_from_city"
              value={envio.address_from_city}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>address_from_province</Label>
            <Input
              type="address_from_province"
              className="address_from_province"
              name="address_from_province"
              value={envio.address_from_province}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>address_from_postal_code</Label>
            <Input
              type="address_from_postal_code"
              className="address_from_postal_code"
              name="address_from_postal_code"
              value={envio.address_from_postal_code}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>address_from_country_code</Label>
            <Input
              type="address_from_country_code"
              className="address_from_country_code"
              name="address_from_country_code"
              value={envio.address_from_country_code}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>address_to_name</Label>
            <Input
              type="address_to_name"
              className="address_to_name"
              name="address_to_name"
              value={envio.address_to_name}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="form-group">
            <Label>address_to_email</Label>
            <Input
              type="address_to_email"
              className="address_to_email"
              name="address_to_email"
              value={envio.address_to_email}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>address_to_street1</Label>
            <Input
              type="address_to_street1"
              className="address_to_street1"
              name="address_to_street1"
              value={envio.address_to_street1}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>address_to_city</Label>
            <Input
              type="address_to_city"
              className="address_to_city"
              name="address_to_city"
              value={envio.address_to_city}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>address_to_province</Label>
            <Input
              type="address_to_province"
              className="address_to_province"
              name="address_to_province"
              value={envio.address_to_province}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>address_to_postal_code</Label>
            <Input
              type="address_to_postal_code"
              className="address_to_postal_code"
              name="address_to_postal_code"
              value={envio.address_to_postal_code}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>address_to_country_code</Label>
            <Input
              type="address_to_country_code"
              className="address_to_country_code"
              name="address_to_country_code"
              value={envio.address_to_country_code}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>parcel_length</Label>
            <Input
              type="parcel_length"
              className="parcel_length"
              name="parcel_length"
              value={envio.parcel_length}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>parcel_width</Label>
            <Input
              type="parcel_width"
              className="parcel_width"
              name="parcel_width"
              value={envio.parcel_width}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>parcel_height</Label>
            <Input
              type="parcel_height"
              className="parcel_height"
              name="parcel_height"
              value={envio.parcel_height}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>parcel_dimensions_unit</Label>
            <Input
              type="parcel_dimensions_unit"
              className="parcel_dimensions_unit"
              name="parcel_dimensions_unit"
              value={envio.parcel_dimensions_unit}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>parcel_weight</Label>
            <Input
              type="parcel_weight"
              className="parcel_weight"
              name="parcel_weight"
              value={envio.parcel_weight}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>parcel_weight_unit</Label>
            <Input
              type="parcel_weight_unit"
              className="parcel_weight_unit"
              name="parcel_weight_unit"
              value={envio.parcel_weight_unit}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>state</Label>
            <Input
              type="state"
              className="state"
              name="state"
              value={envio.state}
              onChange={handleChange}
            />
          </div>

          <br></br>
          <div className="form-group">
            <Label>cedula</Label>
            <Input
              type="cedula"
              className="cedula"
              name="cedula"
              value={envio.cedula}
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
