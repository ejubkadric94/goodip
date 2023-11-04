export default async (req, context) => {
  return new Response("Hello, world!" + req.body.fullName);
};
// import nodemailer from 'nodemailer';
// import moment from 'moment-timezone';

// export default async (event, context) => {
//   const { fullName, email, company, question } = JSON.parse(event.body);

//   const germanyTime = moment().tz('Europe/Berlin').format('YYYY-MM-DD HH:mm:ss');


//   // const gmailUser = process.env.GOOGLE_MAIL_USER;
//   // const gmailSecretKey = process.env.GOOGLE_MAIL_SECRET_KEY;
//   const gmailUser = Netlify.env.get("GOOGLE_MAIL_USER");
//   const gmailSecretKey = Netlify.env.get("GOOGLE_MAIL_SECRET_KEY");

//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: gmailUser,
//         pass: gmailSecretKey
//       }
//     });
    
//     const emailHtml = `
//       <h1>New Inquiry</h1>
//       <p><strong>Time:</strong> ${germanyTime}</p>
//       <p><strong>Client Name:</strong> ${fullName}</p>
//       <p><strong>Client Email Address:</strong> ${email}</p>
//       <p><strong>Client Company:</strong> ${company}</p>
//       <p><strong>Client's Question:</strong> ${question}</p>
//     `;

//     const info = await transporter.sendMail({
//       from: `"${clientName}" <${clientEmail}>`,
//       to: gmailUser,
//       subject: `Goodip Inquiry from - ${clientName}`,
//       html: emailHtml,
//       // text: 'eeee'
//     });
//   } catch (error) {
//     // console.log(JSON.stringify(error));
//     // return {
//     //   statusCode: 400,
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify({
//     //     error,
//     //   }),
//     // };
//     return new Response('Error', { status: 400, statusText: JSON.stringify(error) });
//   }

//   return new Response("Success");
//   // return {
//   //   statusCode: 200,
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify({
//   //     msg: "Message sent successfully",
//   //   }),
//   // };
// };
