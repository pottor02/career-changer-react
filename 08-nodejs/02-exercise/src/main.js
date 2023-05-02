import express, { request, response } from "express";
const webServer = express();
const ipAddress = "127.0.0.2";
const port = 3001;


// code down below

webServer.get("/", (request, response) => {
    response.send("This is Root Route");
});

webServer.get("/news", (request, response) => {
    const newsData = [
        {
            name: "newsName01",
            detail: "newsDetail01"
        },
        {
            name: "newsName02",
            detail: "newsDetail02"
        },
        {
            name: "newsName03",
            detail: "newsDetail03"
        }
    ];
    response.json(newsData);
});

webServer.get("/users", (request, response) => {
    const usersData = [
        {userId: "PT0001"},
        {userId: "PT0002"},
        {userId: "PT0003"}
    ];
    response.json(usersData);
});

webServer.get("/me", (req, res) => {
    const meData = [
        {
            name: "mock-name",
            role: "user",
            picture: "https://shorturl.at/qtFJM"
          }
    ];
    res.json(meData);
});

webServer.get("/health-check", (req, res) => {
    res.send("Server is fine!")
});


webServer.listen(port, ipAddress, () => {
    console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
    console.log(`Address: http://${ipAddress}:${port}`);
  });