
# RESUME-BUILDER
The Resume Builder application is designed to streamline the process of creating professional resumes. It takes user data in Form or in JSON file format and uses custom as well as predefined templates to generate a PDF file as the final resume document.





## Installation 

To make a contribution, clone the project in local by running 

```bash
git clone git@github.com:Anand-shreya/ResumeGenerator.git
cd ResumeGenerator
```
### Backend setUp
Install used packages
```bash
cd backend
npm install
```
##### Set  credentials

For windows
```bash
set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>
set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>
```  
For MacOs or Linux
```bash
export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>
export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>
```  
Start backend Server
```bash
cd src
node App.js
```
Backend will run at `port 8000`

#### Frontend setUp
```bash
cd frontend
npm install
npm start
```
Frontend will start at `post 3000`
    
## Description


- The resume builder requires two inputs: data and a desired template.
- The data can be provided by either uploading a JSON file or manually entering it into a form.
- Various templates are available, including the option to upload custom templates.
- Once the data is submitted and the template is selected, users can generate their resume by clicking the "Generate Resume" button.
- Finally, they can download the generated resume by clicking the "Download" button.







## Features

- Upload your own custom template
- JSON file can also be uploaded as data
- Dynamic form for adding more details 


## Documentation

[API Documentation](https://developer.adobe.com/document-services/docs/overview/document-generation-api/)

