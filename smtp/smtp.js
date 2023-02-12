const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Parse incoming request bodies in a middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({origin: true, credentials: true}));

app.post('/send-email', (req, res) => {
  const email = req.body;

  // Use Gmail to send the email
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      
    }
  });

  let mailOptions = {
    from: '"Martynas" martynas061@gmail.com',
    to: email.to,
    subject: email.subject,
    html: email.html
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.status(200).send('Email sent successfully');
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
