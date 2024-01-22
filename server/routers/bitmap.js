import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/:token", (request, response) => {
  try {
    const inscriptionLookup = request.params.token;
    axios
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
  } catch (error) {
    // If there is an error log it to the console
    console.log("Error!", error);

    return response.status(500).json(error.errors);
  }
});

export default router;
