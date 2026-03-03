Welcome to Flights Service 

Project Setup
-   clone the project on your local.
-   Execute "npm install" on the same path as of your root directory of the downloaded project
-   create a dot env file in the root directory and add the following environment variable (PORT=3000)
-   Inside the src/config folder create a new file config.json and add the following piece of json.

...

{
  "development": {
    "username": <YOUR DB LOGIN NAME>,
    "password": <YOUR DB PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

...


