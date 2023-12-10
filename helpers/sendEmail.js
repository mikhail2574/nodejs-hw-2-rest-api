const nodemailer = require("nodemailer");

require("dotenv").config();

const { META_PASSWORD } = process.env;
const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: { user: "mikhail2574@meta.ua", pass: META_PASSWORD },
};
const transport = nodemailer.createTransport(nodemailerConfig);

const mail = {
  to: "mikhail2574@gmail.com",
  from: "mikhail2574@meta.ua",
  subject: "title",
  html: "<h1>Hello world</h1>",
};

const sendMail = async () => {
  await transport
    .sendMail(mail)
    .then(() => console.log("email sended success"))
    .catch((error) => console.log(error.message));
};

module.exports = sendMail;
