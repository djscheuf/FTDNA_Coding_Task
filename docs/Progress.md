# Progress Tracker

## 12JUN2017 - Receive Link
* Forked Repo
* Created Server and Client Folders for Separation of parts of project
* Installed dotnet for Linux
* Ran 'dotnet new webapi' in Server to create basics for Server project.
* Debug initial project using VSCode
    * All threads running some minor warnings
    * Connected to 'localhost:5000/api/values'
    * Received 2 values back in JSON
    * Concluded test

    * Paused for Lunch and other work

    * Returned, finished implementation of Requirements Methods
        * Needs some tests
        * Still need to implement Data Loading...
    * New link should be 'localhost:5000/api/samples'

## 18JUN2017 - Start on Client
* I've studies Angular yesterday and today. 
* I have taken an example project which was setup for type script and module loading and stripped it down
* With the stripped down project I've begun creating my own angular app.
* End of Nigth, I am unable to get the full app working, something about the samples component isn't loading. (Plus I am down with a stomach flu...)

## 19JUN2017 - Resume work on Client
* I fixed the issue with the samples component. My reference to the template URL was bad.
* I've fixed some display issues, and verify with local data that the filters work.
* I am still working on loading remote data.
    * Turns out that I needed to include the http part of the URL
    * Also it turns out that the browser is protecting against CrossSite JSON... Need to make the server allow that in the headers.
    
