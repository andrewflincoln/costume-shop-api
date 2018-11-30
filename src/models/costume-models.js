const uuid = require('uuid/v4')
const costumes = require('../costumes')

function getAllCost() {
    return costumes
}
function getOneCost(id) {
    return costumes.find(idCostume => idCostume.id === id)
}
function createCost(name, price) {
    const newCost = {}
    newCost.id = uuid()
    newCost.name = name
    newCost.price = price
    newCost.tags = []
    costumes.push(newCost)
    return newCost
}
function updateCost(id, name, price) {
   const idCost = costumes.find(idCost => idCost.id === id)
   if (!idCost) return { error : ['could not find custome']}
   if (name) idCost.name = name
   if (price) idCost.price = price
   return idCost
}
function deleteCost(id) {
    const idCost = costumes.find(idCost => idCost.id === id)
    if (!idCost) return
    costumes.splice(costumes.indexOf(idCost), 1)
    return idCost
}

//tags functions
function getAllTags(id) {
    const idCost = costumes.find(idCost => idCost.id === id)
    if (!idCost) return
    return idCost.tags
}
function getOneTag(id, tagId) {
    const idCost = costumes.find(idCost => idCost.id === id)
    if (!idCost) {
        return { error: { message: `We don't even have that costume!`}}
    }
    const idTag = idCost.tags.find(idTag => idTag.id === tagId)
    if (!idTag) {
        return { error: { message: `We don't have that tag!`}}
    }

    return idTag
}
function createTag(id, tagName) {
    const idCost = costumes.find(idCost => idCost.id === id)
    if (!idCost) return {error: {status: 404, message: `Can't create tag; No costume by that ID.`}}
    const newTag = {}
    newTag.id = uuid()
    newTag.name = tagName
    idCost.tags.push(newTag)
    return newTag
}
function deleteTag(id, tagId) {
    const idCost = costumes.find(idCost => idCost.id === id)
    if (!idCost) return {error: {status: 404, message: `Can't delete tag; No costume by that ID.`}}
    const idTag = idCost.tags.find(idTag => idTag.id === tagId)
    idCost.tags.splice(idCost.tags.indexOf(idTag), 1)
    return idTag
}
function updateTag(id, tagId, name) {
    const idCost = costumes.find(idCost => idCost.id === id)
    if (!idCost) return {error: {status: 404, message: `Can't update tag; No costume by that ID.`}}
    const idTag = idCost.tags.find(idTag => idTag.id === tagId)
    if (!idTag) return
    idTag.name = name
    return idTag
}


module.exports =  {getAllCost, getOneCost, createCost, updateCost, deleteCost, 
                   getAllTags, getOneTag, createTag, deleteTag, updateTag }