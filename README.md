# README

This fantastic React Single Page Application (SPA) was developed to provide the best user experience to follow-up of the New York Times (NYT) Bestsellers Books list updates.

After cloning the project, please execute the following commands to run this project in your localhost env.

Add a .env file to the root dir containing a parameter 
REACT_APP_NYTBOOKS_API_KEY=API-KEY-PROVIDED-BY-NYT-API-BOOKS

In your package.json: change this line:
"start": "react-scripts start"
to
"start": "react-scripts --openssl-legacy-provider start"

Finally, run the following commands to install needed libs:

npm install dotenv

npm i react-icons --save axios

npm install react-router-dom@5.2

npm install --save-dev eslint-config-react-app eslint@^8.0.0
