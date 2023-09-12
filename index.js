const express = require('express')

require('./config/connect')

const app = express()
app.use(express.json())

app.use('/api/product', require('./routes/productRoute'))
app.use('/api/user', require('./routes/userRoute'))

app.use('/get_image', express.static('./uploads'))

const PORT = 5000;
app.listen(PORT, ()=> console.log(`Server Is Running On Port ${PORT}`))