const request = require('supertest');
const app = require('../app/app');

describe('Capstone API Tests', () => {
  test('GET / returns project info', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.project).toBe('EKS ArgoCD Capstone');
    expect(res.body.author).toBe('Atul Upadhyay');
  });

  test('GET /health returns healthy', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
    expect(res.body.uptime).toBeDefined();
    expect(res.body.memory).toBeDefined();
  });

  test('GET /users returns all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.users).toBeDefined();
    expect(res.body.total).toBeGreaterThan(0);
  });

  test('GET /users/1 returns user', async () => {
    const res = await request(app).get('/users/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Atul Upadhyay');
  });

  test('GET /users/999 returns 404', async () => {
    const res = await request(app).get('/users/999');
    expect(res.statusCode).toBe(404);
  });

  test('POST /users creates user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Test User', role: 'Tester' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test User');
  });

  test('POST /users without data returns 400', async () => {
    const res = await request(app)
      .post('/users')
      .send({});
    expect(res.statusCode).toBe(400);
  });

  test('GET /unknown returns 404', async () => {
    const res = await request(app).get('/unknown');
    expect(res.statusCode).toBe(404);
  });
});
