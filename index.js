const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const transporter = nodemailer.createTransport({
  service: "163", // 服务商
  port: 465, // SMTP端口
  auth: {
    user: "betterleoopen@163.com",
    pass: "NJRCLCAJKZGOCWOP",
  },
});

app.get('/email', (req, res) => {
  let toEmail = req.query.email;  // 接收人邮箱
  const createTemplate = require("./template/deviceNotice");
  let mailOptions = {
    from: `BetterLeo <betterleoopen@163.com>`,
    to: toEmail,
    subject: "Betterleo",
    html: createTemplate(toEmail),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(200).send({
        status: 10001,
        data: null,
        message:error
      })
    } else {
      res.status(200).send({
        status: 10000,
        data: null,
        message: "邮件发送成功",
      });
    }
  })

})


app.listen(5001, () => {
  console.log('Success: The email server runs on port 5000!');
  console.log('host:http://localhost:5000');
})