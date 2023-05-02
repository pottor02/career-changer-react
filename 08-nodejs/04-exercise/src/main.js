import express from "express";
const webServer = express();
webServer.use(express.json());

const ipAddress = "127.0.0.4";
const port = 3001;

// code here.
const company = [
  { companyId: "com01", name: "Johny", taxId: "tax001", employees: []},
  { companyIdy: "com02", name: "Tony", taxId: "tax002", employees: []},
];

webServer.get("/", (request, response) => {
  response.send("Hello world. This Main Route");
});

webServer.get("/company", (request, response) => {
  response.json(company);
});

webServer.post("/company", (request, response) => {
  const name = request.body.name;
  // const taxId = request.body.taxId;
  const taxId = `tax${company.length + 1}`;
  const companyId = `com${company.length + 1}`;
  company.push({ companyId, name, taxId });
  response.send("Create User Success. This Company Route.");
});

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
