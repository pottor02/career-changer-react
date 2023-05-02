import express from "express";
const webServer = express();
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

// code here.
const company = [
  { userID: "Boss01", name: "Johny", age: 19},
  { userID: "Boss02", name: "Tony", age: 29},
];

webServer.get("/", (request, response) => {
  response.send("Hello world. This Main Route");
});

webServer.get("/", (request, response) => {
  response.json(company);
});


webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
