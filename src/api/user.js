import request from './request';

export default async function getUserInfo() {
  try {
    const res = await request('/api/user');
    console.log('api res:', res);
    return res;
  } catch (err) {
    console.log('api err:', err);
    return null;
  }
}
