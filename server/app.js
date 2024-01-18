import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bitmaps from "./routers/bitmap.js";
import axios from "axios";
import pendings from "./routers/pendings.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/api/bitmap/:token", async (req, res) => {
  const { token } = req.params;
  const apiUrl = `https://api-mainnet.magiceden.dev/v2/ord/btc/activities?collectionSymbol=bitmap&kind=transfer&tokenId=${token}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.MAGICEDEN_API}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error!", error);
    res
      .status(error.response ? error.response.status : 500)
      .json({ error: "Internal Server Error" });
  }
});

mongoose.connect(process.env.MONGODB, {
  // Configuration options to remove deprecation warnings, just include them to remove clutter
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const PORT = process.env.PORT || 4040;

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

// Logging Middleware
const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);

// Request handlers go here
app.get("/status", (request, response) => {
  response.status(200).json({ message: "Service healthy" });
});

app.use("/bitmaps", bitmaps);
app.use("/pending", pendings);

app.listen(4040, () => console.log("Listening on port 4040"));
