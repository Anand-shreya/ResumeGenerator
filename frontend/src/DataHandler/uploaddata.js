import React,{useEffect, useRef, useState} from 'react'
import { NavLink } from 'react-router-dom';


const UploadData = (props) => {
    const fileInputRef = useRef(null);

  const handleUploadClick = (e) => {
    console.log(formData);
    try{
      fetch('http://localhost:8000/uploadData', {
        method: 'POST',
        body: formData,
        redirect:"follow"
      })
      .then(response => {
        console.log("response");
        // Handle the response if needed
        props.parentCallback(true);
        alert("Data uploaded Successfully")
            if(response.redirected){
            console.log("here");
            // window.location.replace(response.url);
          }
          // window.location.replace(response);
          console.log(response);
        })
        .catch(error => {
          // setTimeout(function(){alert("Failed to upload!!!")},20);
          // Handle the error if the POST request fails
        });
      }
      catch{
        // alert("Failed to upload!!");
      };
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
      formData.append('file', file);
  
      console.log("called");
     
    };
    return (
          <div>
            <input
              type="file"
              accept="application/json"
              ref={fileInputRef}
              className='Upload'
              onChange={handleFileChange}
            />
            <NavLink className="upload_btn1" to='/temp' onClick={handleUploadClick} >Upload</NavLink>
          </div>
    )
  }
  
  export default UploadData;