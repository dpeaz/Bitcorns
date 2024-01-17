import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/:token", async (request, response) => {
  try {
    const inscriptionLookup = request.params.token;
    const apiResponse = await axios
      .get(
        `https://api-mainnet.magiceden.dev/v2/ord/btc/activities?collectionSymbol=bitmap&kind=transfer&tokenId=${inscriptionLookup}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.MAGICEDEN_API}`
          }
        }
      )
      .then(bitResponse => {
        console.log("bitResponse", bitResponse.data);
        response.json(bitResponse.data.activities[0].token.meta.attributes);
      });

    // console.log(apiResponse.data);
    // response.redirect("/Bitmap");
  } catch (error) {
    // If there is an error log it to the console
    console.log("Error!", error);
    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
