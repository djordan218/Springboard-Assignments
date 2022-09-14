### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?
	- JavaScript works mostly with front-end/HTML/CSS and client-side tasks (meaning it is a framework that the user interacts with), Python is moreso used for server-side tasks.

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming crashing.
	- We could set up a try/except if we are trying to get a missing key and pass something that tells the user it is an error or not available
	- Another method would be using a get method and set a default value

- What is a unit test?
	- A unit test is when we test a specific function or method, small-scale tests.

- What is an integration test? 
	- Integration tests are tests that we use for Flask routes, making sure we get the right status code when we post a get request, primarily testing routes and that we are getting the desired outcome with app.routes and def (python functions)
 
- What is the role of web application framework, like Flask?
	- Flask is written in Python and makes creating web pages and applications easier.

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?

- How do you collect data from a URL placeholder parameter using Flask?
	- we use `@app.route("/index/<whatever>")` when getting data from a url parameter (or at least what is inside the brackets containing "whatever." Then whatever function we write below that route, we can pass in whatever into the parameters and use that data

- How do you collect data from the query string using Flask?
	- we use request.args when getting key/value pairs in the query string

- How do you collect data from the body of the request using Flask?
	- we use request.form when getting key/value pairs in the body, from a form, or JS request

- What is a cookie and what kinds of things are they commonly used for?
	- cookies are used for storing data that is communicated between server & browser (for example when an app knows that we have two things in our cart, what our username is, or if we are logged in)

- What is the session object in Flask?
	- session deals with cookies and when used in Flask it stores cookies that are not readable by anything other than Flask itself

- What does Flask's `jsonify()` do?
	- jsonify makes a response object with the appropriate headers and would be used if we are building an API and expected someone to search and expect a JSON object in return
