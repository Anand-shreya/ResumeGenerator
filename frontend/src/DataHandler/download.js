//Handle Downloading of final REsume

import React from 'react'
import axios from 'axios';

//Function for downloading RESUME
const downloadFile = async () => {
  try {
    // const response = await axios.get('http://localhost:8000/download', {
      const response = await axios.get('https://resumegenerator-952f.onrender.com/download', {
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
      <button className='download_btn' onClick={handleUploadClick}>Download</button>      {/*//Download Button*/}
    </div>
)
}

export default Download;







// import React from 'react';
// import axios from 'axios';

// // Function for downloading RESUME
// const downloadFile = async () => {
//   try {
//     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//     const targetUrl = 'https://resumegenerator-952f.onrender.com/download';
    
//     const response = await axios.get(proxyUrl + targetUrl, {
//       responseType: 'blob',
//     });

//     const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
//     const link = document.createElement('a');
//     link.href = downloadUrl;
//     link.setAttribute('download', 'resume.pdf');
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
//   } catch (error) {
//     console.error('Error downloading file:', error);
//   }
// };

// const Download = () => {
//   const handleUploadClick = async () => {
//     await downloadFile();
//   };

//   return (
//     <div>
//       <button className='download_btn' onClick={handleUploadClick}>Download</button>
//     </div>
//   );
// };

// export default Download;
