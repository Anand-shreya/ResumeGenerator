console.log("started")
const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');
const fs = require('fs');

const OUTPUT = './generatedReceipt.pdf';

// If our output already exists, remove it so we can run the application again.
if(fs.existsSync(OUTPUT)) fs.unlinkSync(OUTPUT);

const INPUT = './receiptTemplate.docx';

const JSON_INPUT = require('./receipt.json');


// console.log(PDF_SERVICES_CLIENT_ID);
const credentials =  PDFServicesSdk.Credentials
    .servicePrincipalCredentialsBuilder()
    // .withClientId("PDF_SERVICES_CLIENT_ID")
    .withClientId("6e4c841c769544a399763b2cff2bf251")
    .withClientSecret("p8e-bIKjv39YsEWvXsHemdsT4tSmGHfBli6c")
    .build();

// Create an ExecutionContext using credentials
const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);



const documentMerge = PDFServicesSdk.DocumentMerge,
       documentMergeOptions = documentMerge.options,
       options = new documentMergeOptions.DocumentMergeOptions(JSON_INPUT, documentMergeOptions.OutputFormat.PDF);

// Create a new operation instance using the options instance.
const documentMergeOperation = documentMerge.Operation.createNew(options);

// Set operation input document template from a source file.
const input = PDFServicesSdk.FileRef.createFromLocalFile(INPUT);
documentMergeOperation.setInput(input);



// Execute the operation and Save the result to the specified location.
documentMergeOperation.execute(executionContext)
.then(result => result.saveAsFile(OUTPUT))
.catch(err => {
    if(err instanceof PDFServicesSdk.Error.ServiceApiError
        || err instanceof PDFServicesSdk.Error.ServiceUsageError) {
        console.log('Exception encountered while executing operation', err);
    } else {
        console.log('Exception encountered while executing operation', err);
    }
});
