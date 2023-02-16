const Jimp = require("jimp");
const avatarRe = async (tempUpload,originalname) => {

      await Jimp.read(tempUpload)
      .then((photo) => {
        return photo
          .resize(256, 256) // resize
          .quality(60) // set JPEG quality
          .greyscale() // set greyscale
          .write(`${originalname}`); // save
      })
      .catch((err) => {
        console.error(err);
      });
 
 };

 module.exports = {avatarRe}