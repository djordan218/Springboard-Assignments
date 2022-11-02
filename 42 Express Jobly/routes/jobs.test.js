'use strict';

const request = require('supertest');

const app = require('../app');

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  testJobIds,
  u1Token,
  adminToken,
} = require('./_testCommon');

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** POST /jobs */

describe('POST /jobs', function () {
  test('ok for admin', async function () {
    const resp = await request(app)
      .post(`/jobs`)
      .send({
        title: 'J-new',
        salary: '10',
        equity: '0.2',
        company_handle: 'c1',
      })
      .set('token', `${adminToken}`);
    expect(resp.statusCode).toEqual(201);
    expect(resp.body).toEqual({
      job: {
        id: expect.any(Number),
        title: 'J-new',
        salary: 10,
        equity: '0.2',
        company_handle: 'c1',
      },
    });
  });

  test('unauth for users', async function () {
    const resp = await request(app)
      .post(`/jobs`)
      .send({
        companyHandle: 'c1',
        title: 'J-new',
        salary: 10,
        equity: '0.2',
      })
      .set('token', `${u1Token}`);
    expect(resp.statusCode).toEqual(401);
  });

  test('bad request with missing data', async function () {
    const resp = await request(app)
      .post(`/jobs`)
      .send({
        company_handle: 'c1',
      })
      .set('token', `${adminToken}`);
    expect(resp.statusCode).toEqual(400);
  });
});

/************************************** GET /jobs */

describe('GET /jobs', function () {
  test('ok for anon', async function () {
    const resp = await request(app).get(`/jobs`);
    expect(resp.body).toEqual({
      jobs: [
        {
          id: expect.any(Number),
          title: 'J1',
          salary: 1,
          equity: '0.1',
          company_handle: 'c1',
        },
        {
          id: expect.any(Number),
          title: 'J2',
          salary: 2,
          equity: '0.2',
          company_handle: 'c1',
        },
        {
          id: expect.any(Number),
          title: 'J3',
          salary: 3,
          equity: null,
          company_handle: 'c1',
        },
      ],
    });
  });

  test('works: filtering', async function () {
    const resp = await request(app).get(`/jobs`).query({ hasEquity: true });
    expect(resp.body).toEqual({
      jobs: [
        {
          id: expect.any(Number),
          title: 'J1',
          salary: 1,
          equity: '0.1',
          company_handle: 'c1',
        },
        {
          id: expect.any(Number),
          title: 'J2',
          salary: 2,
          equity: '0.2',
          company_handle: 'c1',
        },
      ],
    });
  });

  test('works: filtering on 2 filters', async function () {
    const resp = await request(app)
      .get(`/jobs`)
      .query({ minSalary: 2, title: '3' });
    expect(resp.body).toEqual({
      jobs: [
        {
          id: expect.any(Number),
          title: 'J3',
          salary: 3,
          equity: null,
          company_handle: 'c1',
        },
      ],
    });
  });
});

/************************************** GET /jobs/:id */

describe('GET /jobs/:id', function () {
  test('works for anon', async function () {
    const resp = await request(app).get(`/jobs/${testJobIds[0]}`);
    expect(resp.body).toEqual({
      job: {
        id: testJobIds[0],
        title: 'J1',
        salary: 1,
        equity: '0.1',
        company_handle: 'c1',
      },
    });
  });

  test('not found for no such job', async function () {
    const resp = await request(app).get(`/jobs/0`);
    expect(resp.statusCode).toEqual(404);
  });
});

/************************************** PATCH /jobs/:id */

describe('PATCH /jobs/:id', function () {
  test('works for admin', async function () {
    const resp = await request(app)
      .patch(`/jobs/${testJobIds[0]}`)
      .send({
        title: 'J-New',
      })
      .set('token', `${adminToken}`);
    expect(resp.body).toEqual({
      job: {
        id: expect.any(Number),
        title: 'J-New',
        salary: 1,
        equity: '0.1',
        company_handle: 'c1',
      },
    });
  });

  test('unauth for others', async function () {
    const resp = await request(app)
      .patch(`/jobs/${testJobIds[0]}`)
      .send({
        title: 'J-New',
      })
      .set('token', `${u1Token}`);
    expect(resp.statusCode).toEqual(401);
  });
});

/************************************** DELETE /jobs/:id */

describe('DELETE /jobs/:id', function () {
  test('works for admin', async function () {
    const resp = await request(app)
      .delete(`/jobs/${testJobIds[0]}`)
      .set('token', `${adminToken}`);
    expect(resp.body).toEqual({ deleted: `${testJobIds[0]}` });
  });

  test('not found for no such job', async function () {
    const resp = await request(app)
      .delete(`/jobs/0`)
      .set('token', `${adminToken}`);
    expect(resp.statusCode).toEqual(404);
  });
});
