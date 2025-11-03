import express from "express";
import config from "./config";
import { test } from "./firebase";

const app = express();

// Bundle api
// Get -> return all data bundles
// Get :id -> return data bundle by id
// Get :network -> return data bundles by network
// Get /search?q= -> search data bundles by query
// Post -> create new data bundle
// Put :id -> update data bundle by id
// Delete :id -> delete data bundle by id

// Data purchase api
// api object: {
//   userId: string;
//   bundleId: string;
//   phoneNumber: string;
//   units: number;
// }
// api-token: string;
// Post /purchase -> purchase data bundle

app.get("/", (req, res) => {
    res.send({ ok: "Hello, World!" });
});

app.get("/test", async (req, res) => {
    const result = await test();
    res.send(result);
});

app.listen(config.port, () => {
    console.log("Server started successfully.");
    console.log(`Server is running on http://localhost:${config.port}`);
});
