const Excel = require("exceljs");
const directory = require("./../../server");
const path = require("path");

exports.createExcel = async (req, res) => {
   const workbook = new Excel.Workbook();
   const worksheet = workbook.addWorksheet("My Sheet");

   worksheet.columns = [
      { header: "index", key: "index" },
      { header: "patient name", key: "patientName" },
      { header: "age", key: "age" },
      { header: "gender", key: "gender" },
      { header: "address", key: "address" },
      { header: "test name", key: "testName" },
      { header: "result", key: "result" },
      { header: "phone", key: "phone" },
      { header: "date", key: "date" },
      { header: "patient result id", key: "testId" },
      { header: "price", key: "price" },
   ];
   worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
      cell.alignment = { vertical: "middle", horizontal: "center" };
   });

   req.body.forEach((patient, i) => {
      worksheet.addRow({
         index: i + 1,
         patientName: patient.patientName,
         age: patient.age,
         gender: patient.gender,
         address: patient.address,
         testName: patient.testName,
         result: patient.result,
         phone: patient.phone,
         date: patient.date,
         testId: patient.testId,
         price: patient.price,
      });
   });
   await workbook.xlsx.writeFile(`static.xlsx`);
   res.send({ url: "excel/static.xlsx" });
};
