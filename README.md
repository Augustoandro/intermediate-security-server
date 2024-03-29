# intermediate-security-server
My final year project in B.E. (Computer) final year 2020-21. It is a proxy server that filters out malicious files even before they arrive at a cloud storage bucket. The motive of the project is to secure cloud storage buckets from malware infection.<br />
If you are looking forward to host this application, be warned, it might not be 100% secure. 100% Security has always been a myth anyway. 
We are not responsible if your system is compromised.

All components of the application are to be run on the same machine, including the web platform, file uploader and all the scripts.
If you wish that the scripts and services keep running even after you close terminal session, use ```screen```.

HOW IT WORKS:<br />
When a file is uploaded via the file upload application, the file is stored temporarily at the server and a copy of it is sent to Virustotal via its API. We receive 5 different responses from each of the antiviruses, namely, Bitdefender, Avast, AVG, Kaspersky and McAfee. The responses are recorded in the database (True or False). And the number of each type of response is calculated.<br />
If the number of antivirus detecting the file as Malicious (True) is at least two, the file is declared malicious and is deleted, also a response is sent back to the file upload application saying "The file has been found to be unsuitable for upload".<br />
If only one antivirus detects the file as Malicious, it is declared Suspicious. And if all antivirus detect the file as Safe (False) then it is forwarded to the cloud storage bucket and a response is sent back to the file upload application saying "File has been successfully uploaded".

A general description of the folders in the repo:<br />
The files in web_platform folder is the component that users interacts with for managing their storage buckets, Access Key IDs and Secret Keys. In short, that's the website where you signup for our services and login when required to make configuration changes to your bucket or credentials.<br />
online_file_uploader is the file upload application that sends the files for scanning and successive upload to AWS S3 bucket if found Safe or deletion if it is found to be Malicious.<br />
cloud_api folder is the API service that makes communication possible between backend and the ReactJS frontend.<br />
Run intersec.sql in PHPMyAdmin to create the required database and tables for proper functioning of the application. Or copy paste the commands within the file in MySQL command line.

As of now, we only support AWS S3 buckets for this application. You will only receive runtime errors if you add a bucket from any other cloud service provider.

One last thing, before hosting the application make necessary changes in the following files:<br />
a. cloud_api/index.js<br />
b. online_file_uploader/upload.php<br />
c. scripts/assessor1.py<br />
d. web_platform/src/firebase-config.js<br />
Necessary instructions for editing these files have been added as comments within the files itself. Follow the instructions properly.

Let's get to running this application.

To run the web platform, navigate to web_platform directory and type
```
npm install
```

This will install all the required dependencies.

Start the web application.
```
npm start
```

You can see the web application on http://localhost:3000

We need to host the api for creating graph that shows the number and share of number of files that have been uploaded to our server and found to be malicious or safe.

Open another terminal window.
Navigate to cloud_api folder.

Install the dependencies.
```
npm install
```

Start the API server.
```
npm start devStart
```

You can see whether it is running at http://localhost:3001

Open a third terminal window.
Navigate to scripts folder.

Run
```
sh loop.sh
```

Host the files in online_file_uploader on apache or nginx server.
