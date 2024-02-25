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
    let id = Number(req.params.id)

    prisma.champion.findUnique({
        where: {
            id: id
        }
    })
    .then((champion) => {
        res.json(champion)
    })
    .then((error) => {
        res.json(error)
    })
}

const updateChampion = (req, res) => {
    let id = Number(req.params.id)
    let champion = req.body

    prisma.champion.update({
        where: {
            id: id
        },
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

const deleteChampion = (req, res) => {
    //
}

export { createChampion, getChampions, getChampion, updateChampion, deleteChampion }