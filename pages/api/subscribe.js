// // pages/api/newsletter.js
// import Mailchimp from '@mailchimp/mailchimp_marketing'

// // Configure Mailchimp client
// Mailchimp.setConfig({
//     apiKey: process.env.MAIL_CHIMP_KEY,
//     server: process.env.MAIL_CHIMP_SERVER_PREFIX,
// });

// export default async function handler(req, res) {
//     console.log("Calledd");
//     if (req.method === 'POST') {
//         const { email } = req.body;
//         console.log(email);

//         if (!email) {
//             console.log('No email');
//             return res.status(400).json({ error: 'Email is required' });
//         }

//         try {
//             const response = await Mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
//                 email_address: email,
//                 status: 'subscribed',
//             });

//             console.log('Success');

//             return res.status(201).json({ message: 'Success! Check your email for confirmation.' });
//         } catch (error) {
//             console.log(error);
//             return res.status(500).json({ error: error.message || 'Something went wrong' });
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//     }
// }

const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAIL_CHIMP_KEY,
  server: process.env.MAIL_CHIMP_SERVER_PREFIX,
});

export default async function handler(req, res) {
  console.log("Calledd");
  if (req.method === "POST") {
    const { email } = req.body;
    try {
      const response = await mailchimp.lists.addListMember(
        process.env.MAILCHIMP_AUDIENCE_ID,
        {
          email_address: email,
          status: "subscribed",
          //   merge_fields: {
          //     FNAME: subscribingUser.firstName,
          //     LNAME: subscribingUser.lastName,
          //   },
        }
      );

      console.log(response);

      console.log(
        `Successfully added contact as an audience member. The contact's id is ${response.id}.`
      );
      return res
        .status(201)
        .json({ message: "Success! Check your email for confirmation." });
    } catch (error) {
      console.log('Mailchimp subscribe error: ', error);
      return res.status(500).json({ error: error.message || 'Something went wrong' });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
