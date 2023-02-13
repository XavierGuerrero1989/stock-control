import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Parcializador = ( {location} ) => {
  return (

    <>
    <div>
        <Accordion>
        <Accordion.Item eventKey="0">
            <Accordion.Header>{location.nombre}</Accordion.Header>
            <Accordion.Body>
            <Container>
                <Row>
                    <Col>Pétreos: <br /> Arena: {location.arena}. <br /> Piedra: {location.piedra}.</Col>
                    <Col>Aglutinantes: <br /> Cemento: {location.cemento}.</Col>
                    <Col>Hierros: <br /> Malla del 6: {location.malla6}. <br /> Malla del 8: {location.malla8}. <br />Hierro del 6: {location.hierro6}. <br /> Hierro del 8: {location.hierro8}. <br /> Hierro del 10: {location.hierro10}. <br /> Alambre para Atar: {location.alambreAtar}. </Col>
                    <Col>Madera: <br /> Fenolicos Obras: {location.fenolicos}. <br /> Vallas de Madera: {location.vallasMadera}. <br /> Tirante 4x4: {location.tirante4x4}.</Col>
                    <Col>Elementos pluviales <br /> Sumideros: <br /> Marco y Reja 105x50: {location.marcoyReja105x50}. <br /> Vertical Cordon: {location.verticalCordon}. <br /> Reja 105x50: {location.reja105x50}. <br /> Reja 50x50: {location.reja50x50}. <br /> Sumidero Triple: {location.sumideroTriple}. <br /> Marco y Reja gris 52x50: {location.marcoyRejaGris52x50}. <br /> Tapa de Inspección: {location.tapaDeInspeccion}.</Col>
                    <Col>Elementos pluviales <br /> Boca de Registro: <br /> Marco solo Sumidero: {location.marcoSoloSumidero}. <br /> Ventilada: {location.bocaRegistroVentilada}. <br /> Ciega Calzada: {location.bocaRegistroCiegaCalzada}. <br /> Ciega Vereda: {location.bocaRegistroCiegaVereda}.</Col>
                    <Col>Elementos pluviales <br /> Caños de Hormigon: <br /> Marco Ventilada: {location.canoHormigonMarcoVentilada}. <br /> 300: {location.canoHormigon300}. <br /> 400: {location.canoHormigon400}. <br /> 500: {location.canoHormigon500}.  <br /> 600: {location.canoHormigon600}.  <br /> 700: {location.canoHormigon700}.  <br /> 800: {location.canoHormigon800}.  <br /> 900: {location.canoHormigon900}.  <br /> 1000: {location.canoHormigon1000}.</Col>
                    <Col>Elementos pluviales <br /> Caño de P.E.A.D.: <br /> 300: {location.canoPEAD300}. <br /> 450: {location.canoPEAD450}. <br /> 600: {location.canoPEAD600}. <br /> 750: {location.canoPEAD750}. <br /> 1000: {location.canoPEAD1000}.</Col>
                    <Col>Plastico: <br />1400: {location.plastico1400}.</Col>
                    <Col>Malla Naranja: {location.mallaNaranja}.</Col>
                </Row>
            </Container>                 
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>
    </>
    
  )
}

export default Parcializador