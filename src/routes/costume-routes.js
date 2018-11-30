const express = require('express')
const router = express.Router()
let ctrl = require('../controllers/costume-ctrl')

//costume routes
router.get('/', ctrl.getAllCost)
router.get('/:id', ctrl.getOneCost)
router.post('/', ctrl.createCost)
router.put('/:id', ctrl.updateCost) 
router.delete('/:id', ctrl.deleteCost)

//tag routes
router.get('/:id/tags', ctrl.getAllTags)
router.get('/:id/tags/:tagId', ctrl.getOneTag)
router.post('/:id/tags', ctrl.createTag)
router.delete('/:id/tags/:tagId', ctrl.deleteTag)
router.put('/:id/tags/:tagId', ctrl.updateTag)

// avoid dead space









module.exports =  router 