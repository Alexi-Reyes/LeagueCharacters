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
        return
    })
    .then((error) => {
        res.json(error)
        return
    })
}

const getChampions = (req, res) => {
    prisma.champion.findMany()
    .then((champion) => {
        res.json(champion)
        return
    })
    .then((error) => {
        res.json(error)
        return
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
        return
    })
    .then((error) => {
        res.json(error)
        return
    })
}

const updateChampion = (req, res) => {
    //
}

const deleteChampion = (req, res) => {
    //
}

export { createChampion, getChampions, getChampion, updateChampion, deleteChampion }