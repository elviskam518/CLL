const request = require('supertest');
const app = require('./webserver');



describe('Test the things service', () => {
    test('GET /search', () => {
        return request(app)
	    .get('/search')
	    .expect(200);
    });

    test('GET /gallery', () => {
      return request(app)
    .get('/gallery')
    .expect(200);
  });

  test('GET /home', () => {
    return request(app)
  .get('/')
  .expect(200);
  });

  test('GET /gallery returns HTML', () => {
    return request(app)
      .get('/gallery')
      .expect('Content-type', /text\/html/); // Updated to expect HTML content type
  });

  });

  