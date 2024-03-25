# Assignment 4

## Report
It is the report of the Assignment 4.

## Create a simple configuration file in GitHub in JSON format
I created an new and private repository on Github with a JSON File.
You can see the file created clicking in [Here](./github_settings_example/github_settings.json).
This file lists the Safeway stores with some settings from those stores and also which zipcodes they map.

## Create a new HTTPS web service.
The webservice is stored in the folder backend [Here](./backend)

### Created a github token to access json file.
I created and configurated Upstream API to access the json File. In order to do it, I created:
- Setting to access the github token, the key itself is stored in the **.env file**
![Github token](./Screenshots/1.png)

### Call the API/JSON file from Github.
- Besides calling the API using axios, I had to include in the header some information like github token.
![Calling Github Json](./Screenshots/2.png)

- Getting github file response
![Response Github Json](./Screenshots/3.png)

### Create a new POST request
- I created a POST that filter the Stores by ZipCode, having to send zipcodes in the body of requisition.
![Post Request](./Screenshots/4.png)

- Response of POST Request
![Post Response](./Screenshots/5.png)

### Create your own logFormat for logger.
- I created the logger to include in the system, besides datetime and level and message, I include the IP Address:
![Logger](./Screenshots/6.png)

- Result of Logger
![Logger Result](./Screenshots/7.png)

## Create a new React application.
The frontend in React is stored in the folder frontend [Here](./frontend)

### Create a new component to fetch the endpoint you created in your server.
I created a component to fetch information from backend.
The component List all stores.
- Fetch all stores
![FrontEnd all stores](./Screenshots/8.png)

I also created a filter for zipcode that filter stores that area maped in a specific zipcode.
- Filtering store by zipcode
![Fronted filtered stores](./Screenshots/9.png)

## Create your own custom hooks
I created a my own hook that handle zipcode when it is empty.

-Hook
![Zipcode Hook](./Screenshots/10.png)

-Result: If I Don't fill zipcode and try to filter it, an error message shows up.
![Error Hook](./Screenshots/11.png)
