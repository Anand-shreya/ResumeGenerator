//Handle Downloading of final REsume

import React from 'react'
import axios from 'axios';

//Function for downloading RESUME
const downloadFile = async () => {
  try {
    const response = await axios.get('http://localhost:8000/download', {
      responseType: 'blob',
    });
    const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error(error);
  }
};


const Download = () => {

    const handleUploadClick = async()=>{
        const res = await downloadFile();
    }

return (
    <div>
      <button className='download_btn' onClick={handleUploadClick}>Download</button>      //Download Button
    </div>
)
}

export default Download;