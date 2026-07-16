class EmailNotificationService {
    sendEmail(to, message) {
        console.log(`this email sent to ${to} message:: ${message}`);
    }
}

//client 
const email1 = new EmailNotificationService();
email1.sendEmail('abhsihek@gmail.com', 'hi how are you');

// now some new notification service come sendGrid
class SendGrid {

    send(data) {
        console.log(
            `Email sent to ${data.recipient}: ${data.body}`
        );
    }

}
// client will know we we do sendEmail email will be sent but 
const email2 = new SendGrid();
email2.sendEmail('abhsihek@gmail.com', 'hi how are you') // this will fail becused service is changed thi not adapted with current one

// What's wrong?  Your application expects:
// sendEmail(to, message)
// But SendGrid provides:
// send(data)

// without adapter everywhere you have to change if 100 places use 100 place u have to change

// so create a adaptor and make service thrid party service