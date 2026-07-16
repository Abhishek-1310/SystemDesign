// Adapter Pattern converts the interface of one class into another interface that the client expects, allowing incompatible 
// classes to work together.
class SendGrid {

    send(data) {
        console.log(
            `Email sent to ${data.recipient}: ${data.body}`
        );
    }

}

class Adapter {
    constructor(sendGrid) {
        this.sendGrid = sendGrid;
    }
    sendEmail(to, message) {
        this.sendGrid.send({
            recipient: to,
            body: message
        })
    }
}

// now u can change service multiple time client only know SendEmail

const sendgrid = new SendGrid();
const email1 = new Adapter(sendgrid);
email1.sendEmail('Abhsihek@gamil.com', 'hi what is the progress');

// when you change the service just change adaptor that is all no need to change in 100 pkaces