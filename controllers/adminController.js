const Request = require("../models/Request");

exports.getRequests = async (req, res) => {
  res.json(await Request.find().sort({ createdAt: -1 }));
};

exports.updateStatus = async (req, res) => {
  await Request.findByIdAndUpdate(req.params.id, {
    status: req.body.status
  });
  res.json({ success: true });
};

exports.deleteRequest = async (req, res) => {
  await Request.findByIdAndDelete(req.params.id);
  res.json({ deleted: true });
};
