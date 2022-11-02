'use strict';

const db = require('../db');
const { BadRequestError, NotFoundError } = require('../expressError');
const { sqlForPartialUpdate } = require('../helpers/sql');

// functions for jobs

class Job {
  /** Create a job (from data), update db, return new job data.
   *
   * data should be { id, title, salary, equity, company_handle }
   *
   * Returns { id, title, salary, equity, company_handle }
   *
   * Throws BadRequestError if job is already in database.
   * */

  static async create({ title, salary, equity, company_handle }) {
    const duplicateCheck = await db.query(
      `SELECT title
           FROM jobs
           WHERE title = $1`,
      [title]
    );

    if (duplicateCheck.rows[0])
      throw new BadRequestError(`Duplicate job: ${title}`);

    const result = await db.query(
      `INSERT INTO jobs
           (title, salary, equity, company_handle)
           VALUES ($1, $2, $3, $4)
           RETURNING id, title, salary, equity, company_handle`,
      [title, salary, equity, company_handle]
    );
    const job = result.rows[0];

    return job;
  }

  /** Find all jobs with optional search filter.
   * Search filters are:
   * - title
   * - minSalary
   * - hasEquity (boolean) - if true, filter jobs that provide non-zero amt of equity. if false, list all jobs regardless of equity
   *
   * Returns [{ title, salary, equity, company_handle }, ...]
   * */

  static async findAll(searchFilters = {}) {
    // search filters passed in from GET /
    let search = `SELECT id, title, salary, equity, company_handle
           FROM jobs`;

    // arrays for storing values in (both search and SQL query)
    let sqlParams = [];
    let searchValues = [];

    // deconstructing filters
    const { title, minSalary, hasEquity } = searchFilters;

    // pushing values (if present) to arrays from searchFilters
    if (title !== undefined) {
      searchValues.push(`%${title}%`);
      sqlParams.push(`title ILIKE $${searchValues.length}`);
    }
    if (minSalary !== undefined) {
      searchValues.push(minSalary);
      sqlParams.push(`salary > $${searchValues.length}`);
    }
    if (hasEquity) {
      searchValues.push(0);
      sqlParams.push(`equity > $${searchValues.length}`);
    }
    if (sqlParams.length > 0) {
      search += ' WHERE ' + sqlParams.join(' AND ');
    }

    search += ' ORDER BY title';
    console.log(search);
    const jobRes = await db.query(search, searchValues);
    return jobRes.rows;
  }

  /** Given a company handle, return data about company.
   *
   * Returns { handle, name, description, numEmployees, logoUrl, jobs }
   *   where jobs is [{ id, title, salary, equity, companyHandle }, ...]
   *
   * Throws NotFoundError if not found.
   **/

  static async get(id) {
    const jobSearch = await db.query(
      `SELECT id, title, salary, equity, company_handle FROM jobs WHERE id = $1`,
      [id]
    );

    const job = jobSearch.rows[0];

    if (!job) throw new NotFoundError(`No job: ${id}`);

    return job;
  }

  /** Update company data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain all the
   * fields; this only changes provided ones.
   *
   * Data can include: {name, description, numEmployees, logoUrl}
   *
   * Returns {handle, name, description, numEmployees, logoUrl}
   *
   * Throws NotFoundError if not found.
   */

  static async update(id, data) {
    const { setCols, values } = sqlForPartialUpdate(data, {});
    const idVarIdx = '$' + (values.length + 1);

    const querySql = `UPDATE jobs 
                      SET ${setCols} 
                      WHERE id = ${idVarIdx} 
                      RETURNING id, title, salary, equity, company_handle;`;
    const result = await db.query(querySql, [...values, id]);
    const job = result.rows[0];

    if (!job) throw new NotFoundError(`No job: ${id}`);

    return job;
  }

  /** Delete given company from database; returns undefined.
   *
   * Throws NotFoundError if company not found.
   **/

  static async remove(id) {
    const result = await db.query(
      `DELETE
           FROM jobs
           WHERE id = $1
           RETURNING id`,
      [id]
    );
    const job = result.rows[0];

    if (!job) throw new NotFoundError(`No job: ${id}`);
  }
}

module.exports = Job;
