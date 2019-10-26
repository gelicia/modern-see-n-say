import React from "react";
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import './uploadRow.comp.css'
export default function UploadRow(props) {
   const addFile = (event, isPicture) => {
        props.parentStateFunc(props.index, isPicture, event.target.files[0]);
    }

    return (
        <Row className={props.index % 2 === 0 ? 'even': 'odd'}>
            <Col md="auto">{props.index + 1}</Col>
            <Col>
                <InputGroup size="sm" className="mb-3">
                    <FormControl type="file" aria-label="Upload picture" onChange={event => addFile(event, true)}/>
                </InputGroup>
            </Col>
            <Col>
                <InputGroup size="sm" className="mb-3">
                    <FormControl type="file"  aria-label="Upload sound" onChange={event => addFile(event, false)}/>
                </InputGroup>
            </Col>
        </Row>
    );
}