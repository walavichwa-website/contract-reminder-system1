import nodemailer from 'nodemailer';

export const sendPaymentReminder = async (recipientEmail: string, paymentDetails: string) => {
    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // replace with your email
            pass: 'your-email-password' // replace with your email password
        }
    });

    // Setup email data with unicode symbols
    const mailOptions = {
        from: 'your-email@gmail.com', // sender address
        to: recipientEmail, // list of receivers
        subject: 'Payment Reminder', // Subject line
        text: paymentDetails // plain text body
    };

    // Send mail with defined transport object
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending email: ', error);
        throw error;
    }
};
