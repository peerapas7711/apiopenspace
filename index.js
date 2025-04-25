const express = require("express");
const xlsx = require('xlsx');
const path = require('path');
const app = express();
const PORT = 8080;



app.use(express.json());

const {
  leavebalance,
  news,
  quickmenu,
  managewidget,
  // lang5555,
  notifications,
  leaverequest,
  overtime,
  recordtime,
  shiftexchange,
  documents,
  myrequestleave,
  myrequests,
} = require("./datajson");


function readLangExcel() {
  const workbook = xlsx.readFile(path.join(__dirname, 'translated_lang.xlsx'));
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(sheet);

  const lang = {};
  rows.forEach(row => {
    if (row.key && row.th && row.en) {
      lang[row.key] = {
        th: row.th,
        en: row.en,
      };
    }
  });

  return lang;
}

app.get("/lang", (req, res) => {
  const langData = readLangExcel(); // เรียกใช้ function
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: [langData],
  });
});

// app.get("/lang5555", (req, res) => {
//   //   res.status(200).json(quickmenu);
//   res.status(200).json({
//     statuscode: 200,
//     message: "OK",
//     data: lang5555,
//   });
// });

app.get("/leave", (req, res) => {
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: leavebalance,
  });
});

app.get("/quickmenu", (req, res) => {
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: quickmenu,
  });
});

app.get("/managewidget", (req, res) => {
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: managewidget,
  });
});

app.get("/news/list", (req, res) => {
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: news,
  });
});

app.get("/notifications", (req, res) => {
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: notifications,
  });
});

app.get("/leaverequest", (req, res) => {
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: leaverequest,
  });
});

app.get("/overtime", (req, res) => {
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: overtime,
  });
});

app.get("/recordtime", (req, res) => {
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: recordtime,
  });
});

app.get("/shiftexchange", (req, res) => {
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: shiftexchange,
  });
});

app.get("/documents", (req, res) => {
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: documents,
  });
});

app.get("/myrequestleave", (req, res) => {
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: myrequestleave,
  });
});

app.get("/myrequests", (req, res) => {
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: myrequests,
  });
});

app.listen(PORT, () => console.log("Server is running..."));
