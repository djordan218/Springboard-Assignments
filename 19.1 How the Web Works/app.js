// GET requests
// requests without side effects (don't change server data)
// typically arguments are passed along in query string
// entering URL in browser, clicking links, and SOME form submissions

// POST requests
// requests with side effects (change data on server)
// typically, arguments sent as body of the request (not in a query string)
// some form submissions (but never entering URL in browser or links)
// always do this if there's a side effect: sending mail, charge credit card, etc
// most websites don't let you post unless you are authenticated (password, username, etc)

// ignore the text above, just me taking notes

// HOW THE WEB WORKS EXERCISE
// Part One: Solidify Terminology
// In your own terms, define the following terms:

// What is HTTP?
// Hyper Text Transfer Protocol, how we get and send data to a server

// What is a URL?
// Uniform Resource Locator, an address for the internet

// What is DNS?
// Domain Name System, takes readable URLs and turns them into IP addresses

// What is a query string?
// it lets us send key/value pairs into the url in a specific format

// What are two HTTP verbs and how are they different?
// GET, getting data from the server
// POST, sending data to the server (like making a post on facebook/reddit)

// What is an HTTP request?
// a request from a client to a server (getting HTML from website)

// What is an HTTP response?
// response from the server to the client (sending HTML to the client)

// What is an HTTP header? Give a couple examples of request and response headers you have seen.
// HTTP headers provide info about the request or the response
// request headers: host, user-agent, cookie
// response headers: last-modified, set-cookie, cache-control

// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
// the browser turns the URL into an IP using DNS
// makes a request to that address
// then the server of that address sends a response
// then the browser takes that response and makes a DOM from that HTML and finds the resources (CSS, JS)
// then the browser makes separate HTTP requests for those resources and gets a response from the server for each
