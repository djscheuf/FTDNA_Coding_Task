# Instructions
Notes: This work was developed on a Linux Mint 17 machine, using Visual Studies Code.
The Build Engine is: Microsoft (R) Build Engine version 15.1.1012.6693

The Server relies on ASP.Net WebAPI, and the Linux dotnet engine/libraries. The Client relies
 on Angluar2, Typescript, and conforms to es5 standards.

## Server API Tests
Please load the code in Visual Stuidos Code, and hit F5, this should run the server application. 
If all goes well, then your webbrowser should open up to localhost:5000.

Since this code was written for and tested on a Linux system it is possible that the data loading step will fail due to file path issues. If this is the case, please open  SamplesController.cs and comment out the 'Linux Loading' Lines(27-29?), and uncomment the 'Windows Loading Lines(33-35?).

Once the application is running, you will be able to run the get tests will ease. Please try the following URLs:
* http://localhost:5000/api/samples
    * You will see a JSON object will all samples, their Users, and their Status
* http://localhost:5000/api/samples/GetById/10
    * You will see the Sample with ID10, with its user and status
* http://localhost:5000/api/samples/GetByUser/Clint
    * You will see the samples whose User is Clint
* http://localhost:5000/api/samples/GetByUser/e
    * You will see all samples whose user names contain an e
    * http://localhost:5000/api/samples/GetByUser/E will produce the same results.
* http://localhost:5000/api/samples/GetByStatus/1
    * You will see all samples whose statusId is 1 or Accessioning(sp?)

## Client Tests
Please see the included screenshots in docs/screenshots. They will show you what you should see. To start the client, you should just need to load the index.html under client in your prefered web-browser. I personally used Firefox.
1. Please click Retrieve Data
    * You will see the 100 initial samples
2. Please Filter by Status 'Acc' and User 'Kim'
    * You will see only the samples for User Kim in the Accessioning(sp?) status.
3. Please Click the 'Easy Sample' button in the Create New Sample area.
    * This will fill in an easy test sample for you
4. Please click the 'Submit Query' button.
    * This will send the sample to the server.
    * You should see some text appear 'Server Response: Ok' if the sample worked
    * If it does not work, please check the Browser Console Log.
5. Please change the filter from User 'Kim' to User 'Kr' and please click 'Retrieve data' again
    * This will reload the data, and filter the list so you can see the easy sample, if that is what you created. 
    * If not, feel free to adjust your search to isolate whatever sample you created successfuly if you did not use the 'easy button'

## Known Shortcomings
* Admittedly, the server under-utilizes EF, since the models are very simple. It would be feasible to simplify the server if need, but time is short.
* The client's create area could be made more user friendly. Specifically only Ids are supported. However this would require more advance use of Angular, as well as the potential support from the server to get all allowed users, and statuses.
* The client does not auto-refresh upon a submit. This could technically be done, but it is difficult to accomplish. In the end it would improve the UX and is a nice to have.
* The Server _does not_ save any created samples, if it is shutdown. While the server is running the data can be created and reviewed, but it does not persist. For the purposes of this project, I beleive that is sufficient.

