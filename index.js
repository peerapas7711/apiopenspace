const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

const {
  leavebalance,
  news,
  quickmenu,
  managewidget,
  lang,
  notifications,
  leaverequest,
  overtime,
  recordtime,
  shiftexchange,
  documents,
  myrequestleave,
} = require("./datajson");

app.get("/lang", (req, res) => {
  //   res.status(200).json(quickmenu);
  res.status(200).json({
    statuscode: 200,
    message: "OK",
    data: lang,
  });
});

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

app.listen(PORT, () => console.log("Server is running..."));
