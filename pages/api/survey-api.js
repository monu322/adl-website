// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const { name, company, answers } = req.body;

//       await transporter.sendMail({
//         from: process.env.EMAIL_USERNAME,
//         to: process.env.EMAIL_USERNAME,
//         subject: 'New Survey Response from ADL Robot',
//         html: `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Survey Response</title>
//           <style>
//             body, html {
//               margin: 0;
//               padding: 0;
//               font-family: 'Roboto', sans-serif;
//               line-height: 1.6;
//             }
//             .container {
//               max-width: 600px;
//               margin: 0 auto;
//               background-color: #f9f9f9;
//               border-radius: 8px;
//               padding: 30px;
//               box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//             }
//             h2 {
//               color: #333;
//               font-size: 24px;
//               margin-bottom: 20px;
//             }
//             p {
//               margin-bottom: 10px;
//               color: #666;
//             }
//             strong {
//               font-weight: bold;
//               color: #333;
//             }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <h2>Survey Response</h2>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Company:</strong> ${company}</p>
//             <p><strong>Answers:</strong></p>
//             <pre>${JSON.stringify(answers, null, 2)}</pre>
//           </div>
//         </body>
//         </html>
//         `,
//       });

//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Something went wrong' });
//     }
//   } else {
//     res.status(405).end();
//   }
// }

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, company, answers } = req.body;

      await transporter.sendMail({
        from: process.env.EMAIL_USERNAME,
        to: process.env.EMAIL_USERNAME,
        subject: "New Survey Response from ADL Robot",
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Survey Response</title>
          <style>
            * {
              box-sizing: border-box; /* Ensure padding and borders are included in width/height */
            }
            body, html {
              margin: 0;
              padding: 0;
              font-family: 'Roboto', sans-serif;
              background-color: #16182F;
              color: #ffffff;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #252947;
              padding: 0 0; 
              border-radius: 8px;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            }
            .header, .footer {
              background-color: #1D1F36;
              text-align: center;
              padding: 20px;
              width: 100%;
              border-radius: 8px 8px 0 0; /* Rounded top for header */
            }
            .footer {
              border-radius: 0 0 8px 8px; /* Rounded bottom for footer */
            }
            .header h1, .footer p {
              color: #FFFFFF;
              margin: 0;
            }
            h2 {
              color: #9D9CFB;
              font-size: 24px;
              margin-bottom: 20px;
            }
            p {
              margin-bottom: 10px;
              color: #A3A4D6;
            }
            strong {
              color: #9D9CFB;
            }
            .question {
              color: #9D9CFB;
              margin-top: 15px;
            }
            .content {
              padding: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>ADL Robotics - Survey Response</h1>
            </div>
            <div class="content">
               <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            ${answers
              .map(
                (item, index) => `
              <div>
                <p class="question"><strong>Q${index + 1}: ${
                  item.question
                }</strong></p>
                <p><strong>Answer:</strong> ${item.answer}</p>
              </div>
            `
              )
              .join("")}
            </div>
            <div class="footer">
              <p>© 2024 ADL Robotics</p>
            </div>
          </div>
        </body>
        </html>
        `,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.status(405).end();
  }
}
