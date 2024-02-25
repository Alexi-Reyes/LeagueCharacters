import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const createChampion = (req, res) => {
    let champion = req.body

    prisma.champion.create({
        data: {
            name: champion.name,
            type: champion.type
        }
    })
    .then((champion) => {
        res.json(champion)
    })
    .then((error) => {
        res.json(error)
    })
}

const getChampions = (req, res) => {
    prisma.champion.findMany()
    .then((champion) => {
        res.json(champion)
    })
    .then((error) => {
        res.json(error)
    })
}

const getChampion = (req, res) => {
    //
}

const updateChampion = (req, res) => {
    //
}

const deleteChampion = (req, res) => {
    //
}

export { createChampion, getChampions, getChampion, updateChampion, deleteChampion }