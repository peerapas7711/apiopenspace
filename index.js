const express = require("express");
const xlsx = require("xlsx");
const path = require("path");
const app = express();
const PORT = 8080;

app.use(express.json());

const { quickmenu, managewidget } = require("./datajson");

function readLangExcel() {
  const workbook = xlsx.readFile(path.join(__dirname, "translated_lang.xlsx"));
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = xlsx.utils.sheet_to_json(sheet);

  const lang = {};
  rows.forEach((row) => {
    if (row.key && row.th && row.en) {
      lang[row.key] = {
        th: row.th,
        en: row.en,
      };
    }
  });

  return lang;
}

const FIXED_AUTH =
  "1c9f8a3c4a3e06a5e7bb6d5b5ed3c8d9c5f2d4eabbc5db6e74c1d12d5fc0ba4c";

app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/lang", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== FIXED_AUTH) {
    return res.status(401).json({
      statuscode: 401,
      message: "Unauthorized",
    });
  }

  const langData = readLangExcel();
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: [langData],
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

app.get("/statuscheckin", (req, res) => {
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: true,
  });
});

app.get("/baseversion", (req, res) => {
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: "1",
  });
});

app.get("/banners", (req, res) => {
  const protocol = req.protocol;
  const host = req.headers.host;

  const baseUrl = `${protocol}://${host}`;

  const banners = [
    {
      title: "Tigersoft 1998",
      image: `${baseUrl}/static/Banner App-01.png`,
      url: `https://tigersoft.co.th/`,
    },
    {
      title: "Tigersoft 1998",
      image: `${baseUrl}/static/Banner App-02.png`,
      url: `https://tigersoft.co.th/blog-articles/`,
    },
    {
      title: "Tigersoft 1998",
      image: `${baseUrl}/static/Banner App-03.png`,
      url: `https://www.facebook.com/Tigersoft.co.th/`,
    },
   
  ];

  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: banners,
  });
});

app.listen(PORT, () => console.log("Server is running..."));
