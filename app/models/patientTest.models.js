const sql = require("./db.js");

const PatientTest = function (patientTest) {
   this.patientId = patientTest.patientId;
   this.testId = patientTest.testId;
   this.providerId = patientTest.providerId;
};

PatientTest.create = (newPatientTest, result) => {
   sql.query("INSERT INTO patientTest SET ?", newPatientTest, (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(err, null);
         return;
      }

      console.log("created patientTest: ", {
         id: res.insertId,
         ...newPatientTest,
      });
      result(null, { id: res.insertId, ...newPatientTest });
   });
};

PatientTest.findById = (patientTestId, result) => {
   sql.query(
      `SELECT * FROM patientTest WHERE idPatientTest = ${patientTestId}`,
      (err, res) => {
         if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
         }

         if (res.length) {
            console.log("found patientTest: ", res[0]);
            result(null, res[0]);
            return;
         }

         result({ kind: "not_found" }, null);
      }
   );
};

PatientTest.getAll = (result) => {
   sql.query("SELECT * FROM patientTest", (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
      }

      console.log("nationalities: ", res);
      result(null, res);
   });
};

PatientTest.updateById = (id, patientTest, result) => {
   sql.query(
      "UPDATE patientTest SET patientId = ? ,  providerId = ?   WHERE idPatientTest = ?",
      [patientTest.patientId, patientTest.providerId, id],
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

         console.log("updated patientTest: ", { id: id, ...patientTest });
         result(null, { id: id, ...patientTest });
      }
   );
};

PatientTest.remove = (id, result) => {
   sql.query(
      "DELETE FROM patientTest WHERE idPatientTest = ?",
      id,
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

         console.log("deleted patientTest with id: ", id);
         result(null, res);
      }
   );
};

PatientTest.removeAll = (result) => {
   sql.query("DELETE FROM patientTest", (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
      }

      console.log(`deleted ${res.affectedRows} patientTest`);
      result(null, res);
   });
};

module.exports = PatientTest;
