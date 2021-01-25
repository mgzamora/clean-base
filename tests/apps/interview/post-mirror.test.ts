import supertest from 'supertest';
import app from '../../../src/apps/interview/app';

describe('Post http://localhost:3000/mirror', () => {
    it('should return body', async () => {
        //Given
        const look = { message: 'You are looking to your past'};
        // When
        const result = await supertest(app).post('/mirror').send(look).set('ContentType', 'application/json');

        // Then
        expect(result.status).toBe(200);
        expect(result.body).toEqual(look);
    })
})