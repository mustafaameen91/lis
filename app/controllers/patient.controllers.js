const Patient = require("../models/patient.models.js");
const Photo = require("../models/photo.models.js");
const directory = require("./../../server");

function generateRandomName(length, patientId) {
   var result = "";
   var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   var charactersLength = characters.length;
   for (var i = 0; i < length; i++) {
      result +=
         characters.charAt(Math.floor(Math.random() * charactersLength)) +
         patientId;
   }
   return result;
}

function extractData(photo) {
   if (photo) {
      return {
         photoPath: photo.photoPath,
      };
   } else {
      return {
         photoPath: null,
      };
   }
}

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }
   let patientData = JSON.parse(req.body.patient);

   Patient.findByDocumentId(req.body.patient.documentId, (err, data) => {
      if (err.kind === "not_found") {
         const patient = new Patient({
            name: patientData.name,
            enName: patientData.enName,
            gender: patientData.gender,
            dob: patientData.dob,
            phone: patientData.phone,
            weight: patientData.weight,
            height: patientData.height,
            relationship: patientData.relationship,
            nationalityId: patientData.nationalityId,
            documentId: patientData.documentId,
            smoker: patientData.smoker,
            fasting: patientData.fasting,
            createdBy: patientData.createdBy,
         });

         Patient.create(patient, (err, data) => {
            if (err) {
               res.status(500).send({
                  message:
                     err.message ||
                     "Some error occurred while creating the patient.",
               });
            } else {
               if (req.files) {
                  let photoName = generateRandomName(5, 3);
                  var file = req.files.document;
                  var filename = file.name;
                  var ext = filename.substr(filename.lastIndexOf(".") + 1);

                  file.mv(
                     directory.directory +
                        "/app/documents/" +
                        `${photoName}.${ext}`,
                     function (err) {
                        if (err) {
                           console.log(err);
                           res.status(401).send("unable to upload file");
                        } else {
                           const photo = new Photo({
                              photoPath: `documents/${photoName}.${ext}`,
                              patientId: data.id,
                              photoType: 1,
                           });
                           Photo.create(photo, (err, data) => {
                              if (err)
                                 res.status(500).send({
                                    message:
                                       err.message ||
                                       "Some error occurred while creating the photo.",
                                 });
                           });
                           if (req.body.image) {
                              var base64Data = req.body.image.replace(
                                 /^data:image\/jpeg;base64,/,
                                 ""
                              );

                              require("fs").writeFile(
                                 `./app/photos/${data.id}.jpeg`,
                                 base64Data,
                                 "base64",
                                 function (err) {
                                    if (err) {
                                       console.log(err);
                                    } else {
                                       const photo = new Photo({
                                          photoPath: `image/${data.id}.jpeg`,
                                          patientId: data.id,
                                          photoType: 0,
                                       });

                                       Photo.create(photo, (err, data) => {
                                          if (err)
                                             res.status(500).send({
                                                message:
                                                   err.message ||
                                                   "Some error occurred while upload the photo.",
                                             });
                                       });
                                    }
                                 }
                              );
                           }
                        }
                     }
                  );
               } else if (req.body.image) {
                  var base64Data = req.body.image.replace(
                     /^data:image\/jpeg;base64,/,
                     ""
                  );

                  require("fs").writeFile(
                     `./app/photos/${data.id}.jpeg`,
                     base64Data,
                     "base64",
                     function (err) {
                        if (err) {
                           console.log(err);
                        } else {
                           const photo = new Photo({
                              photoPath: `image/${data.id}.jpeg`,
                              patientId: data.id,
                              photoType: 0,
                           });

                           Photo.create(photo, (err, data) => {
                              if (err)
                                 res.status(500).send({
                                    message:
                                       err.message ||
                                       "Some error occurred while upload the photo.",
                                 });
                           });
                        }
                     }
                  );
               }
               res.send(data);
            }
         });
      } else {
         res.status(403).send({
            message: "this patient is already exist",
         });
      }
   });
};

exports.findAll = (req, res) => {
   Patient.getAll((err, data) => {
      if (err)
         res.status(500).send({
            message:
               err.message || "Some error occurred while retrieving patient.",
         });
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   Patient.findById(req.params.id, (err, data) => {
      if (err) {
         if (err.kind === "not_found") {
            res.status(404).send({
               message: `Not found patient with id ${req.params.id}.`,
            });
         } else {
            res.status(500).send({
               message: "Error retrieving patient with id " + req.params.id,
            });
         }
      } else
         res.send({
            name: data[0].name,
            enName: data[0].enName,
            gender: data[0].gender,
            dob: data[0].dob,
            phone: data[0].phone,
            weight: data[0].weight,
            height: data[0].height,
            relationship: data[0].relationship,
            nationalityId: data[0].nationalityId,
            documentId: data[0].documentId,
            smoker: data[0].smoker,
            fasting: data[0].fasting,
            createdAt: data[0].createdAt,
            documentPhoto: extractData(
               data.filter((photo) => photo.photoType == 1)[0]
            ),
            image: extractData(data.filter((photo) => photo.photoType == 0)[0]),
         });
   });
};

exports.findPatientInformation = (req, res) => {
   let page = req.query.page;
   var numPerPage = 10;
   var skip = (page - 1) * numPerPage;
   var limit = skip + "," + numPerPage;
   Patient.findAllPatientData(numPerPage, limit, (err, data) => {
      if (err) {
         res.status(500).send({
            message:
               err.message || "Some error occurred while retrieving patient.",
         });
      }
      let patients = data.patients.map((pat) => {
         return {
            idPatient: pat.idPatient,
            name: pat.name,
            enName: pat.enName,
            gender: pat.gender,
            dob: pat.dob,
            phone: pat.phone,
            weight: pat.weight,
            height: pat.height,
            relationship: pat.relationship,
            nationalityId: pat.nationalityId,
            documentId: pat.documentId,
            smoker: pat.smoker,
            fasting: pat.fasting,
            createdAt: pat.createdAt,
            documentPhoto: data.photos.filter(
               (photo) =>
                  photo.patientId == pat.idPatient && photo.photoType == 1
            )[0],
            image: data.photos.filter(
               (photo) =>
                  photo.patientId == pat.idPatient && photo.photoType == 0
            )[0],
         };
      });
      res.send({
         pages: data.num,
         totalPatients: data.total,
         patients: patients,
      });
   });
};

exports.update = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   Patient.updateById(req.params.id, new Patient(req.body), (err, data) => {
      if (err) {
         if (err.kind === "not_found") {
            res.status(404).send({
               message: `Not found patient with id ${req.params.id}.`,
            });
         } else {
            res.status(500).send({
               message: "Error updating patient with id " + req.params.id,
            });
         }
      } else res.send(data);
   });
};

exports.delete = (req, res) => {
   Patient.remove(req.params.id, (err, data) => {
      if (err) {
         if (err.kind === "not_found") {
            res.status(404).send({
               message: `Not found patient with id ${req.params.id}.`,
            });
         } else {
            res.status(500).send({
               message: "Could not delete patient with id " + req.params.id,
            });
         }
      } else res.send({ message: `patient was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   Patient.removeAll((err, data) => {
      if (err)
         res.status(500).send({
            message:
               err.message ||
               "Some error occurred while removing all patients.",
         });
      else res.send({ message: `All patients were deleted successfully!` });
   });
};
