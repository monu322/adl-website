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
      const values = req.body;

      await transporter.sendMail({
        from: process.env.EMAIL_USERNAME,
        to: process.env.EMAIL_USERNAME, 
        subject: `Contact Form Submission from ${values.name}`,
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
          <style>
            /* Reset CSS */
            body, html {
              margin: 0;
              padding: 0;
              font-family: 'Roboto', sans-serif;
              line-height: 1.6;
            }
            
            /* Container */
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #f9f9f9;
              border-radius: 8px;
              padding: 30px;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            }

            /* Heading */
            h2 {
              color: #333;
              font-size: 24px;
              margin-bottom: 20px;
            }

            /* Paragraph */
            p {
              margin-bottom: 10px;
              color: #666;
            }

            /* Strong */
            strong {
              font-weight: bold;
              color: #333;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Contact Form Submission</h2>
        
            <p><strong>Name:</strong> ${values.name}</p>
            <p><strong>Email:</strong> ${values.email}</p>
            <p><strong>Phone:</strong> ${values.phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${values.subject || 'No subject'}</p>
            <p><strong>Message:</strong> ${values.message}</p>
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
