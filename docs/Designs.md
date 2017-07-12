# Design Discussion for Data Models and API

## API

##Data Models
The Server-side models basically are given in the assignment:
* Status is effectively a reference Table, and shouldn't really be updated. A la Enum
* User is fairly normal, and used to filter Samples
* Sample is the heavy-hitter with most of the data we are interested in.
    * That being said attention should be paid to ensure it doesn't get overly bulk, and remains performan
    * Further, we'll be joining other tables to this. It might be wise to impose FKs on Status and User to ensure a Sample does not exist in a vacuum. 
        * This discussion however would require feedback from client of proiject. Therefore we will wait on this change.
        * Also should note such a change will dramatically impact performance on entering new Samples! But it will also improve the accuracy(?) of our data model by improving consisten representations, and associations.