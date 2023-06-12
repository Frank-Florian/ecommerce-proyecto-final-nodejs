const ejs = require("ejs");
const path = require("path");
const transporter = require("./mailer");
require("dotenv").config();

const sendMail = (email, doc, attachments) => {
  transporter
    .sendMail({
      from: process.env.G_USER,
      to: email,
      subject: "Bienvenido",
      text: "Este seria el mensaje en texto plano",
      html: doc,
      attachments,
    })
    .then(() => console.log("mensaje enviado"))
    .catch((error) => console.log(error));
};

const sendChackMail = async (email, data) => {
  const filePath = path.join(__dirname, "../views/checkMail/checkMail.ejs");
  const doc = await ejs.renderFile(filePath, data);

  const attachments = [
    {
      filename: "facebook2x.png",
      path: path.join(__dirname, "../views/checkMail/images/facebook2x.png"),
      cid: "facebook",
    },
    {
      filename: "instagram2x.png",
      path: path.join(__dirname, "../views/checkMail/images/instagram2x.png"),
      cid: "instagram",
    },
    {
      filename: "linkedin2x.png",
      path: path.join(__dirname, "../views/checkMail/images/linkedin2x.png"),
      cid: "linkedin",
    },
    {
      filename: "twitter2x.png",
      path: path.join(__dirname, "../views/checkMail/images/twitter2x.png"),
      cid: "twitter",
    },
  ];

  sendMail(email, doc, attachments);
};

const sendPurchaseOrderMail = async (email, data) => {
  const filePath = path.join(__dirname, "../views/purchaseOrder/purchaseOrder.ejs");
  const doc = await ejs.renderFile(filePath, data)
  const attachments = [
    {
      filename: "e-commerce.png",
      path: path.join(__dirname, "../views/purchaseOrder/images/e-commerce.png"),
      cid: "ecommerce",
    },
    {
      filename: "facebook2x.png",
      path: path.join(__dirname, "../views/purchaseOrder/images/facebook2x.png"),
      cid: "facebook"
    },
    {
      filename: "instagram2x.png",
      path: path.join(__dirname, "../views/purchaseOrder/images/instagram2x.png"),
      cid: "instagram"
    },
    {
      filename: "linkedin2x.png",
      path: path.join(__dirname, "../views/purchaseOrder/images/linkedin2x.png"),
      cid: "linkedin"
    },
    {
      filename: "logo-gris_1.png",
      path: path.join(__dirname, "../views/purchaseOrder/images/logo-gris_1.png"),
      cid: "logo_gris"
    },
    {
      filename: "logo.png",
      path: path.join(__dirname, "../views/purchaseOrder/images/logo.png"),
      cid: "logo"
    },
    {
      filename: "separator.png",
      path: path.join(__dirname, "../views/purchaseOrder/images/separator.png"),
      cid: "separator"
    },
    {
      filename: "twitter2x.png",
      path: path.join(__dirname, "../views/purchaseOrder/images/twitter2x.png"),
      cid: "twitter"
    },
  ]
  sendMail(email, doc, attachments)
};

module.exports = {
  sendChackMail,
  sendPurchaseOrderMail
};
