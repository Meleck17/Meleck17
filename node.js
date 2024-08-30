const nodemailer = require('nodemailer');

async function sendVerificationEmail(email, firstName, verificationCode) {
    let transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
            user: 'votreemail@gmail.com',
            pass: 'votremotdepasse'
        }
    });

    let info = await transporter.sendMail({
        from: '"Star Graphisme" <votreemail@gmail.com>',
        to: email,
        subject: "Star Graphisme Vérification",
        text: `Bonjour ${firstName}, vous venez de créer un compte. Voici le code à renseigner : ${verificationCode}`
    });

    console.log("Message sent: %s", info.messageId);
    const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/send-invoice', (req, res) => {
    const { email, message, invoiceDetails, totalPrice } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail', // utilisez votre service de messagerie ici
        auth: {
            user: 'votre-email@gmail.com', // votre adresse email
            pass: 'votre-mot-de-passe' // votre mot de passe email
        }
    });

    const mailOptions = {
        from: 'votre-email@gmail.com',
        to: email,
        subject: 'Votre facture - Star Graphisme',
        text: `${message}\n\nDétails de la facture :\n${invoiceDetails}\n\nTotal: ${totalPrice}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({ success: false, error: error.toString() });
        }
        res.send({ success: true });
    });
});

app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});

}
