import { postRequest, getRequest, promise, mis } from '../Service.Utils';
import { API_URL } from './../../Config/api'

test('get to API', () => {
  return getRequest(API_URL, {}, "").then(data => expect(data).toBe('done!'))
});
test('post to API', () => {
  return postRequest(API_URL, {}, "").then(data => expect(data).toBe('done!'))
});

