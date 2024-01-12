import { Router } from "express";
import Bitmap from "../models/Bitmap.js";
import axios from "axios";

const router = Router();

router.post("/", async (request, response) => {
  try {
    const newLookup = new Bitmap(request.body);

    const tokenId = request.body.tokenId;

    const traits = await axios.get(
      `https://api-mainnet.magiceden.dev/v2/ord/btc/activities?collectionSymbol=bitmap&kind=transfer&tokenId=${tokenId}`
    );

    response.json({
      postData: newLookup,
      traits: traits.data
    });
  } catch (error) {
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
