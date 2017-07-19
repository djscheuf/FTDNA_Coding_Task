# Design Discussion for Data Models and API

##Server Side
###API
* Get
    * Get forms the backbone of the API, allowing the most data thru, in the best available representation
    * That being said it returns a 'heavy' data model, and so isn't well suited to rapid requests without caching.
        * Thus we implemented simple caching
    * With Caching in place, other 'Gets' can use the results from this Get to simplify their code and hopefully improve their performance.
    * In the long term this becomes a critical path, and would benefit from performance optimizations. In particular a revamped Data-model.
    * But for this simple test case, it should be sufficient.
    * I chose more maintainable code over performance in this case.

* GetById
    * Relies on the main 'Get' and then filters by SampleId, using Linq
    * This may be somewhat wasteful in terms of memory (on the stack for the server).
        * Which might be resolved by pushing the View functionality into a Database rather than a Code construct.
    * I chose simpler code over performance in this case.

* GetByStatus
    * Similar to Get By Id
    * Simple quesy against another Id.
    * There is some potential for creating additional Views in the Database if the Statuses are used as part of a Workflow
        * Having a View associated with each Status allows the work to quickly be queued.
        * The data in each of the views would essentially be the same
            * though you could technically drop the Status information given it will be implied by the View you use.
        * The trade off will likely be between performance ( sort it yourself vs. have the DB do it) and Code Maintainability. 
            * By forcing the Filtering to the DB you obscure some of the actions, whereas having it in code it remains more visible.
            * Should also be noted that client-side simple sorting may be reasonable for smaller data-sets (something < 10,000 I would think)
    * I chose simpler code over performance in this case.

* GetByPartialUser
    * Similar to Get By Id
    * Used the String.Contains() to find partial user matchs.
        * This call is known to be somewhat slow...
        * Might improve performance by pushing this into a SQL query or a StoredProc
        * But at the moment it is simpler to put it in C#, to maintain Code Visibility.
    * I chose more maintainable code over performance in this case.

* Create
    * I made the assumption that the new Sample must be made by an existing user, with an existing Status
        * The Requirements did not specify
        * Plus implementing it is this way keeps the API a little safer.
            * Cannot just assume it will create users for you
        * Additionally, changes can be made in the future to support creating a User with a Sample
            * But if that is version 1 it is very difficult to retract that capability.
    * Since this is the only place where the cache can become invalid, we clear the cache before changing the model.
        * Not sure if it is better to clear before or after model updates. Might need a semaphore kind of thing to ensure data accurac.
            * This is because the Cache is used by all 'Gets'
    * I tried to supply additional infromation in the HTTP Response so that users could see what error caused their sample creation to bounce.
    * I may need to prevent the provision of a sample with an Id.
        * Since it is a new sample the ID should always be the latestID+1, and it should be determined on the server side.
        * Might also be good to return that new Id in the Response. 
            * But that does not match the requirements. Will leave as a TODO.
    * I choose to limit the API on purpose to allow for easier evolution of the API in the future and to make the code base more maintainable. As a result, I made sure to supply the user with additional infromation for why a request might fail.

###Data Models
The Server-side models basically are given in the assignment:
* Status is effectively a reference Table, and shouldn't really be updated. A la Enum
* User is fairly normal, and used to filter Samples
* Sample is the heavy-hitter with most of the data we are interested in.
    * That being said attention should be paid to ensure it doesn't get overly bulk, and remains performan
    * Further, we'll be joining other tables to this. It might be wise to impose FKs on Status and User to ensure a Sample does not exist in a vacuum. 
        * This discussion however would require feedback from client of proiject. Therefore we will wait on this change.
        * Also should note such a change will dramatically impact performance on entering new Samples! But it will also improve the accuracy(?) of our data model by improving consisten representations, and associations.
* CompleteSampleView ends up being the view I would create in the SQL database if I were to be working on the server.
    * It represend the full picture of every Sample, including the Status and User.
    * It allows for the desired level of filtering and information presentaion.
    * Further, it can be cached to improve query performance, since all desired information is present.
    * However, since it is a bigger model, Cache invalidation and re-initialization is rather expensive compared to just the list of samples.
    
####Keys
Since the objects for this project are not stored in a database, and instead are loaded from files, I have elecected to turn off the Key Generation feature. This allows the ids specified in the files to be maintained.

Where this project to be moved ontop of aan actual database, I would recommend turning key generation back on, and would adjust the data loading functionality.