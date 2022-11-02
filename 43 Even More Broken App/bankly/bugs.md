- the bcrypt work factor was only set to 10, changed to 12 to improve security

- there was not a POST route to register a user. Added POST route for /users that lets a user register with data

- in the auth/register route it was sending data to authenticate incorrectly, so changed variables to be more accurate and now able to authenticate and get a token

- an unnecessary 401 error code in authUser function in middleware folder. Deleted.

- improved the password hashing function in the authenticate function to be more user friendly and easier to read

- in auth/login there was not an await for the async function for User.authenticate

- User.getAll() was passing in a username, password for some reason - wasn't needed. Deleted.

- User.get() was not throwing a 404 error. Added "throw" in try/catch in User.get to fix.
