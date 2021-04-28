import {url} from '../../../constants';
import {users} from '../../../../data/users.data';
import userGetToken from '../../users/_actions/userGetToken';

import supertest from 'supertest';
const request = supertest(url.server);

module.exports = async function challengeDelete(id) {
  const token = await userGetToken(users.admin);
  return request
    .delete(`${url.challenges}/${id}`)
    .set('Accept', 'application/json')
    .set('Authorization', token);
};
