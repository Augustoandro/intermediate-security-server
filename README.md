# intermediate-security-server
My final year project in B.E. (Computer). The motive of the project is to secure cloud storage buckets from malware infection.

To run the web platform, navigate to web_platform directory and type
npm install

This will install all the required dependencies.

Start the web application.
npm start

You can see the web application on http://localhost:3000

We need to host the api for creating graph that shows the number and share of number of files that have been uploaded to our server and found to be malicious or safe.

Open another terminal window.
Navigate to cloud_api folder.

Install the dependencies.
npm install

Start the API server.
npm start devstart

You can see whether it is running at http://localhost:3001

Open a third terminal window.
Navigate to scripts folder.

Run
sh loop.sh

Host the files in online_file_uploader on apache or nginx server.
