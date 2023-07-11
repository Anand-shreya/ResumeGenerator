//Handle uploading of Custom Templates

import React, { useRef } from "react";

const UploadTemp = (props) => {

  const fileInputRef = useRef(null);

  const handleUploadClick = (e) => {
    console.log(formData);
    try {
      fetch("http://localhost:8000/uploadTemp", {
        method: "POST",
        body: formData,
        redirect: "follow",
      })
        .then((response) => {
          alert("Template uploaded Successfully");
        })
        .catch((error) => {});
    } catch {
      alert("Failed to upload!!");
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      uploadFile(selectedFile);
    }
  };

  let formData = new FormData();
  const uploadFile = (file) => {
    formData = new FormData();
    formData.append("file", file);

    console.log("called");
  };

  return (
    <div className="upload_box">
      <input
        type="file"
        accept=".doc, .docx"
        ref={fileInputRef}
        className="Upload"
        onChange={handleFileChange}
      />
      <button className="upload_btn" onClick={handleUploadClick}>            
        Upload
      </button>                                                                                 
    </div>
  );
};

export default UploadTemp;
