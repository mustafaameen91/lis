const Excel = require("exceljs");
const directory = require("./../../server");
const path = require("path");
const fs = require("fs");
const html_to_pdf = require("html-pdf-node");

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

exports.createInvoice = async (req, res) => {
   try {
      let options = { format: "A4" };
      let logoImage = fs.readFileSync(path.join(__dirname, "logo.png"), {
         encoding: "base64",
      });

      let allTests = req.body.tests.map((test) => {
         return `</div><div style="display: flex; direction: ltr;padding: 2px 15px;"><div style="flex-grow: 3;"><h5 style="margin: 0px ;">${test.testName}</h5></div><div style="flex-grow: 1;"><h5 style="margin: 0px ;">${test.charge}</h5></div></div>`;
      });

      console.log(allTests);

      let file = {
         content: `<header style="display:flex;direction: rtl;">
                  
                  <div style="flex-grow: 1;text-align: center;margin-top: 30px;">
                      <h4 style="font-size: 16px;margin: 4px 0px;">المختبر الوطني الاستثماري / الكرخ</h4>
                      <h4 style="font-size: 16px;margin: 4px 0px;">للتحليلات المرضية</h4>
                  </div>
                  <div style="flex-grow: 1;text-align: center;"><img src="data:image/png;base64,${logoImage}" width="120"></div>
                  <div style="flex-grow: 1;text-align: right;margin-top: 30px;">
                      <h4 style="font-size: 16px;margin: 4px 0px;">العدد : </h4>
                      <h4 style="font-size: 16px;margin: 4px 0px;">التاريخ : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / </h4>
                  </div>
              </header>
              <div style="margin: 15px;border: 1px solid #31c049"></div>
              <div style="margin: 15px;border: 1px solid #353535"></div>
              <div style="text-align: center;">
                  <div style="width: 20%;margin: auto;border: 1px solid #464646;box-shadow: 3px 3px 0px #888888;">
                      <h3 style="margin: 5px ;">Receipt</h3>
                  </div>
              </div>
              <div style="display: flex; direction: ltr;padding: 15px;">
                  <div style="flex-grow: 1;">
                      <h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;width: 30%;">Name </h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;padding-right: 5px;">:</h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;">${req.body.name}</h6>
                      <br>
                      <h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;width: 30%;">Age / Gender  </h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;padding-right: 5px;">:</h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;">${req.body.age}</h6>
                      <br>
                      <h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;width: 30%;">Received Date  </h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;padding-right: 5px;">:</h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;">${req.body.received}</h6>
                      <br>
                      <h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;width: 30%;">Phone No  </h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;padding-right: 5px;">:</h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;">${req.body.phone}</h6>
                  </div>
                  <div style="flex-grow: 1;">
                      <h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;width: 30%;">PPID  </h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;padding-right: 5px;">:</h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;">${req.body.patientId}</h6>
                      <br>
                      <h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;width: 30%;">Bill No  </h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;padding-right: 5px;">:</h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;">${req.body.billId}</h6>
                      <br>
                      <h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;width: 30%;">Bill Date  </h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;padding-right: 5px;">:</h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;">${req.body.billDate}</h6>
                      <br>
                      <h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;width: 30%;">Center</h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;padding-right: 5px;">:</h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;">المختبر الوطني</h6>
                  </div>
              </div>
              <div style="margin: 5px 15px;border: 1px solid #353535"></div>
              <div style="display: flex; direction: ltr;padding: 15px;">
                  <div style="flex-grow: 3;"><h4 style="margin: 0px ;">Test Name</h4></div>
                  <div style="flex-grow: 1;"><h4 style="margin: 0px ;">Test Charges</h4></div>
              </div>

              ${allTests}
              
              <div style="margin: 5px 15px;border: 1px solid #353535"></div>
              <div style="display: flex; direction: ltr;padding: 2px 15px;">
                  <div style="flex-grow: 1;"><h5 style="margin: 0px ;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5></div>
                  <div style="flex-grow: 1;"><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;width: 20%;">Total Price  </h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;padding-right: 5px;">:</h6><h6 style="font-size: 14px;margin: 3px 0px;display: inline-block;">${req.body.totalPrice}</h6></div>
              </div>
              <div style="text-align: center;"><h4 style="margin: 5px ;">Thank You</h4></div>
              <div style="text-align: right;padding: 20px;">
                  <span><span><span>TPI</span> <span> بغداد - الحارثية - نهاية شارع الكندي - فرع مصرف ال</span> </span><?xml version="1.0" encoding="iso-8859-1"?>
                  <svg version="1.1" id="Capa_1" width="15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                  <path style="fill:#FD003A;" d="M256,0C156.698,0,76,80.7,76,180c0,33.6,9.302,66.301,27.001,94.501l140.797,230.414
                      c2.402,3.9,6.002,6.301,10.203,6.901c5.698,0.899,12.001-1.5,15.3-7.2l141.2-232.516C427.299,244.501,436,212.401,436,180
                      C436,80.7,355.302,0,256,0z M256,270c-50.398,0-90-40.8-90-90c0-49.501,40.499-90,90-90s90,40.499,90,90
                      C346,228.9,306.999,270,256,270z"/>
                  <path style="fill:#E50027;" d="M256,0v90c49.501,0,90,40.499,90,90c0,48.9-39.001,90-90,90v241.991
                      c5.119,0.119,10.383-2.335,13.3-7.375L410.5,272.1c16.799-27.599,25.5-59.699,25.5-92.1C436,80.7,355.302,0,256,0z"/>
                  <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></span>
              </div>
              <div style="margin: 5px 15px;border: 1px solid #31c049"></div>
              <div style="display: flex; direction: ltr;padding: 5px 20px;">
                  <div style="flex-grow: 1;">
                      <h5 style="display: flex;">
                          <?xml version="1.0" encoding="iso-8859-1"?>
                          <svg version="1.1" id="Capa_1" width="15px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 477.73 477.73" style="enable-background:new 0 0 477.73 477.73;" xml:space="preserve">
                      <g><g><path d="M433.562,100.983c-0.008-0.154-0.025-0.308-0.051-0.461c-0.597-0.853-1.331-1.587-1.946-2.423
                                  c-4.46-6.076-9.182-11.924-14.165-17.545c-1.365-1.536-2.731-3.055-4.13-4.557c-5.131-5.495-10.513-10.735-16.145-15.718
                                  c-1.041-0.922-2.014-1.877-3.055-2.782c-13.88-11.891-29.078-22.153-45.295-30.583c-0.649-0.341-1.331-0.631-1.997-0.973
                                  c-7.222-3.67-14.627-6.969-22.187-9.882c-1.707-0.614-3.26-1.195-4.881-1.707c-6.724-2.423-13.551-4.545-20.48-6.366
                                  c-2.048-0.546-4.096-1.109-6.178-1.587c-6.827-1.587-13.653-2.799-20.634-3.789c-2.116-0.307-4.198-0.717-6.332-0.973
                                  c-17.979-2.185-36.156-2.185-54.136,0c-2.133,0.256-4.215,0.666-6.332,0.973c-6.98,0.99-13.875,2.202-20.634,3.789
                                  c-2.082,0.478-4.13,1.041-6.178,1.587c-6.975,1.82-13.801,3.942-20.48,6.366c-1.707,0.58-3.26,1.161-4.881,1.707
                                  c-7.559,2.913-14.965,6.211-22.187,9.882c-0.666,0.341-1.348,0.631-1.997,0.973c-16.271,8.421-31.52,18.682-45.449,30.583
                                  c-1.041,0.904-2.014,1.86-3.055,2.782c-5.689,5.006-11.071,10.246-16.145,15.718c-1.399,1.502-2.765,3.021-4.13,4.557
                                  c-4.995,5.609-9.717,11.457-14.165,17.544c-0.614,0.836-1.348,1.57-1.946,2.423c-0.078,0.149-0.147,0.303-0.205,0.461
                                  c-58.866,82.497-58.866,193.267,0,275.763c0.058,0.158,0.126,0.312,0.205,0.461c0.597,0.853,1.331,1.587,1.946,2.423
                                  c4.449,6.076,9.17,11.924,14.165,17.545c1.365,1.536,2.731,3.055,4.13,4.557c5.143,5.495,10.524,10.735,16.145,15.718
                                  c1.041,0.922,2.014,1.877,3.055,2.782c13.88,11.891,29.078,22.153,45.295,30.583c0.649,0.341,1.331,0.631,1.997,0.973
                                  c7.222,3.67,14.627,6.969,22.187,9.882c1.707,0.614,3.26,1.195,4.881,1.707c6.724,2.423,13.551,4.545,20.48,6.366
                                  c2.048,0.546,4.096,1.109,6.178,1.587c6.827,1.587,13.653,2.799,20.634,3.789c2.116,0.307,4.198,0.717,6.332,0.973
                                  c17.979,2.185,36.156,2.185,54.136,0c2.133-0.256,4.215-0.666,6.332-0.973c6.98-0.99,13.875-2.202,20.634-3.789
                                  c2.082-0.478,4.13-1.041,6.178-1.587c6.986-1.82,13.813-3.942,20.48-6.366c1.707-0.58,3.26-1.161,4.881-1.707
                                  c7.559-2.913,14.965-6.211,22.187-9.882c0.666-0.341,1.348-0.631,1.997-0.973c16.217-8.431,31.415-18.692,45.295-30.583
                                  c1.041-0.905,2.014-1.86,3.055-2.782c5.689-4.995,11.071-10.234,16.145-15.718c1.399-1.502,2.765-3.021,4.13-4.557
                                  c4.995-5.621,9.717-11.469,14.165-17.545c0.614-0.836,1.348-1.57,1.946-2.423c0.078-0.149,0.147-0.303,0.205-0.461
                                  C492.428,294.25,492.428,183.48,433.562,100.983z M414.089,133.274c16.322,26.881,26.178,57.185,28.791,88.525H340.651
                                  c-1.252-20.336-4.452-40.504-9.557-60.228C359.971,156.163,387.922,146.633,414.089,133.274z M282.368,38.775
                                  c0.956,0.222,1.877,0.529,2.833,0.751c6.11,1.434,12.169,3.072,18.091,5.12c0.905,0.307,1.792,0.666,2.68,0.99
                                  c5.871,2.048,11.656,4.318,17.323,6.827c0.99,0.461,1.963,0.973,2.953,1.434c5.427,2.583,10.729,5.376,15.906,8.38l3.413,2.065
                                  c4.915,3.004,9.694,6.218,14.336,9.643c1.195,0.87,2.389,1.707,3.567,2.662c4.551,3.413,8.909,7.071,13.073,10.974
                                  c1.092,0.99,2.219,1.963,3.294,2.987c4.369,4.147,8.533,8.533,12.561,13.073c0.512,0.597,1.058,1.143,1.57,1.707
                                  c-23.109,11.013-47.59,18.877-72.789,23.381c-11.674-32.092-27.095-62.694-45.943-91.17
                                  C277.606,38.025,280.03,38.264,282.368,38.775z M171.298,221.798c1.346-18.466,4.49-36.757,9.387-54.613
                                  c19.337,2.297,38.793,3.436,58.266,3.413c19.491-0.006,38.965-1.174,58.317-3.499c4.888,17.885,8.015,36.205,9.335,54.699H171.298
                                  z M306.603,255.932c-1.346,18.466-4.49,36.757-9.387,54.613c-19.337-2.297-38.793-3.436-58.266-3.413
                                  c-19.49-0.022-38.963,1.117-58.317,3.413c-4.883-17.857-8.009-36.148-9.336-54.613H306.603z M238.95,45.193
                                  c19.422,27.527,35.396,57.332,47.565,88.747c-15.799,1.678-31.676,2.521-47.565,2.526c-15.871-0.019-31.731-0.867-47.514-2.543
                                  C203.62,102.529,219.575,72.734,238.95,45.193z M85.521,103.663c4.011-4.54,8.192-8.926,12.561-13.073
                                  c1.075-1.024,2.202-1.997,3.294-2.987c4.21-3.834,8.568-7.492,13.073-10.974c1.178-0.905,2.372-1.707,3.567-2.662
                                  c4.642-3.413,9.421-6.628,14.336-9.643l3.413-2.065c5.177-3.026,10.479-5.82,15.906-8.38c0.99-0.461,1.963-0.973,2.953-1.434
                                  c5.666-2.56,11.452-4.83,17.323-6.827c0.887-0.324,1.707-0.683,2.679-0.99c5.922-1.98,11.947-3.618,18.091-5.12
                                  c0.956-0.222,1.877-0.529,2.85-0.734c2.338-0.512,4.762-0.751,7.134-1.178c-18.856,28.481-34.282,59.089-45.961,91.187
                                  c-25.199-4.504-49.681-12.368-72.789-23.381C84.463,104.806,85.009,104.26,85.521,103.663z M63.812,133.274
                                  c26.161,13.358,54.106,22.888,82.978,28.297c-5.099,19.725-8.294,39.893-9.54,60.228H35.021
                                  C37.635,190.459,47.491,160.155,63.812,133.274z M63.812,344.457c-16.322-26.881-26.178-57.185-28.791-88.525H137.25
                                  c1.252,20.336,4.452,40.504,9.557,60.228C117.93,321.567,89.979,331.097,63.812,344.457z M195.533,438.955
                                  c-0.956-0.222-1.877-0.529-2.833-0.751c-6.11-1.434-12.169-3.072-18.091-5.12c-0.905-0.307-1.792-0.666-2.68-0.99
                                  c-5.871-2.048-11.656-4.318-17.323-6.827c-0.99-0.461-1.963-0.973-2.953-1.434c-5.427-2.583-10.729-5.376-15.906-8.38
                                  l-3.413-2.065c-4.915-3.004-9.694-6.218-14.336-9.643c-1.195-0.87-2.389-1.707-3.567-2.662
                                  c-4.551-3.413-8.909-7.071-13.073-10.974c-1.092-0.99-2.219-1.963-3.294-2.987c-4.369-4.147-8.533-8.533-12.561-13.073
                                  c-0.512-0.597-1.058-1.143-1.57-1.707c23.109-11.013,47.59-18.877,72.789-23.381c11.674,32.092,27.095,62.694,45.943,91.17
                                  C200.294,439.706,197.871,439.467,195.533,438.955z M238.95,432.538c-19.422-27.527-35.396-57.332-47.565-88.747
                                  c31.607-3.402,63.488-3.402,95.095,0l-0.017,0.017C274.281,375.201,258.326,404.996,238.95,432.538z M392.38,374.067
                                  c-4.011,4.54-8.192,8.926-12.561,13.073c-1.075,1.024-2.202,1.997-3.294,2.987c-4.21,3.846-8.568,7.504-13.073,10.974
                                  c-1.178,0.904-2.372,1.792-3.567,2.662c-4.642,3.413-9.421,6.628-14.336,9.643l-3.413,2.065
                                  c-5.166,3.015-10.468,5.808-15.906,8.38c-0.99,0.461-1.963,0.973-2.953,1.434c-5.666,2.56-11.452,4.83-17.323,6.827
                                  c-0.887,0.324-1.707,0.683-2.679,0.99c-5.922,1.98-11.947,3.618-18.091,5.12c-0.956,0.222-1.877,0.529-2.85,0.734
                                  c-2.338,0.512-4.762,0.751-7.134,1.178c18.848-28.476,34.27-59.078,45.943-91.17c25.199,4.504,49.681,12.368,72.789,23.381
                                  C393.438,372.924,392.892,373.47,392.38,374.067z M414.089,344.457c-26.161-13.358-54.106-22.888-82.978-28.297
                                  c5.099-19.725,8.294-39.893,9.54-60.228H442.88C440.266,287.271,430.41,317.575,414.089,344.457z"/>
                          </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg><span> &nbsp; www.thenationallab.com </span>
                      </h5>
                      <h5 style="display: flex;">
                      <?xml version="1.0" encoding="iso-8859-1"?>
                      <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                      <svg version="1.1" id="Capa_1" width="15px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                           viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                           <g><g><polygon points="339.392,258.624 512,367.744 512,144.896 		"/></g></g><g><g><polygon points="0,144.896 0,367.744 172.608,258.624"/></g></g><g><g>
                      <path d="M480,80H32C16.032,80,3.36,91.904,0.96,107.232L256,275.264l255.04-168.032C508.64,91.904,495.968,80,480,80z"/></g></g><g>
                      <g><path d="M310.08,277.952l-45.28,29.824c-2.688,1.76-5.728,2.624-8.8,2.624c-3.072,0-6.112-0.864-8.8-2.624l-45.28-29.856
                                  L1.024,404.992C3.488,420.192,16.096,432,32,432h448c15.904,0,28.512-11.808,30.976-27.008L310.08,277.952z"/>
                      </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg> <span> &nbsp; info@nationallab.com</span>
                  </h5></div>
          
                  <div style="flex-grow: 1;">
                      <h5 style="display: flex;">
                      <?xml version="1.0" encoding="iso-8859-1"?>
                      <svg version="1.1" id="Capa_1" width="15px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g>
                      <path d="M448,0H64C28.704,0,0,28.704,0,64v384c0,35.296,28.704,64,64,64h192V336h-64v-80h64v-64c0-53.024,42.976-96,96-96h64v80
                                  h-32c-17.664,0-32-1.664-32,16v64h80l-32,80h-48v176h96c35.296,0,64-28.704,64-64V64C512,28.704,483.296,0,448,0z"/>
                      </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>  
                       <span>&nbsp;
                          المختبر الوطني للتحليلات المرضية 
                      </span>
                  </h5></div>
                  <div style="flex-grow: 1;">
                      <h5 style="display: flex;">
                          <?xml version="1.0" encoding="iso-8859-1"?>
                          <svg version="1.1" width="15px" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                              viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve">
                          <g>
                              <g>
                                  <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
                                      c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
                                      c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
                                      C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"
                                      />
                              </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                              <span> &nbsp;07723383835</span>
                      </h5>
                      <h5 style="display: flex;">
                          <?xml version="1.0" encoding="iso-8859-1"?>
                          <svg version="1.1" width="15px" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                              viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve">
                          <g>
                              <g>
                                  <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
                                      c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
                                      c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
                                      C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"
                                      />
                              </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                              <span> &nbsp;07823383835</span>
                      </h5>
                  </div>
              </div><div style="margin: 5px 15px;border: 5px solid #31c049"></div>`,
      };

      html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
         fs.writeFileSync(`${directory.directory}/bill.pdf`, pdfBuffer);
      });

      res.send({
         bill: fs.readFileSync(`${directory.directory}/bill.pdf`, {
            encoding: "base64",
         }),
      });
   } catch (e) {
      console.log(e);
   }
};
