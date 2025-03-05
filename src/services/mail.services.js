require("dotenv").config();
const nodemail = require("nodemailer");
class MailServices {
  #transport;
  constructor() {
    try {
      let config = {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        // service:"",// this is specially for the use of the gmail server provider only
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PWD,
        },
      };
      if (process.env.SMTP_PROVIDER === "gmail") {
        config["service"] = "gmail";
      }
      this.#transport = nodemail.createTransport(config);
    } catch (exception) {
      console.log("There is error while handeling of this server");
      console.log(exception);
      throw exception;
    }
  }
  async sendEmail(to, subject, body) {
    try {

        return await this.#transport.sendMail({
            subject:"",
            from:"",
            to:"",
            // cc:"",
            // bcc:"",
            // attachments:"",
            html:""
        })
    } catch (exception) {
        console.log(exception);
        
      throw exception;
    }
  }
}

const mailSvc = new MailServices();
module.exports = mailSvc;
