import express from "express"
import champions from "./routes/ChampionsRoutes.js"
import auth from "./routes/AuthRoutes.js"
import user from "./routes/UserRoutes.js"

const router = express.Router();

router.use("/champions", champions)
router.use("/auth", auth)
router.use("/user", user)

export default router