const sql = require("./db.js");

const Test = function (test) {
   this.testName = test.testName;
   this.fixed = test.fixed;
   this.price = test.price;
};

Test.create = (newTest, result) => {
   sql.query("INSERT INTO test SET ?", newTest, (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(err, null);
         return;
      }

      console.log("created test: ", {
         id: res.insertId,
         ...newTest,
      });
      result(null, { id: res.insertId, ...newTest });
   });
};

Test.findById = (testId, result) => {
   sql.query(`SELECT * FROM test WHERE idTest = ${testId}`, (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(err, null);
         return;
      }

      if (res.length) {
         console.log("found test: ", res[0]);
         result(null, res[0]);
         return;
      }

      result({ kind: "not_found" }, null);
   });
};

Test.getAll = (result) => {
   sql.query("SELECT * FROM test", (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
      } else {
         sql.query("SELECT * FROM test", (err, resRange) => {
            if (err) {
            } else {
               sql.query("SELECT * FROM test", (err, resOptions) => {
                  if (err) {
                  } else {
                     console.log("tests: ", res);
                     result(null, {
                        tests: res,
                        ranges: resRange,
                        options: resOptions,
                     });
                  }
               });
            }
         });
      }
   });
};

Test.updateById = (id, test, result) => {
   sql.query(
      "UPDATE test SET testName = ? , fixed = ? , price = ?  WHERE idTest = ?",
      [test.testName, test.fixed, test.price, id],
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

         console.log("updated test: ", { id: id, ...test });
         result(null, { id: id, ...test });
      }
   );
};

Test.remove = (id, result) => {
   sql.query("DELETE FROM test WHERE idTest = ?", id, (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
      }

      if (res.affectedRows == 0) {
         result({ kind: "not_found" }, null);
         return;
      }

      console.log("deleted test with id: ", id);
      result(null, res);
   });
};

Test.removeAll = (result) => {
   sql.query("DELETE FROM test", (err, res) => {
      if (err) {
         console.log("error: ", err);
         result(null, err);
         return;
      }

      console.log(`deleted ${res.affectedRows} test`);
      result(null, res);
   });
};

module.exports = Test;
