import {url} from '../../../constants';
import {users} from '../../../../data/users.data';
import userGetToken from '../../users/_actions/userGetToken';

import supertest from 'supertest';
const request = supertest(url.server);

module.exports = async function challengeCreate(challenge) {
  const token = await userGetToken(users.admin);
  return request
    .post(url.challenges)
    .send(challenge)
    .set('Accept', 'application/json')
    .set('Authorization', token)
    .then(res => {
      return res.body.payload.challengeId;
    });
};
