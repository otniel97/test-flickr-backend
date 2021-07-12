## Flickr TEST

Test Buscador de Fotos en Flickr

### Required software to install
- Node.js > 12.9


### How to start
```
$ config .env file
$ npm install
$ npm run dev


## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
PORT = 8080
CLIENT_CORS_URL = 
SEED = secret-backend
```

## Project Structure

```
src\
 |--controllers\    # Route controllers
 |--middlewares\    # Middlewares
 |--routes\         # Routes
 |--app.js          # Express app
 |--app.js          # Run server
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:8080` in your browser.
https://documenter.getpostman.com/view/5329691/Tzm8FFg7