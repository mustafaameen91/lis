const express = require("express");
const cors = require("cors");
const history = require("connect-history-api-fallback");
const upload = require("express-fileupload");
const fs = require("fs");
const app = express();
const { exec } = require("child_process");

// const axios = require("axios");
// axios.defaults.headers.post["Content-Type"] = "application/json";

let private_key = "SCT2C22KSURLOXBEQJFQN6APITKIXUUSZLCMYWLZ6K735QODLPKYVR7R";
let public_key = "GDS2GDKKUTLO23UWNRHRXRYSX7AGTD6TZME2K6PTPH3SHBPWAQ6VQPL2";
let apiUrl = "https://api.munahealth.com";
let apiTestUrl = "https://api.staging.munahealth.com";

exec(
   `bash HGate-start.sh --private="${private_key}" --public="${public_key}" --address="0.0.0.0:5555" `,
   (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
         console.log(`exec error: ${error}`);
      }
   }
);

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(
   upload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
   })
);

require("./app/routes/user.routes.js")(app);
require("./app/routes/nationality.routes.js")(app);
require("./app/routes/patient.routes.js")(app);
require("./app/routes/patientTest.routes.js")(app);
require("./app/routes/patientResult.routes.js")(app);
require("./app/routes/role.routes.js")(app);
require("./app/routes/test.routes.js")(app);
require("./app/routes/provider.routes.js")(app);
require("./app/routes/photo.routes.js")(app);
require("./app/routes/testOptions.routes.js")(app);
require("./app/routes/testRange.routes.js")(app);

app.get("/api/documents/:file", function (request, response) {
   let file = request.params.file;
   var extension = file.split(".").pop();
   var tempFile = `./app/documents/${file}`;
   fs.readFile(tempFile, function (err, data) {
      console.log(extension);
      switch (extension) {
         case "jpg":
            contentType = "image/jpg";
            isImage = 1;
            break;
         case "png":
            contentType = "image/png";
            isImage = 1;
            break;
         case "jpeg":
            contentType = "image/jpeg";
            isImage = 1;
            break;
         case "pdf":
            contentType = "application/pdf";
            isImage = 2;
            break;
      }
      response.contentType(contentType);
      response.send(data);
   });
});

app.get("/api/image/:file", function (request, response) {
   let file = request.params.file;
   var extension = file.split(".").pop();
   var tempFile = `./app/photos/${file}`;

   fs.readFile(tempFile, function (err, data) {
      switch (extension) {
         case "jpg":
            contentType = "image/jpg";
            isImage = 1;
            break;
         case "png":
            contentType = "image/png";
            isImage = 1;
            break;
         case "jpeg":
            contentType = "image/jpeg";
            isImage = 1;
            break;
         case "pdf":
            contentType = "application/pdf";
            isImage = 2;
            break;
      }
      response.contentType(contentType);
      response.send(data);
   });
});

const staticFileMiddleware = express.static(__dirname + "/dist");
app.use(staticFileMiddleware);
app.use(
   history({
      disableDotRule: true,
      verbose: true,
   })
);

app.use(staticFileMiddleware);

exports.directory = __dirname;

app.listen(3300, () => {
   console.log("Server is running on port 3300.");
});
