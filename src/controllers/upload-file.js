const multer = require('multer')

const multerConfig = require('../multer/config')

const upload = multer(multerConfig).single('file')

module.exports = function (req, res) {
   return upload(req, res, function (error) {

      if (error) {
         return res.status(400).json(
           {
             sucess: false,
             code: error.code,
             message: 'An error occurred while loading the file'
           }
         )
      }

      const { mimetype, size, location: url } = req.file

      return res.status(200).json(
         {
            success: true,
            mimeType: mimetype,
            size,
            url
         }
      )

   });
}
