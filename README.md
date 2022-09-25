# file upload using express-fileupload and cloudinary in node.js 

## Project Setup
In order to run the project, setup .env and set MONGO_URI variable equal to DB connection string.

In order to run cloudinary , set CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET in .env.

In order to avoid port collisions, in the source code port value is 3000

## REST API

| **HTTP Method**  | **Route**  | **Result**  |
| :------------: | :------------: | :------------: |
|  GET |  api/v1/products |  Get all products |
|  POST |  api/v1/products |  Create product |
| POST |  api/v1/products/uploads |  upload image |



