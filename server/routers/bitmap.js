import { Router } from "express";
import Bitmap from "../models/Bitmap.js";
import axios from "axios";

const router = Router();

router.get("/:token", async (request, response) => {
  try {
    axios
      // Make a POST request to the API to look up Bitmap attributes
      // https://api-mainnet.magiceden.dev/v2/ord/btc/activities?collectionSymbol=bitmap&kind=transfer&tokenId=28c7b6e206d74172182f1bf5dc0ddfeb4e3d6fc3996964a4f973e6c21fac943bi0
      .get(
        `${process.env.MAGICEDEN_API_URL}/v2/ord/btc/activities?collectionSymbol=bitmap&kind=transfer&tokenId=${request.params.token}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.MAGICEDEN_API}`
          }
        }
      )
      .then(XHRresponse => {
        //  Then use returned attributes to get Magic Eden floor price for each trait
        console.log(XHRresponse);
        response.json(XHRresponse.data);
      })
      // If there is an error log it to the console
      .catch(error => {
        console.log("Error!", error);
      });
  } catch (error) {
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
