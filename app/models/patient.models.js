const sql = require("./db.js");

// function formatData(){}

const Patient = function (patient) {
   this.name = patient.name;
   this.enName = patient.enName;
   this.gender = patient.gender;
   this.dob = patient.dob;
   this.phone = patient.phone;
   this.weight = patient.weight;
   this.height = patient.height;
   this.relationship = patient.relationship;
   this.nationalityId = patient.nationalityId;
   this.documentId = patient.documentId;
   this.smoker = patient.smoker;
   this.fasting = patient.fasting;
};

Patient.create = (newPatient, result) => {
   sql.query("INSERT INTO patient SET ?", newPatient, (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(err, null);
         return;
      }

      console.log("created patient: ", {
         id: res.insertId,
         ...newPatient,
      });
      result(null, { id: res.insertId, ...newPatient });
   });
};

Patient.findById = (patientId, result) => {
   sql.query(
      `SELECT * FROM patient LEFT JOIN photo ON photo.patientId = patient.idPatient WHERE patient.idPatient = ${patientId}`,
      (err, res) => {
         if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
         }

         if (res.length) {
            console.log("found patient: ", res);
            result(null, res);
            return;
         }

         result({ kind: "not_found" }, null);
      }
   );
};

Patient.findAllPatientData = (numPerPage, limit, result) => {
   sql.query(`SELECT count(*) as numRows FROM patient`, (err, rows) => {
      if (err) {
         console.log("error: ", err);
         result(err, null);
      } else {
         var numRows = rows[0].numRows;
         var numPages = Math.ceil(numRows / numPerPage);
         sql.query(`SELECT * FROM patient LIMIT ${limit}`, (err, res) => {
            if (err) {
               console.log("error: ", err);
               result(null, err);
               return;
            } else {
               sql.query("SELECT * FROM photo", (err, resPhoto) => {
                  if (err) {
                     console.log("error: ", err);
                     result(null, err);
                     return;
                  }
                  result(null, {
                     patients: res,
                     photos: resPhoto,
                     num: numPages,
                     total: numRows,
                  });
               });
            }
         });
      }
   });
};

Patient.findByDocumentId = (documentId, result) => {
   sql.query(
      `SELECT * FROM patient WHERE documentId = '${documentId}'`,
      (err, res) => {
         if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
         }

         if (res.length) {
            console.log("found patient: ", res[0]);
            result(null, res[0]);
            return;
         }

         result({ kind: "not_found" }, null);
      }
   );
};

Patient.getAll = (result) => {
   sql.query("SELECT * FROM patient", (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
      }

      console.log("nationalities: ", res);
      result(null, res);
   });
};

Patient.updateById = (id, patient, result) => {
   sql.query(
      "UPDATE patient SET nationalName = ?  WHERE idPatient = ?",
      [patient.nationalName, id],
      (err, res) => {
         if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
         }

         if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
         }

         console.log("updated patient: ", { id: id, ...patient });
         result(null, { id: id, ...patient });
      }
   );
};

Patient.remove = (id, result) => {
   sql.query("DELETE FROM patient WHERE idPatient = ?", id, (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
      }

      if (res.affectedRows == 0) {
         result({ kind: "not_found" }, null);
         return;
      }

      console.log("deleted patient with id: ", id);
      result(null, res);
   });
};

Patient.removeAll = (result) => {
   sql.query("DELETE FROM patients", (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
      }

      console.log(`deleted ${res.affectedRows} patients`);
      result(null, res);
   });
};

module.exports = Patient;
