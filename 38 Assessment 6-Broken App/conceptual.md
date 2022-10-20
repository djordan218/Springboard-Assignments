### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Callbacks (functions to call once an async method has finished running), promises (chaining methods together), and async/await

- What is a Promise?
  A "one time guarantee" of a future value in JavaScript - can be "pending", "fulfilled", or "rejected". A promises's value is not necessarily known when it is created.

- What are the differences between an async function and a regular function?
  An async function is not run synchronously like the rest of JS runs, an async function always returns a promise.

- What is the difference between Node.js and Express.js?
  Node.js is run server-side and Express.js is a framework FOR Node.js

- What is the error-first callback pattern?
  The error-first callback pattern is what happens in Node.js. It's a functon that returns an error object whenever any successful data is returned by the function.

- What is middleware?
  Code that runs in the "middle" of a request/response cycle, contains the next variable

- What does the `next` function do?
  The next functions moves on to the "next" function when called to avoid any code crashing - if not called, it will not continue to the "next" function

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

- using Promise.all would be a better way to do this. Could also save the baseURL to a variable to reduce duplicated code. Also would be better to use axios isntead of $.getJSON
