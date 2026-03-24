import { Twilio } from 'twilio';

const accountSid = 'your_account_sid'; // Replace with your Twilio account SID
const authToken = 'your_auth_token'; // Replace with your Twilio auth token
const client = new Twilio(accountSid, authToken);

export const sendSMSReminder = async (to: string, message: string) => {
    try {
        const messageResponse = await client.messages.create({
            body: message,
            from: 'your_twilio_phone_number', // Replace with your Twilio phone number
            to: to
        });
        console.log(`Message sent: ${messageResponse.sid}`);
    } catch (error) {
        console.error('Error sending SMS:', error);
    }
};
