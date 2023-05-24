You should have mongoDB set up on your computer.

The DB will be created automatically created.

Firstly send a `POST` request to `http://localhost:8080/api/v1/auth/register` sending 
a `RegistrationRequest` object like:

```json
{
    "email": "somebody@gmail.com",
    "firstName": "Bob",
    "lastName": "Smith",
    "password": "qwertz",
    "company": "Formula 1",
    "team": "Red bull"
}
```

If the registration is successful, you will get a JWT token, that you should add to every 
request header you send to the API. Only .../register and .../login endpoints are not protected 
(and websocket for using websockets, not the best for security i know...).

For publishing an event you can use an `EventDTO` like this:

```json
{
    "name": "Senior képzés",
    "startDateTime": "2023-07-15T15:25",
    "endDateTime": "2023-07-17T15:25", 
    "entranceStartTime": "2023-07-13T15:25",
    "entranceEndTime": "2023-07-16T15:25",
    "registrationEndTime": "2023-07-16T15:25",
    "venue": "Schönherz Zoltán kollégium",
    "description": "Gyertek jó lesz",
    "attendeeLimit": 1024
}
```

Applying to the event you should use an `ApplicationDTO` where you should add the generated event ID, a payment method,
the users' username (email), and an isCreated flag, which is for the websocket section (when you're applying it is true, 
declining the application it is false)

This should get you started using my application. :)