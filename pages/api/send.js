const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
    sgMail.setApiKey(process.env.SENDGRID_API);

    const { email, message } = req.body;

    const content = {
        to: process.env.SENDGRID_MAIL,
        from: process.env.SENDGRID_MAIL,
        subject: `Contact form from: ${email}`,
        text: message,
        html: `<p>${message}</p>`,
    };

    try {
        await sgMail.send(content);
        res.status(200).send('Message sent!');
    } catch (error) {
        console.log('ERROR', error);
        res.status(400).send('Try it later or contact me via LinkedIn.');
    }
}
