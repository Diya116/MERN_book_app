import express from "express";
const router=express.Router();
import { getbook,getbooks,postbook,deletebook,putbook } from "./controller.js";
/** GET */
router.route("/book").get(getbooks)
router.route("/book/:id").get(getbook)
/** POST */
router.route("/book").post(postbook)
/** PUT */
router.route("/book/:id").put(putbook)
router.route("/book/:id").delete(deletebook)
export default router;