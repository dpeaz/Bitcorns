import { Router } from "express";
import Pending from "../models/Pending.js";

const router = Router();

router.post("/", async (request, response) => {
  try {
    const newPending = new Pending(request.body);

    const data = await newPending.save();

    response.json(data);
  } catch (error) {
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
