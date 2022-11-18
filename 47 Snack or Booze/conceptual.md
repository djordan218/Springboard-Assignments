### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React Router is meant to handle routes on the client-side, managing URLs and their parameters.

- What is a single page application?
  A single page app is an app that has all the data on a single web page, but when using React Router we can populate components without having to reload the entire page.

- What are some differences between client side and server side routing?
  Client side routing does not refresh the entire page, only the components that are needed to be rendered. Server side routing frequently involves databases and needing to reload the entire page.

- What are two ways of handling redirects with React Router? When would you use each?
  One way is to place an unlabeled redirect at the bottom of the routes as a "last resort" page when a user puts in a url that does not exist. Another would be to place a <Redirect> route that "redirects" a user when a url doesn't exist (this has to be wrapped in a switch).

- What are two different ways to handle page-not-found user experiences using React Router?
  Load a 404 page (at the bottom of a <Route> series) or redirect to the home page (or whatever page makes the most sense)

- How do you grab URL parameters from within a component using React Router?
  When you include a ":" in front of the value we want to pass to the Route's path prop, we can access that value by using the useParams hook.

- What is context in React? When would you use it?
  Context is a tool in React that lets you share state in the app through different components without having to pass data/functions down as props. Typically you'd want to use it when using nested components and when sharing functions/props down (or up) the line.

- Describe some differences between class-based components and function components in React.
  Class based components extend React components that returns React elements. Function components are just pure JavaScript functions that also return React elements(JSX).

- What are some of the problems that hooks were designed to solve?
  Hooks eliminated the need to wrap tons of things, eliminate huge components with lots of code, and hooks allowed functional components to have state (useState).
