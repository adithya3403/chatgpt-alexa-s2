# chatgpt-alexa-s2

Project: Virtual Assistant Alexa project using ChatGPT


STEPS:

- must have npm and npx installed 

1. go to backend folder and create a .env file with the following content:
    ```env
    OPENAI_API_KEY="..."
    MONGO_URI="..."
    ```

2. open a terminal and run the following commands:
    ```bash
    cd backend
    npm install
    node index.js
    ```

3. go to frontend folder and do the following:
    ```bash
    cd frontend
    npm install
    ```

4. open a new terminal and run the following commands:
    ```bash
    cd frontend
    npm start
    ```

5. open another terminal to connect to the database and run the following commands:
    ```bash
    cd frontend/server
    node server.js
    ```

6. open another terminal and run the following commands:
    ```bash
    cd frontend/db
    node index.js
    ```

7. open your database and check!