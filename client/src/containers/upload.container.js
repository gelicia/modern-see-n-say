
import React from "react";
import axios from "axios";
import { Button, Row, Col } from 'react-bootstrap';
import UploadRow from "../components/uploadRow.comp";
import './upload.container.css';
const uuidv1 = require('uuid/v1');

export default function Upload() {
  const numUploads = 12;
  let fileArr = [];
  let uploadFile = undefined;

  const addToUploadList = (idx, isPicture, file) => {
    if (!fileArr[idx]) {
      fileArr[idx] = {};
    }
    fileArr[idx][isPicture ? 'picture' : 'sound'] = file;
  }

  const getZip = (uuid => {
    axios.get(`http://localhost:8000/getZip?id=${uuid}`).then(res => {
      console.log(res);
    });
  });

  const submitFiles = () => {
    const uuid = uuidv1(); // this is bad, replace with server side later
    fileArr.forEach((file, idx) => {
      const data = new FormData();
      data.append('index', idx);
      data.append('uuid', uuid);
      data.append('file', file.picture);
      data.append('file', file.sound);
      axios.post("http://localhost:8000/upload", data, {
        // receive two    parameter endpoint url ,form data
      }).then(res => { // then print response status
        console.log(res.statusText);
        if (idx === fileArr.length-1) {
          getZip(uuid);
        }
      })
    });
  }


  const uploadRows = [];
  for (let i = 0; i < numUploads; i++) {
    uploadRows.push(<UploadRow key={`uploadRow-${i}`} index={i} parentStateFunc={addToUploadList}></UploadRow>);
  }

  return (
    <div className="home">
      <Row className="header">
        <Col md="auto"></Col>
        <Col>
          <div>Picture (.bmp only)</div>
        </Col>
        <Col>
          <div>Sound (.wav only)</div>
        </Col>
      </Row>
      {uploadRows}
      <div className="submitContainer">
        <Button onClick={submitFiles}>Upload Sound/Image Group</Button>
      </div>
      {uploadFile && ( <div className="uploadContainer">
        <a>Download zip</a>
      </div>)}
      
     
    </div>
  );
}