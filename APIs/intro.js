/*

Application Programming Interface
***********************************

>. APIs simply refers to an interface to a local library or the libraries themselves.
>. Additionally, they are assumed to be over the network to connect clients and servers (or multiple servers depending on your architecture and terminology).



Why Build APIs?
*****************
>. These days, very few applications are stand alone. 
If you build a mobile app, most likely you’ll need a build a server to provide resources for that mobile app. 
You’ll have to build internal APIs. And you’ll consume many third party APIs to avoid reinventing the wheel.

>. An API can act as a platform for new partnership opportunities, new revenue channels, or even new features for your organization. 
Many call this the API economy.


Different Types of APIs
************************

1. RESTful APIs over HTTP with JSON
2. GraphQL


What makes a good API
********************
1. Easy to learn'
2. Easy to use
3. Hard to misuse
4. Easy to read and maintain code that uses it
5 Easy to Extend
6. Sufficiently powerful to satisfy requirements


Core principles of Restful API
*******************************

 ## RESTful stands for Re-presentational S-tate T-ransfer ##

1. Client-Server Architecture
2. Statelessness 
    >> Statelessness refers to that the sever do not store any client context between each request. Each request from the client will have all the information necessarily for the server to provide the response. 
    This is essential when you have higher traffic. 
3. Cacheability 
        >> If each request is stateless and have all the information necessary information for the server to produce a result, then theoretically result can be cached. 
        The response needs to define if a data is cacheable or not. Of course, if you can cache the result, you save back and forth with the Server, thus again help you scale.

4. Layered System 
       >. Means that client does not need (and should not) to know if it is directly connected to the server or someone other layer. Again, this allows you to have proxies and load balancers

5. Uniform Interface
         >. Resource-based: this dictates how the URI schemes should be designed.
         >.Manipulation of Resource Through representations - This constraints how we design the schema for data returned from the sever.
         >.Self-descriptive Messages - Even though RESTful doesn’t dictate the payload schema (it can be JSON or XML), but whatever format you chose, client should be able to know the format type
         >. Hypermedia as the Engine of Application State - A hypermedia-driven site provides information to navigate the site’s REST interfaces dynamically by including hypermedia links with the responses.  
6. Code on demand
     >. Sever can le t client download code to execute. This usually make most sense in the Browser. The issue is that this reduces visibility, so it is used less often.














































*/
