import { PrismaClient } from "@prisma/client"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()

const getProfile = (req, res) => {
    const token = req.headers["x-access-token"]

    if(!token) {
        return res.json({ error: "No token provided" })
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if(error) {
            return res.json({ error: "Unauthorized" })
        }

        prisma.user.findUnique({
            where: {
                username: decoded.username
            }
        })
        .then((user) => {
            res.json(user)
        })
        .then((error) => {
            res.json(error)
        })
    })
}

export { getProfile }