import React,{useRef} from 'react'

import axios from 'axios';

const downloadFile = async () => {
  try {
    const response = await axios.get('http://localhost:8000/download', {
      responseType: 'blob',
    });
    // console.log(response);
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

// Usage:


const Download = () => {

    const handleUploadClick = async()=>{
        const res = await downloadFile();
        window.location.replace("http://localhost:3000/");
    }

return (
    <div>
      <button className='download_btn' onClick={handleUploadClick}>Download</button>
    </div>
)
}

export default Download;