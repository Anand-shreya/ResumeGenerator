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
        //  fetch("http://localhost:8000/download")
        // // .then (response=>{
        // //     const filename =  response.headers.get('Content-Disposition').split('filename=')[1];
        // //  response.blob().then(blob => {
        // // let url = window.URL.createObjectURL(blob);
        // // let a = document.createElement('a');
        // // a.href = url;
        // // a.download = filename;
        // // a.click();
        // // });
        // // })
        // .then(res=>{
        //     console.log(res);
        // })
        const res = await downloadFile();
        window.location.replace("http://localhost:3000/");
    }

return (
    <div>
      <button onClick={handleUploadClick}>Download</button>
    </div>
)
}

export default Download;