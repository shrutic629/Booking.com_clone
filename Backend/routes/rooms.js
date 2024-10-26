import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getSingleRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
const router = express.Router();

// create
router.post("/:hotelid", verifyAdmin, createRoom);

// update
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

// delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// get
router.get("/:id", getSingleRoom);

// getall
router.get("/", getAllRooms);

export default router;
