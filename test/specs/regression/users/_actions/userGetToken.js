import {url} from '../../../constants';
import supertest from 'supertest';
const request = supertest(url.server);

module.exports = function userGetToken(user) {
  const admin = {
    'email': user.email,
    'password': user.password
  };

  return request
    .post(url.login)
    .send(admin)
    .set('Accept', 'application/json')
    .then(res => {
      return res.body.token;
    });
};
