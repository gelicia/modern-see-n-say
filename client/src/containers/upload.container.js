import React from "react";
import { Button } from 'react-bootstrap';

import UploadRow from "../components/uploadRow.comp";

export default function Upload() {
  const numUploads = 12;

  const uploadRows = [];
  for (let i = 0; i < numUploads; i++){
    uploadRows.push(<UploadRow key={`uploadRow-${i}`} index={i}></UploadRow>);
  }

  return (
    <div className="home">
      {uploadRows}
      <Button>Upload Sound/Image Group</Button>
    </div>
  );
}