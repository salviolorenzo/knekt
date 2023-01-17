import express from "express";
import UserDao from "../models/user";

const userRouter = express.Router();
const userDao = new UserDao();

userRouter.get("/", async (req, res) => {
    const users = await userDao.getAllUsers();
    res.send(users);
});

userRouter.get("/:id", async (req, res) => {
    const user = await userDao.getUserById(req.params.id);
    res.send(user);
});

export default userRouter;
