# Virtual Assistant Project using ChatGPT


### REQUIREMENTS:
- nodejs installed
- npm and npx installed
- mongodb installed
- chatgpt account and api key

<hr></hr>

### STEPS:
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
    npm run dev
    ```

4. open another terminal and run the following commands:
    ```bash
    cd frontend/db
    node index.js
    ```

Everything now gets saved in the database
