import React, { useState, useEffect } from 'react';
import NavAdmin from '../navAdmin/NavAdmin'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';



const Consumos = () => {

  const [formValues, setFormValues] = useState([]);
  const [rows, setRows] = useState([{ selectValue: '', inputValue: '' }]);
  const [initialRows, setInitialRows] = useState(rows);
  


  const alerta=()=>{
    Swal.fire({
      icon: 'success',
      title: 'Exito',
      text: 'Actualizaste el Stock con Exito.',
    })
  }

  const handleAddRow = () => {
    setRows([...rows, { selectValue: '', inputValue: '' }]);
  };

  const handleRemoveRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleSelectChange = (index, event) => {
    const newRows = [...rows];
    newRows[index].selectValue = event.target.value;
    setRows(newRows);
  };

  const handleInputChange = (index, event) => {
    const newRows = [...rows];
    newRows[index].inputValue = event.target.value;
    setRows(newRows);
  };

  const handleReset = () => {
    setRows(initialRows);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alerta();

    const formValues = rows.map((row) => ({
      material: row.selectValue,
      quantity: row.inputValue,
    }));

    setFormValues(formValues);
    console.log(formValues);
    handleReset();
  };


  

  return (
    <>
    <NavAdmin />
    <Container>
      <Row className='align-items-center'>
        <Col xs={4}>
          <span>Ingrese los movimientos de Stock</span>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Form.Select aria-label="Default select example" className='col-md-6'>
            <option>Seleccione el sector</option>
            <option value="panol">Pañol</option>
            <option value="Cuadrilla 1">Cuadrilla 1</option>
            <option value="Cuadrilla 2">Cuadrilla 2</option>
            <option value="Cuadrilla 3">Cuadrilla 3</option>
            <option value="Cuadrilla 4">Cuadrilla 4</option>
            <option value="Cuadrilla 5">Cuadrilla 5</option>
            <option value="Cuadrilla 6">Cuadrilla 6</option>
            <option value="Cuadrilla 7">Cuadrilla 7</option>
            <option value="Cuadrilla 8">Cuadrilla 8</option>
            <option value="Cuadrilla 9">Cuadrilla 9</option>
            <option value="Cuadrilla 10">Cuadrilla 10</option>
          </Form.Select>
        </Col> 
      </Row>
      
      {rows.map((row, index) => (
        <Row key={index}>
          <Col>
            <Form.Control
              as="select"
              value={row.selectValue}
              onChange={(event) => handleSelectChange(index, event)}
            >
              <option value="">Seleccione el material</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </Form.Control>
          </Col>
          <Col>
            <Form.Control
              type="number"
              value={row.inputValue}
              onChange={(event) => handleInputChange(index, event)}
            />
          </Col>
          <Col>
            {index === rows.length - 1 ? (
              <Button onClick={handleAddRow}>Add</Button>
            ) : (
              <Button onClick={() => handleRemoveRow(index)}>Remove</Button>
            )}
          </Col>
        </Row>
      ))}

      <Col xs="auto" className="my-1">
          <Button type="submit" onClick={handleSubmit}> Enviar Datos </Button>
      </Col>
    </Container>
    </>
    
  );
}





export default Consumos