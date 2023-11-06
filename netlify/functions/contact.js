const nodemailer = require('nodemailer');
const moment = require('moment-timezone');

exports.handler = async (req, res) => {
  if (req.httpMethod !== "POST") {
    return { statusCode: 400, body: "Accepting only POST request" };
  }

  const { fullName, email, company, question} = JSON.parse(req.body)

  const germanyTime = moment().tz('Europe/Berlin').format('YYYY-MM-DD HH:mm:ss');

  const gmailUser = process.env.GOOGLE_MAIL_USER;
  const gmailSecretKey = process.env.GOOGLE_MAIL_SECRET_KEY;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailSecretKey
    }
  });
  
  const emailHtml = `
    <h1>New Inquiry</h1>
    <p><strong>Time:</strong> ${germanyTime}</p>
    <p><strong>Client Name:</strong> ${fullName}</p>
    <p><strong>Client Email Address:</strong> ${email}</p>
    <p><strong>Client Company:</strong> ${company}</p>
    <p><strong>Client's Question:</strong> ${question}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"${fullName}" <${email}>`,
      to: gmailUser,
      subject: `Goodip Inquiry from - ${fullName}`,
      html: emailHtml,
    }, function(error, info){
      if(error){
          console.log("there was an error :-(, and it was this: " + error.message);
      }else{
          console.log("Message sent: " + info.response);
      }
    });
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    };
  }

  return {
    statusCode: 200,
    body: "Email sent",
  };
};
