module.exports = (app) => {
   const createExcel = require("../controllers/createExcel.controllers.js");

   app.post("/api/createExcel", createExcel.createExcel);
};
