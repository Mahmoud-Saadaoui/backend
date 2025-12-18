# Backend Project

A robust Node.js backend application built with Express and MongoDB, featuring a modular architecture for scalability and maintainability.

## 🚀 Features

- **User Authentication**: Secure user registration and login using JWT and Bcrypt.
- **Product Management**: CRUD operations for products with image upload support.
- **Modular Architecture**: Code organized by modules (Users, Products) for better separation of concerns.
- **Input Validation**: Request validation using `express-validator`.
- **Environment Configuration**: Easy configuration using `.env` file.

## 🛠️ Technologies

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- **Authentication**: [JSON Web Token (JWT)](https://jwt.io/)
- **File Handling**: [Multer](https://github.com/expressjs/multer)

## 📦 Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd backend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add the following variables:
    ```env
    PORT=5000
    DB_URI=mongodb://localhost:27017/your_database_name
    SECRET_KEY=your_jwt_secret_key
    ```
    *Note: Adjust `DB_URI` and `SECRET_KEY` according to your environment.*

4.  **Start the Server**
    For development (with Nodemon):
    ```bash
    npm start
    ```
    *The server will start on http://localhost:5000*

## 🔗 API Endpoints

### Products
- `GET /api/product/` - Get all products
- `POST /api/product/` - Create a new product (requires authentication/image)
- `PUT /api/product/:id` - Update a product
- `DELETE /api/product/:id` - Delete a product

### Users
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Login user and get token

## 📂 Project Structure

```
backend/
├── config/             # Database connection configuration
├── modules/            # Feature modules
│   ├── products/       # Product related logic (Controller, Model, Routes)
│   └── users/          # User related logic (Controller, Model, Routes)
├── uploads/            # Directory for uploaded files
├── index.js            # Entry point of the application
├── .env                # Environment variables
└── package.json        # Project dependencies and scripts
```

## 📄 License

This project is licensed under the ISC License.
