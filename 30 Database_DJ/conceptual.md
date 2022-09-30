### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?
- PostgreSQL is an open source database management system that supports both SQL and JSON queries

- What is the difference between SQL and PostgreSQL?
- PostgreSQL is more advanced than SQL, allows for foreign keys to be used as well it being an object-relational database. When working with simple non-intricate databases, it is best to use SQL for its simplicity.

- In `psql`, how do you connect to a database?
- \c database_name

- What is the difference between `HAVING` and `WHERE`?
- WHERE is used on a row's data, not on chunks of data. That is where WHERE comes in. WHERE selects things on a row by row basis, HAVING works on groups.

- What is the difference between an `INNER` and `OUTER` join?
- INNER JOIN gives intersection of tables (what they have in common), OUTER JOIN gives the full union of tables, all the rows in each mashed into one table

- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?
- LEFT OUTER will all rows on the left (or first listed) table, plus any common rows in the other table
- RIGHT OUTER will give all the rows on the right (or latter listed) table, plus any common rows in the other table

- What is an ORM? What do they do?
- Object Related Mapping provides an object-oriented layer between databases and programming languages - keeps us from having to write confusing SQL queries

- What are some differences between making HTTP requests using AJAX and from the server side using a library like `requests`?
- AJAX is more dynamic and the page does not have to be reloaded and javascript can manipulate the page as it sees fit, `requests` is a python library that does make HTTP requests easier but it usually requires a page reload

- What is CSRF? What is the purpose of the CSRF token?
- to protect data, it creates a unique and secret value that is generated on the server-side that can only be read by itself

- What is the purpose of `form.hidden_tag()`?
- generates a hidden field that includes a CSRF token that protects the form from hacking and attacks
