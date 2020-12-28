# LAB - Class 02

## Project: Basic Express Server

### Author: Dina Ayoub

### Links and Resources

- [ci/cd](https://github.com/Dina-401-Advanced-Javascript/basic-express-server/actions) (GitHub Actions)
- [back-end server url on heroku](https://dina-basic-express-server.herokuapp.com/)

### Setup

#### `.env` requirements (where applicable)

- `PORT` - Port Number, 3000 for us

#### How to initialize/run your application (where applicable)

- `npm start`

#### How to use your lib

- go to the heroku dployment and add /person?name=dina at the end to see the API working.
- go to just /person to get an internal server error triggered by our validator
- go to / to see a not found error triggered by our error handling for unknown routes.

#### Tests

- `npm test`
- Tests will check:
  - 404 on a bad route (anything other than /person)
  - 404 on a bad method (anything other than get /person)
  - 500 if no name in the query string for get /person route
  - 200 if the name is in the query string for get /person route
  - given a name in the query string, the output object is correct

#### UML

![UML Diagram](assets/uml.png)