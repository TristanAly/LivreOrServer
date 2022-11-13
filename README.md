# LivreOrServer

The server of the livreOr app.

![Swift](https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Node](https://img.shields.io/badge/nodeJS-%2520f?style=for-the-badge&logo=nodeJS&logoColor=white)

## Run Project

To start the project you must create a database containing a messages table with the following columns.

| Parameter  | Type     | Description                |
| :--------  | :------- | :------------------------- |
| "id"       |  `int`   | Primarykey (PK)            |
|"happy"     |`varchart`|                            |
|"created_at"|`varchart`|                            |

Create the .db.js file in the project with the following code:

```NodeJS
let mysql = require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'yourUserName',
  password : 'yourPassword',
  database : 'yourServerName'
});

connection.connect()

module.exports = connection
```
Import the following packages into the project in the terminal enter this code:

```NodeJS
 npm install express mysql nodemon --save
```

Run the nodeJS server

```NodeJS
 npm start
```

## Tech Stack

**Client:** SwiftUI

**Server:** NodeJS, Express, Mysql
