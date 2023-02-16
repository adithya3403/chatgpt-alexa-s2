const express = require("express");
const { getData, getDataByTopic, saveData, updateData, deleteData } = require("./dataController.js");

const router = express.Router();

router.get('/data', getData);
router.get('/data/:topic', getDataByTopic);
router.post('/data', saveData);
router.put('/data/:id', updateData);
router.delete('/data/:id', deleteData);

module.exports = router;