const { StatusCodes } = require('http-status-codes')
const path = require('path')
const customError = require('../errors')
const uploadProductImage = async (req, res) => {
  // check if file exists
  if (!req.files) throw new customError.BadRequestError('No file uploaded')
  const productImage = req.files.image

  //check format
  if (!productImage.mimetype.startsWith('image'))
    throw new customError.BadRequestError('Please upload an image')
  // check size
  const maxSize = 1024 * 1024 * 5
  if (productImage.size > maxSize)
    throw new customError.BadRequestError(
      `Please upload image samller than ${maxSize} bytes`
    )

  const imagePath = path.join(
    __dirname,
    '../public/uploads',
    `${productImage.name}`
  )
  await productImage.mv(imagePath)
  res.status(StatusCodes.OK).json({
    image: {
      src: `uploads/${productImage.name}`,
    },
  })
}
module.exports = {
  uploadProductImage,
}
