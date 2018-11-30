const model = require('../models/costume-models')

//costume routes
function getAllCost(req, res, next) {
    res.status(200).send(model.getAllCost())
}
function getOneCost(req, res, next) {
    res.status(200).send(model.getOneCost(req.params.id))
}
function createCost(req, res, next) {
    if (!req.body.name) next({status: 400, message: `Costume must have a name`})
    res.status(201).send(model.createCost(req.body.name, req.body.price))
}
function updateCost(req, res, next) {
    const idCost = model.updateCost(req.params.id, req.body.name, req.body.price)

    if (idCost.error) return next({status: 404, message: idCost.error})
    
    res.status(201).send(idCost)
}
function deleteCost(req, res, next) {
    const idCost = model.deleteCost(req.params.id)
    if (!idCost) return next()
    res.status(200).send(idCost)
}

//tag routes
function getAllTags(req, res, next) {
    const tags = model.getAllTags(req.params.id)
    if (!tags) return next()
    res.status(200).send(tags)
}
function getOneTag(req, res, next) {
    const tag = model.getOneTag(req.params.id, req.params.tagId)

    if (tag.error) return next({status: 404, message: tag.error})
    
    res.status(200).send(tag)
}
function createTag(req, res, next) {
   const tag = model.createTag(req.params.id, req.body.name)
   res.status(201).send(tag)
}
function deleteTag(req, res, next) {
  const deleted = model.deleteTag(req.params.id, req.params.tagId)
  if (!deleted) return next({status: 400, message: `Costume has no tags with that ID.`})
  res.status(200).send(deleted)
}
function updateTag(req, res, next) {
    const updated = model.updateTag(req.params.id, req.params.tagId, req.body.name)
    if (!updated) return next({error: {status: 400, message: `Costume has no tags with that ID.`}})
    res.status(201).send(updated)
}



module.exports =  {getAllCost, getOneCost, createCost, updateCost, deleteCost,
                    getAllTags, getOneTag, createTag, deleteTag, updateTag } 