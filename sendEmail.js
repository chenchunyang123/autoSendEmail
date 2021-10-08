const nodemailer = require('nodemailer');
const { user, pass } = require('./config');

const sendMail = async (data) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: '465',
    secureConnection: true,
    auth: {
      user,
      pass,
    }
  });

  data.from = `"${data.from}" ${user}`;

  await transporter.sendMail(data);
};

module.exports = sendMail;