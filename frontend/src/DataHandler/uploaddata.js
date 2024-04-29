// To Handle form Data entered By user

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const UploadData = () => {

  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  let formData = new FormData();

  const handleUploadClick = (e) => {
    console.log(formData);
    try {
      // fetch("http://localhost:8000/uploadData", {
        fetch("https://resumegenerator-952f.onrender.com/uploadData", {
        method: "POST",
        body: formData,
        redirect: "follow",
      })
        .then((response) => {
          alert("Data uploaded Successfully");
          navigate("/temp");                                      //if respose is successful go to /temp Tempelates Selection page
        })
        .catch((error) => {
          alert("Failed to upload");
        });
    } catch {
      alert("Failed to upload");
    }
  };

  //Handle Selected File
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      uploadFile(selectedFile);
    }
  };

  const uploadFile = (file) => {
    formData = new FormData();
    formData.append("file", file);
  };

  return (
    <div>
      <input
        type="file"
        accept="application/json"
        ref={fileInputRef}
        className="Upload"
        onChange={handleFileChange}
      />
       <button className="upload_btn1" onClick={handleUploadClick}>          {/* Upload button */}
        Upload
      </button>
    </div>
  );
};

export default UploadData;
