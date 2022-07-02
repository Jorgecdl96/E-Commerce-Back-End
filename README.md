# README E-Commerce Back End

  ### [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

This application it´s working with Express.js API to use Sequelize to interact with a MySQL database, storing all the products in stock within a company, with the options of get, update, post and delete the info stored by category, products and tags.

This app has been built with the follwoing technologies:
* ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
* ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

The Package json is already added in this project, so you should only have to install it in your terminal typing the following 'npm i'.

## Usage

1. Go to ./Develop/db/schema.sql and open a new Terminal.

2. Next, we open the MySQL Shell that connects the terminal to the MySQL instance. In the terminal, at the root directory of the project, enter the following command:

    ```sh
    mysql -u root -p
    ```

3. This command tells the MySQL Shell that we want to log in with the root user (-u). The -p stands for "password.". Once we enter this command, we are prompted to enter the password we created when we installed `MySQL`.

4. We can also execute a file that contains a list of commands using `source`

    ```sh
    source schema.sql
    ```
5. Go to ./seeds/index.js  and open a new Terminal and then run 'npm run seed' to seed data to your database so that you can test your routes.

6. Finally, we go to server.js and open a new Terminal and then run the server with 'node server.js' to interact with the routes and database created.

## License

### MIT License (https://opensource.org/licenses/MIT)

      MIT License Copyright (c) [year] [fullname]
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.

## Contribution

Jorge Cardenas

## Tests

No tests.

## Questions

My GitHub: https://github.com/Jorgecdl96

You can send an e-mail to Jorgecdl96@gmail.com for any additional question.

## Walkthrough Video

You can see in the video how all the routes work within the project.

[E-commerce Back End Video]()