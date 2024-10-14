import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, company, answers } = req.body;

      await transporter.sendMail({
        from: process.env.EMAIL_USERNAME,
        to: process.env.EMAIL_USERNAME, 
        from: "abhishek@neurosphere.tech",
        to: "abhishek@neurosphere.tech", 
        subject: 'New Survey Response from ADL Robot',
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Survey Response</title>
          <style>
            body, html {
              margin: 0;
              padding: 0;
              font-family: 'Roboto', sans-serif;
              line-height: 1.6;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #f9f9f9;
              border-radius: 8px;
              padding: 30px;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            }
            h2 {
              color: #333;
              font-size: 24px;
              margin-bottom: 20px;
            }
            p {
              margin-bottom: 10px;
              color: #666;
            }
            strong {
              font-weight: bold;
              color: #333;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Survey Response</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Answers:</strong></p>
            <pre>${JSON.stringify(answers, null, 2)}</pre>
          </div>
        </body>
        </html>
        `,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.status(405).end();
  }
}
