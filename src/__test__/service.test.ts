import request from 'supertest';
import {getApplication} from '../app';

const app = getApplication();

describe('GET/ unit-test', () => {
    it('should respond with 200 status code', async () => {
        const response = await request(app).get('/unit-test').send();
        expect(response.statusCode).toBe(200);
    });

    it('should respond with an array', async () => {
        const response = await request(app).get('/unit-test').send();
        expect(response.body).toBeInstanceOf(Array);
    });

})

describe('POST/ unit-test', () => {
    //should return 201 status code
    it('should return 200 status code', async () => {
        const response = await request(app).post('/unit-test').send();
        expect(response.statusCode).toBe(200);
    });

    //should respond with a content type of json
    it('should have a content-type: application/json', async () => {
        const response = await request(app).post('/unit-test').send();
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
    })
})