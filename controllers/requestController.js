const Request = require("../models/Request");
const transporter = require("../config/mailer");

const createRequest = async (req, res) => {
  try {
    const request = await Request.create({
      ...req.body,
      userId: req.user.id,
      status: "new",
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: "New Service Request Received",
        text: `
Name: ${request.name}
Phone: ${request.phone}
Service: ${request.serviceType}
Description: ${request.description}
Status: new
        `,
      });

      if (req.user.email) {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: req.user.email,
          subject: "Your service request is received",
          text: `
Hi ${request.name},
We have received your request.
Status: new
          `,
        });
      }
    } catch (e) {
      console.error("Email failed:", e.message);
    }

    res.json(request);
  } catch {
    res.status(500).json({ message: "Failed to submit request" });
  }
};

const getMyRequests = async (req, res) => {
  const requests = await Request.find({ userId: req.user.id })
    .sort({ createdAt: -1 });
  res.json(requests);
};

module.exports = {
  createRequest,
  getMyRequests,
};
