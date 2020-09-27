import sinon from 'sinon';
import request from 'supertest';
import { expect } from 'chai';
import db from './db';
import { app } from './server';

describe('GET /users/:username', () => {
	it('sends the correct response when a user with the username is found', async () => {
		// Create fakeData
		const fakeData = {
				id: "123",
				username: "abc",
				email: "abc@gmail.com"
			};

		// Replace the function that acesses the DB with a fake one that always
		// return the fakeData, and dont need to call the DB (which is slow)
		const stub = sinon
			.stub(db, 'getUserByUsername')
			.resolves(fakeData);

		// Request user 'abc' data from the server 'app' and check if the response
		// is the expected.
		await request(app).get('/users/abc')
			.expect(200)
			.expect('Content-Type', /json/)
			.expect(fakeData);

		// Check if the first argument of the first call made to the stub was 'abc'
		expect(stub.getCall(0).args[0]).to.equal('abc');

		// Remove the stub from 'getUserByUsername', to keep it intact to next tests
		stub.restore();
	});

	it('sends the correct response when there is an error', async () => {
		const fakeError = { message: 'Something went wrong!' };

		const stub = sinon.stub(db, 'getUserByUsername')
			.throws(fakeError);

		await request(app).get('/users/abc')
			.expect(500)
			.expect('Content-Type', /json/)
			.expect(fakeError);

		stub.restore();
	});

	it('returns the appropriate response when the user is not found', async () => {
		const stub = sinon.stub(db, 'getUserByUsername')
			.resolves(null);

		await request(app).get('/users/notAuser')
			.expect(404);

		stub.restore();
		// Check if the first argument of the first call made to the stub was 'not a user'
		expect(stub.getCall(0).args[0]).to.equal('notAuser');
	});
});
