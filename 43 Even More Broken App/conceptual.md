### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JSON Web Token - similar to cookies/session in Flask, it is a way we can store credentials and information for a user via JSON data that contains a payload.

- What is the signature portion of the JWT? What does it do?
  It is the header and payload of a JWT encoded - it is not encrypted.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, the signature contains the header/payload data.

- How can you implement authentication with a JWT? Describe how it works at a high level.
  In authentication, a user can login using their credentials and a JWT will be returned. Those credentials will be stored in the token payload. When a user wants to access a protected route, they will send the JWT and then it will pass the security measures and then be allowed into the route.

- Compare and contrast unit, integration and end-to-end tests.
  Integration tests focus on individual aspects tested as a group, it verifies whether or not individual pieces will work together. End-to-end tests verifies that the software will work from beginning to end.

- What is a mock? What are some things you would mock?
  Mock is testing where you create a fake version of something that is similar to the real one. Database queries or INSERTS would be good to mock, or anything where you are accessing a database or API.

- What is continuous integration?
  CI is where developers put code into a shared repo frequently and update it a lot.

- What is an environment variable and what are they used for?
  Strings that have information for the system and the logged on user, variables control what programs do.

- What is TDD? What are some benefits and drawbacks?
  TDD is where you start with tests and then you add the code. Benefits would be stronger code with less bugs, but it does take more time.

- What is the value of using JSONSchema for validation?
  It validates a lot of data with less code, making sure strings are strings and integers are integers and that parts of API schema are in the right data format.

- What are some ways to decide which code to test?
  It is best to code the start, middle, and end parts as well as making sure data is validated.

- What does `RETURNING` do in SQL? When would you use it?
  `RETURNING` returns the specified data, we'd use it if we didn't need to use all of the data in the database and only just need parts of it.

- What are some differences between Web Sockets and HTTP?
  Web Sockets are faster than an HTTP connection, but HTTP is able to store data and is better about transmitting data.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  Definitely Express over Flask. It seems way more ligthweight and straightforward, also it is nice to have the ability to have an entire program be used in one language.
