// src/pages/UsagePage.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TailwindInstructions from './TailwindInstructions';
import BootstrapInstructions from './BootstrapInstructions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BootstrapTailwind.css'; // Custom CSS for Tailwind

const BootstrapTailwind = () => {
  return (
    <Container className="tw-container mt-5">
      <h1 className="tw-h1 text-center mb-4">Using React Bootstrap and Tailwind CSS</h1>

      <Row className="mb-4">
        <Col>
          <h2 className="react-bootstrap-h2">React Bootstrap</h2>
          <p className="react-bootstrap-p">
            React Bootstrap is a popular library that allows you to use Bootstrap components as React components.
          </p>
          <Button variant="primary" className="mr-2">
            Primary Button
          </Button>
          <Button variant="secondary">
            Secondary Button
          </Button>
        </Col>
      </Row>
      <BootstrapInstructions/>

      <Row>
        <Col>
          <h2 className="tw-h2">Tailwind CSS</h2>
          <p className="tw-p">
            Tailwind CSS is a utility-first CSS framework that gives you low-level utility classes to build designs directly in your markup.
          </p>
          <div className="tw-flex items-center justify-center">
            <button className="tw-bg-green-500 tw-hover:bg-green-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded focus:outline-none focus:shadow-outline-green active:bg-green-800">
              Tertiary Button
            </button>
          </div>
        </Col>
      </Row>
      <TailwindInstructions/>
    </Container>
  );
};

export default BootstrapTailwind;
