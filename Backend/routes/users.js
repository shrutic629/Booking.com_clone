import express from "express";
import { deleteUser, getAllUsers, getSingleUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get('/checkauthentication',verifyToken,(req,res,next)=>{
//     res.send("hello user, you are logged in")
// })

// router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account")
// })

// router.get('/checkadmin/:id',verifyAdmin,(req,res,next)=>{
//     res.send("hello admin, you are logged in and you can delete all accounts")
// })

// update
router.put('/:id',verifyUser,updateUser)

// delete
router.delete('/:id',verifyUser,deleteUser)

// get
router.get('/:id',verifyUser,getSingleUser)

// getall
router.get('/',verifyAdmin,getAllUsers)

export default router;
