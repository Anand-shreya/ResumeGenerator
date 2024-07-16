//To handle backend

const express = require("express");
const bodyParser = require("body-parser");
const PDFServicesSdk = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");
const cors = require("cors");
var busboy = require("connect-busboy");
var path = require("path");

// creating new express Applicaton
const app = express();

app.use(cors());
app.use(busboy());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Initializing Port
const port = process.env.PORT || 8000;








// POST request uploadData : to upload json file data as newdata
app.post("/uploadData", (req, res) => {
  if (fs.existsSync("./newdata.json")) fs.unlinkSync("./newdata.json");
  console.log(req);
  var fstream;
  req.pipe(req.busboy);
  req.busboy.on("file", function (fieldname, file, filename) {
    console.log("Uploading: " + filename);

    //Path where Data will be uploaded
    fstream = fs.createWriteStream("newdata.json");
    file.pipe(fstream);
    fstream.on("close", function async() {
      console.log("Upload Finished of " + filename);
    });
    res.send("upload SuccessFull");
  });
  return;
});








// POST request uploadTemp : to upload custom template as temp4
app.post("/uploadTemp", (req, res) => {
  if (fs.existsSync("./template/temp4.docx"))
    fs.unlinkSync("./template/temp4.docx");
  var fstream;
  req.pipe(req.busboy);
  req.busboy.on("file", function (fieldname, file, filename) {
    console.log("Uploading: " + filename);

    //Path where Data will be uploaded
    fstream = fs.createWriteStream("templates/temp4.docx");
    file.pipe(fstream);
    fstream.on("close", function async() {
      console.log("Upload Finished of " + filename);
    });
    res.send("upload SuccessFull");
  });
  return;
});







//POST request formData : to upload filled form data
app.post("/formData", (req, res) => {
  if (fs.existsSync("./newdata.json")) fs.unlinkSync("./newdata.json");
  const data = req.body;
  console.log(data);
  fs.writeFile("./newdata.json", JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to save data" });
    } else {
      console.log("form data saved successfully!!")
      res.json({ message: "Data saved successfully" });
    }
  });
});






//POST request resume : to build resume
app.post("/resume", (req, res) => {

  const temp_id = req.body.temp_type;                             // tempelate id

  const INPUT = `./templates/temp${temp_id}.docx`;     
  // input based on selected template
  delete require.cache[require.resolve('./newdata.json')];
  const JSON_INPUT = require("./newdata.json");                   // Entered user data in json file

  const OUTPUT = "./generatedResume.pdf";

        // try{
        //     fs.readFile("./newdata.json", 'utf8',(err, data) =>{
        //       const JSON_INPUT = JSON.parse(data);
        //       console.log("json daata", JSON_INPUT);
        //     });
        //   }
        //   catch{
        //     console.log("failed to load json data file");
          // }
        console.log("json input", JSON_INPUT);
    // res.send("success");
  // If our output already exists, remove it so we can run the application again.
  console.log(OUTPUT, "File exist: ", fs.existsSync(OUTPUT));
  // if (fs.existsSync(OUTPUT)){
  //     fs.unlinkSync(OUTPUT);
  //     console.log(fs.existsSync(OUTPUT));
  // }

  // console.log(PDF_SERVICES_CLIENT_ID);
  // const credentials =
  //   PDFServicesSdk.Credentials.servicePrincipalCredentialsBuilder()
  //     .withClientId("6e4c841c769544a399763b2cff2bf251")
  //     .withClientSecret("p8e-bIKjv39YsEWvXsHemdsT4tSmGHfBli6c")
  //     .build();

  // // Create an ExecutionContext using credentials
  // const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);

  // const documentMerge = PDFServicesSdk.DocumentMerge,
  //   documentMergeOptions = documentMerge.options,
  //   options = new documentMergeOptions.DocumentMergeOptions(
  //     JSON_INPUT,
  //     documentMergeOptions.OutputFormat.PDF
  //   );

  // // Create a new operation instance using the options instance.
  // const documentMergeOperation = documentMerge.Operation.createNew(options);

  // // Set operation input document template from a source file.
  // const input = PDFServicesSdk.FileRef.createFromLocalFile(INPUT);
  // documentMergeOperation.setInput(input);

  // // Execute the operation and Save the result to the specified location.
  // documentMergeOperation
  //   .execute(executionContext)
  //   .then((result) => result.saveAsFile(OUTPUT))
  //   .then(res.redirect("https://resume-generator-4rkpjltwn-anandshreyas-projects.vercel.app//download"))
  //   .catch((err) => {
  //     if (
  //       err instanceof PDFServicesSdk.Error.ServiceApiError ||
  //       err instanceof PDFServicesSdk.Error.ServiceUsageError
  //     ) {
  //       console.log("Exception encountered while executing operation", err);
  //     } else {
  //       console.log("Exception encountered while executing operation", err);
  //     }
  //   });
});





//get request dowmload : To download generated Resume
app.get("/download", (req, res) => {
  var options = {
    root: path.join(__dirname),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };
  // Removing newdata.json if exist 
  if (fs.existsSync("./newdata.json")) fs.unlinkSync("./newdata.json");

  // Removing temp4.json if exist 
  if (fs.existsSync("./templates/temp4.docx"))fs.unlinkSync("./templates/temp4.docx");

  res.sendFile("./generatedResume.pdf", options, function (e) {
    if (e) {
      console.log(e);
    } else {
      console.log("sent: ");
    }
  });
});



//linsting
app.listen(port, () => {
  console.log(`connection is live at port ${port}`);
});
