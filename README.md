# Items API

![Imgur](https://i.imgur.com/abv3CuY.png)

Develop an efficient RESTful API for managing a collection of items, such as a product catalog or a task list.

## Built With

![JavaScript](https://img.shields.io/badge/JavaScript-646CFF?style=for-the-badge&logo=javascript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-646CFF?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-646CFF?style=for-the-badge&logo=express&logoColor=white)

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)

## Installation

- Clone the **[repository](https://github.com/noeyislearning/items-api)** and run the following command in the root directory:

  ```bash
  npm install
  ```
  
- Create a `.env` file in the root directory and add the following environment variables:

  ```bash
  PORT=8080
  MONGO_URI=<your_mongodb_uri>
  ```

- Then run the following command to start the application locally:

  ```bash
  npm run server:dev
  ```

- Once the application is running locally, you can access it at `http://localhost:8080/api/v1/` via [Postman](https://www.postman.com/) or any other API testing tool.

## Usage

- The API has the following endpoints:

  - `GET /items` - Returns a list of all items in the database.
  - `GET /item/:id` - Returns a single item with the specified ID.
  - `POST /item` - Creates a new item in the database.
  - `PUT /item/:id` - Updates an item with the specified ID.
  - `DELETE /item/:id` - Deletes an item with the specified ID.

- The API has the following data model:

  ```json
  {
    "name": "New Product",
    "price": 10.99,
    "quantity": 50
  }
  ```

- The API has the following validation rules:

  - `name` is required and must be a string.
  - `price` is required and must be a number.
  - `quantity` is required and must be a number.

- Added feature:
  
  - Rate limiting

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
