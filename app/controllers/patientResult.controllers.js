const PatientResult = require("../models/patientResult.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const patientResult = new PatientResult({
      testId: req.body.testId,
      requested: req.body.requested
         ? req.body.requested
         : "0000-00-00 00:00:00	",
      collected: req.body.collected
         ? req.body.collected
         : "0000-00-00 00:00:00	",
      received: req.body.received ? req.body.received : "0000-00-00 00:00:00",
      perform: req.body.perform ? req.body.perform : "0000-00-00 00:00:00",
      result: req.body.result,
      quantity: req.body.quantity,
      price: req.body.price,
   });

   PatientResult.create(patientResult, (err, data) => {
      if (err)
         res.status(500).send({
            message:
               err.message ||
               "Some error occurred while creating the patientResult.",
         });
      else res.send(data);
   });
};

exports.findAll = (req, res) => {
   PatientResult.getAll((err, data) => {
      if (err)
         res.status(500).send({
            message:
               err.message ||
               "Some error occurred while retrieving patientResult.",
         });
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   PatientResult.findById(req.params.id, (err, data) => {
      if (err) {
         if (err.kind === "not_found") {
            res.status(404).send({
               message: `Not found patientResult with id ${req.params.id}.`,
            });
         } else {
            res.status(500).send({
               message:
                  "Error retrieving patientResult with id " + req.params.id,
            });
         }
      } else res.send(data);
   });
};

exports.update = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   PatientResult.updateById(
      req.params.id,
      new PatientResult(req.body),
      (err, data) => {
         if (err) {
            if (err.kind === "not_found") {
               res.status(404).send({
                  message: `Not found patientResult with id ${req.params.id}.`,
               });
            } else {
               res.status(500).send({
                  message:
                     "Error updating patientResult with id " + req.params.id,
               });
            }
         } else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   PatientResult.remove(req.params.id, (err, data) => {
      if (err) {
         if (err.kind === "not_found") {
            res.status(404).send({
               message: `Not found patientResult with id ${req.params.id}.`,
            });
         } else {
            res.status(500).send({
               message:
                  "Could not delete patientResult with id " + req.params.id,
            });
         }
      } else res.send({ message: `patientResult was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   PatientResult.removeAll((err, data) => {
      if (err)
         res.status(500).send({
            message:
               err.message ||
               "Some error occurred while removing all patientResult.",
         });
      else
         res.send({ message: `All patientResult were deleted successfully!` });
   });
};
