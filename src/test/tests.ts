import chai from 'chai';
import { server } from "../app";
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('Testing parsing requests', () => {
    const data = {data: "JOHN0000MICHAEL0009994567"};

    it('should POST /api/v1/parse', () => {
        chai.request(server).post('/api/v1/parse')
            .send(data)
            .end((err, res) => {
                chai.expect(res.status).to.be.eql(200);
                chai.expect(res.body).to.eql({
                    "statusCode": 200,
                    "data": {
                        "firstName": "JOHN0000",
                        "lastName": "MICHAEL000",
                        "clientId": "9994567",
                    },
                });
            });
    });
    it('should POST /api/v2/parse', () => {
        chai.request(server).post('/api/v2/parse')
            .send(data)
            .end((err, res) => {
                chai.expect(res.status).to.be.eql(200);
                chai.expect(res.body).to.eql({
                    "statusCode": 200,
                    "data": {
                        "firstName": "JOHN",
                        "lastName": "MICHAEL",
                        "clientId": "999-4567",
                    },
                });
            });
    });
});
