const {nanoid} = require('nanoid');

async function passwordMailHandler(changePassword, transporter) {
    console.log(changePassword)
    let info = await transporter.sendMail({
        from: '"ContactsNodeJS" <yurik.vinar37@gmail.com>', // sender address
        to: "yurik.vinar37@gmail.com", // list of receivers
        subject: "Change password verification", // Subject line
        text: "Hello world?", // plain text body
        html: `<b>${nanoid()}</b>`, // html body
      });

      console.log("Message sent: %s", info.messageId);
    
}

module.exports = {
    passwordMailHandler,
}
