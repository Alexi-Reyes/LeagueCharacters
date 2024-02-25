import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken"

const prisma = new PrismaClient();

const signUp = async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    prisma.user
        .create({
            data: {
                username: username,
                password: hashedPassword,
            },
        })
        .then((user) => {
            const token = jwt.sign({ id: user.id, username: user.username}, process.env.JWT_SECRET, {
                expiresIn: "2h"
            })

            res.json(token)
        })
        .catch((error) => {
            res.json(error);
        });
};

const logIn = async (req, res) => {
    const { username, password } = req.body

    const user = await prisma.user.findUnique({
        where: {
            username
        }
    })

    if(!user) {
        return res.json({ error: "User not found" })
    }

    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword) {
        return res.json({ error: "Password not valid" })
    }

    const token = jwt.sign({ id: user.id, username: user.username}, process.env.JWT_SECRET, {
        expiresIn: "2h"
    })

    res.json(token)
}

export { signUp, logIn };
