### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  React is a front end framework based on JavaScript that is focused on user interfaces that are built upon components. You'd want to use React when you are focusing on building interactive UIs and simple design views.

- What is Babel?
  Babel is a JavaScript compiler or tool that converts JS language into browser compatible language

- What is JSX?
  JSX stands for JavaScript XML, it lets us write HTML code in React by using JSX.

- How is a Component created in React?
  Create a JavaScript file like Component.js and then import it into the App.js file and the App.js returns the component

- What are some difference between state and props?
  State is used when things are changed, props are just data passed to components

- What does "downward data flow" refer to in React?
  It prevents cluttered code, you want your code to be structured downward into smaller components to prevent confusion in the code

- What is a controlled component?
  A controlled Component is a component that takes data through props and notifies React of changes where a "parent" component controls it by handling the onChange callback and managing the changes in state

- What is an uncontrolled component?
  An uncontrolled component usually has some form of DOM manipulation involved by using a useRef and is more like traditional HTML/jQuery

- What is the purpose of the `key` prop when rendering a list of components?
  The key prop lets React identify components and their data, that is why they must be unique

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  Because it is not unique and can change in relation to the data

- Describe useEffect. What use cases is it used for in React components?
  useEffect is a built in React hook for "side effects" in function components, similar to DOM manipulation. We can useEffect for API calls and changes to elements on the page.

- What does useRef do? Does a change to a ref value cause a rerender of a component?
  useRef lets you reference a value that isn't necessarily needed for rendering.

- When would you use a ref? When wouldn't you use one?
  When we want to "point" to an element on a page and then reference it later, setting up/clearing timers. You wouldn't use useRef too much, we should always prioritize letting React "control" the state of the DOM.

- What is a custom hook in React? When would you want to write one?
  A custom hook is just that - a hook we can create and customize and then callback later. You'd want to use a custom hook when you are frequently using a batch of code.
