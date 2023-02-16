const Data = require("./dataModel.js");

const getData = async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getDataById = async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const saveData = async (req, res) => {
    const data = new Data(req.body);
    try {
        const inserteddata = await data.save();
        res.status(201).json(inserteddata);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateData = async (req, res) => {
    try {
        const updateddata = await Data.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateddata);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteData = async (req, res) => {
    try {
        const deleteddata = await Data.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteddata);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getData, getDataById, saveData, updateData, deleteData };
