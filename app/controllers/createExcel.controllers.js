const Excel = require("exceljs");

exports.createExcel = (req, res) => {
   let self = this;
   const workbook = new Excel.Workbook();
   const worksheet = workbook.addWorksheet("My Sheet");
   worksheet.views = [{ rightToLeft: true }];

   worksheet.columns = [
      { header: "name", key: "name", width: 55 },
      { header: "age", key: "age", width: 55 },
      { header: "gender", key: "gender", width: 55 },
      { header: "address", key: "address", width: 55 },
      { header: "result", key: "result", width: 55 },
      { header: "phone", key: "phone", width: 55 },
      { header: "date", key: "date", width: 55 },
      { header: "type of test", key: "testType", width: 55 },
      { header: "price", key: "price", width: 55 },
      { header: "patient result id", key: "testId", width: 55 },
   ];
};
