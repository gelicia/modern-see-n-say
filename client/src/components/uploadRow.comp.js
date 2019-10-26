import React from "react";
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import './uploadRow.comp.css'
export default function UploadRow(props) {
   const addFile = (event, isPicture) => {
        console.log(event.target.files[0]);
    }

    return (
        <Row className={props.index % 2 === 0 ? 'even': 'odd'}>
            <Col md="auto">{props.index + 1}</Col>
            <Col md="auto">
                <InputGroup size="sm" className="mb-3">
                    <FormControl type="file" aria-label="Upload picture" onChange={event => addFile(event, true)}/>
                </InputGroup>
            </Col>
            <Col md="auto">
                <InputGroup size="sm" className="mb-3">
                    <FormControl type="file"  aria-label="Upload sound" onChange={event => addFile(event, false)}/>
                </InputGroup>
            </Col>
        </Row>
    );
}