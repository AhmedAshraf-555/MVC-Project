const { LEGAL_TLS_SOCKET_OPTIONS } = require("mongodb");
const formModel = require("../model/formModel")
const getForms = async (req, res) => {
    const data = await formModel.find()
    res.status(200).json(data);
}
const createForm = async (req, res) => {
    const data = new formModel ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        rollNo: req.body.rollNo,
        section: req.body.section,
        depart: req.body.depart,
        contact: req.body.contact
    });
 try {
     const dataTosave = await data.save();
     res.status(200).json({dataTosave});
 } catch (error) {
     res.status(500).send(error);
 }
}
module.exports = {getForms,createForm}