const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

require('./src/config/connect')

const app = express()
app.use(express.json())

app.use('/api/product', require('./src/modules/products/routes/productRoute'))
app.use('/api/user', require('./src/modules/users/routes/userRoute'))

app.use('/get_image', express.static('./uploads'))

const PORT = 5000;
app.listen(PORT, () => console.log(`Server Is Running On Port ${PORT}`))