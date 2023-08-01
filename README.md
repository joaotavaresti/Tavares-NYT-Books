# README

This fantastic React Single Page Application (SPA) was developed to provide the best user experience to follow-up of the New York Times (NYT) Bestsellers Books list updates.

After cloning the project, please execute the following commands to run this project in localhost env.

npm install react-router-dom@5.2

npm i react-icons --save axios

npm install --save-dev eslint-config-react-app eslint@^8.0.0

npm install dotenv

set NODE_OPTIONS=--openssl-legacy-provider

In your package.json: change this line:
"start": "react-scripts start"
to
"start": "react-scripts --openssl-legacy-provider start"